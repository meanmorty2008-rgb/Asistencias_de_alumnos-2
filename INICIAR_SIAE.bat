@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"
title SIAE - Sistema de Asistencia Escolar

echo ================================================
echo   SIAE - Sistema de Asistencia Escolar
echo ================================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo No se encontro Node.js.
  echo Instala la version LTS desde https://nodejs.org/ y vuelve a ejecutar este archivo.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Primera ejecucion: instalando dependencias. Esto puede tardar unos minutos...
  call npm install --legacy-peer-deps
  if errorlevel 1 (
    echo.
    echo No se pudieron instalar las dependencias. Revisa tu conexion a Internet.
    pause
    exit /b 1
  )
)

echo.
echo Preparando la aplicacion...
call npm run build
if errorlevel 1 (
  echo.
  echo La compilacion fallo. Copia el mensaje de error para poder revisarlo.
  pause
  exit /b 1
)

echo.
echo Iniciando SIAE en http://localhost:3000
echo No cierres esta ventana mientras uses el sistema.
start "" http://localhost:3000
set NODE_ENV=production
call npm start
pause
