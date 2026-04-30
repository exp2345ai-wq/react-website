@echo off
REM TaruGuardians Startup Script for Windows
REM This script helps start the backend server

echo ======================================
echo   TaruGuardians Backend Startup
echo ======================================
echo.

REM Change to backend directory
cd /d "%~dp0backend"

REM Check if .env exists
if not exist .env (
    echo ERROR: .env file not found!
    echo Please copy .env.example to .env and configure it:
    echo   copy .env.example .env
    echo.
    echo Then edit .env and set:
    echo   - MONGODB_URI (your MongoDB connection string)
    echo   - GOOGLE_CLIENT_ID (your Google OAuth client ID)
    echo   - GOOGLE_CLIENT_SECRET (your Google OAuth client secret)
    pause
    exit /b 1
)

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
)

echo.
echo Starting TaruGuardians Backend Server...
echo.
echo Make sure MongoDB is running!
echo   - Local: mongod (run in another command prompt)
echo   - Atlas: Ensure your MONGODB_URI is correct in .env
echo.
echo Server will be available at:
echo   http://localhost:5000
echo.
echo Frontend pages:
echo   http://localhost:5000/index.html   - Loader page
echo   http://localhost:5000/auth.html    - Login/Signup
echo   http://localhost:5000/dashboard.html - User dashboard
echo   http://localhost:5000/admin.html   - Admin panel
echo.
echo Press Ctrl+C to stop the server
echo ======================================
echo.

REM Start the server
npm start

pause
