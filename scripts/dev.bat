@echo off
REM StockSense AI - Development Environment Setup (Windows)
REM This script starts both the frontend and backend development servers

echo 🚀 Starting StockSense AI Development Environment...

REM Check prerequisites
echo 📋 Checking prerequisites...

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+
    pause
    exit /b 1
)

where python >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Python is not installed. Please install Python 3.11+
    pause
    exit /b 1
)

echo ✅ Prerequisites check passed

REM Check if .env files exist
echo 🔧 Checking environment configuration...

if not exist "apps\web\.env" (
    echo ⚠️  apps\web\.env not found. Copying from .env.example...
    copy "apps\web\.env.example" "apps\web\.env"
)

if not exist "apps\api\.env" (
    echo ⚠️  apps\api\.env not found. Copying from .env.example...
    copy "apps\api\.env.example" "apps\api\.env"
)

echo ✅ Environment configuration ready

REM Install frontend dependencies if needed
echo 📦 Installing frontend dependencies...
cd apps\web
if not exist "node_modules" (
    npm install
    echo ✅ Frontend dependencies installed
) else (
    echo ✅ Frontend dependencies already installed
)
cd ..\..

REM Install backend dependencies if needed
echo 📦 Installing backend dependencies...
cd apps\api
if not exist "venv" (
    echo 📦 Creating Python virtual environment...
    python -m venv venv
)

REM Activate virtual environment
call venv\Scripts\activate.bat

REM Install requirements
pip install -r requirements.txt
echo ✅ Backend dependencies installed
cd ..\..

REM Start backend server
echo 🔧 Starting backend server...
cd apps\api
call venv\Scripts\activate.bat
start "StockSense Backend" cmd /k "uvicorn main:app --reload --host 0.0.0.0 --port 8000"
cd ..\..

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend server
echo 🔧 Starting frontend server...
cd apps\web
start "StockSense Frontend" cmd /k "npm run dev"
cd ..\..

echo 🎉 Development environment started!
echo 📱 Frontend: http://localhost:3000
echo 🔧 Backend: http://localhost:8000
echo 📚 API Docs: http://localhost:8000/docs
echo 💡 Close the command windows to stop the servers

pause
