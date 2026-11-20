# SIAE - Sistema de Asistencia Escolar

## Ejecutar en Windows sin Visual Studio Code

1. Instalar Node.js LTS desde https://nodejs.org/.
2. Extraer toda la carpeta del ZIP.
3. Hacer doble clic en `INICIAR_SIAE.bat`.
4. El primer inicio descarga las dependencias y compila el sitio.
5. Abrir `http://localhost:3000` si el navegador no se abre automáticamente.

Usuario inicial: `admin`  
Contraseña inicial: `admin123`

Cambiar la contraseña antes de cargar datos reales.

## Datos

La versión local guarda los registros en `data/siae_database.json`. El archivo se crea
automáticamente al iniciar por primera vez. Para respaldarlo, ejecutar
`RESPALDAR_DATOS.bat`. No borrar la carpeta `data`.

## Alcance y seguridad

Esta entrega está preparada para uso local en una computadora y un único usuario
administrador. `localhost` no permite entrar desde otros dispositivos. No publicar
esta versión directamente en Internet: antes se debe reforzar la autenticación y
proteger todas las rutas de la API, además de migrar el almacenamiento a una base
de datos de servidor con copias de seguridad.

La carpeta `data` contiene información escolar: protegerla y no compartirla.
