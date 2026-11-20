SIAE - SISTEMA DE ASISTENCIA ESCOLAR
===================================

EJECUTAR EN WINDOWS
1. Instala Node.js LTS desde https://nodejs.org/ (solo la primera vez).
2. Extrae toda la carpeta del ZIP en una ubicacion de tu computadora.
3. Haz doble clic en INICIAR_SIAE.bat.
4. Espera a que se abra el navegador en http://localhost:3000.
5. Para cerrar el sistema, cierra la ventana negra de la terminal.

ACCESO INICIAL DE ADMINISTRADOR
Usuario: admin
Contrasena inicial: admin123

IMPORTANTE: cambia esta contrasena antes de cargar informacion real. Esta version
es para uso local en una sola computadora. No la publiques en Internet tal como
esta: la autenticacion y la proteccion de las rutas de la API necesitan un refuerzo
antes de exponer datos escolares.

BASE DE DATOS Y RESPALDOS
La aplicacion guarda los datos en data\siae_database.json. No borres ese archivo.
Para hacer una copia de seguridad, ejecuta RESPALDAR_DATOS.bat. Guarda la carpeta
respaldos en un lugar seguro y no compartas datos personales de estudiantes.

REQUISITOS
- Windows 10/11
- Node.js LTS (incluye npm)
- Conexion a Internet en la primera ejecucion para descargar dependencias

NOTAS
- El primer inicio puede tardar varios minutos.
- La aplicacion sigue funcionando mientras la ventana de la terminal permanezca abierta.
- localhost solo es accesible desde esa computadora. Para acceso desde otros equipos
  hace falta desplegarla en un servidor y asegurar la autenticacion y la base de datos.
