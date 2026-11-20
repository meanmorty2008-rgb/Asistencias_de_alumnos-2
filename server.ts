import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { apiRouter } from './server/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  // Body parsers
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check endpoint for Render / monitoring
  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', service: 'SIAE Sistema de Asistencia Escolar', timestamp: new Date().toISOString() });
  });

  // Mount REST API
  app.use('/api', apiRouter);

  if (!isProduction) {
    // Development mode with Vite Middleware
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: PORT,
        hmr: process.env.DISABLE_HMR !== 'true'
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log(`[SIAE Dev] Vite middlewares attached. Dev server running on port ${PORT}`);
  } else {
    // Production mode (Render / Cloud Run)
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
    console.log(`[SIAE Prod] Serving static build from ${distPath} on port ${PORT}`);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`=======================================================`);
    console.log(`  SIAE - Sistema de Asistencia Escolar (6.° Programación)`);
    console.log(`  Servidor activo en: http://0.0.0.0:${PORT}`);
    console.log(`=======================================================`);
  });
}

startServer().catch(err => {
  console.error('Fatal error starting SIAE server:', err);
  process.exit(1);
});
