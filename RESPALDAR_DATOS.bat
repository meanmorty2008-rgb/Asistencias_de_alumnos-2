@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist data\siae_database.json (
  echo Todavia no existe la base de datos para respaldar.
  pause
  exit /b 1
)
if not exist respaldos mkdir respaldos
for /f %%i in ('powershell -NoProfile -Command "Get-Date -Format yyyyMMdd_HHmmss"') do set FECHA=%%i
copy data\siae_database.json respaldos\siae_database_%FECHA%.json >nul
if errorlevel 1 (
  echo No se pudo crear el respaldo.
) else (
  echo Respaldo creado en la carpeta respaldos.
)
pause
