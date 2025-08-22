#!/bin/bash

# StockSense AI - Development Environment Setup
# This script starts both the frontend and backend development servers

set -e

echo "🚀 Starting StockSense AI Development Environment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo -e "${BLUE}📋 Checking prerequisites...${NC}"

if ! command_exists node; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 18+${NC}"
    exit 1
fi

if ! command_exists python3; then
    echo -e "${RED}❌ Python 3 is not installed. Please install Python 3.11+${NC}"
    exit 1
fi

if ! command_exists pip; then
    echo -e "${RED}❌ pip is not installed. Please install pip${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Prerequisites check passed${NC}"

# Check if .env files exist
echo -e "${BLUE}🔧 Checking environment configuration...${NC}"

if [ ! -f "apps/web/.env" ]; then
    echo -e "${YELLOW}⚠️  apps/web/.env not found. Copying from .env.example...${NC}"
    cp apps/web/.env.example apps/web/.env
fi

if [ ! -f "apps/api/.env" ]; then
    echo -e "${YELLOW}⚠️  apps/api/.env not found. Copying from .env.example...${NC}"
    cp apps/api/.env.example apps/api/.env
fi

echo -e "${GREEN}✅ Environment configuration ready${NC}"

# Install frontend dependencies if needed
echo -e "${BLUE}📦 Installing frontend dependencies...${NC}"
cd apps/web
if [ ! -d "node_modules" ]; then
    npm install
    echo -e "${GREEN}✅ Frontend dependencies installed${NC}"
else
    echo -e "${GREEN}✅ Frontend dependencies already installed${NC}"
fi
cd ../..

# Install backend dependencies if needed
echo -e "${BLUE}📦 Installing backend dependencies...${NC}"
cd apps/api
if [ ! -d "venv" ]; then
    echo -e "${YELLOW}📦 Creating Python virtual environment...${NC}"
    python3 -m venv venv
fi

# Activate virtual environment
source venv/bin/activate

# Install requirements
pip install -r requirements.txt
echo -e "${GREEN}✅ Backend dependencies installed${NC}"
cd ../..

# Function to cleanup on exit
cleanup() {
    echo -e "\n${YELLOW}🛑 Shutting down development servers...${NC}"
    kill $FRONTEND_PID $BACKEND_PID 2>/dev/null || true
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Start backend server
echo -e "${BLUE}🔧 Starting backend server...${NC}"
cd apps/api
source venv/bin/activate
uvicorn main:app --reload --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!
cd ../..

# Wait a moment for backend to start
sleep 3

# Start frontend server
echo -e "${BLUE}🔧 Starting frontend server...${NC}"
cd apps/web
npm run dev &
FRONTEND_PID=$!
cd ../..

echo -e "${GREEN}🎉 Development environment started!${NC}"
echo -e "${BLUE}📱 Frontend: http://localhost:3000${NC}"
echo -e "${BLUE}🔧 Backend: http://localhost:8000${NC}"
echo -e "${BLUE}📚 API Docs: http://localhost:8000/docs${NC}"
echo -e "${YELLOW}💡 Press Ctrl+C to stop all servers${NC}"

# Wait for both processes
wait
