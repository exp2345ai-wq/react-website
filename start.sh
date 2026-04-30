#!/bin/bash

# TaruGuardians Startup Script
# This script helps start the backend server

echo "======================================"
echo "  TaruGuardians Backend Startup"
echo "======================================"
echo ""

# Change to backend directory
cd "$(dirname "$0")/backend" || exit

# Check if .env exists
if [ ! -f .env ]; then
    echo "ERROR: .env file not found!"
    echo "Please copy .env.example to .env and configure it:"
    echo "  cp .env.example .env"
    echo ""
    echo "Then edit .env and set:"
    echo "  - MONGODB_URI (your MongoDB connection string)"
    echo "  - GOOGLE_CLIENT_ID (your Google OAuth client ID)"
    echo "  - GOOGLE_CLIENT_SECRET (your Google OAuth client secret)"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "ERROR: Failed to install dependencies"
        exit 1
    fi
fi

echo ""
echo "Starting TaruGuardians Backend Server..."
echo ""
echo "Make sure MongoDB is running!"
echo "  - Local: mongod (run in another terminal)"
echo "  - Atlas: Ensure your MONGODB_URI is correct"
echo ""
echo "Server will be available at:"
echo "  http://localhost:5000"
echo ""
echo "Frontend pages:"
echo "  http://localhost:5000/index.html (loader)"
echo "  http://localhost:5000/auth.html (login/signup)"
echo "  http://localhost:5000/dashboard.html (user dashboard)"
echo "  http://localhost:5000/admin.html (admin panel)"
echo ""
echo "Press Ctrl+C to stop the server"
echo "======================================"
echo ""

# Start the server
npm start
