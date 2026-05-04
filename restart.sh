#!/bin/bash
echo "🛑 Stopping old server..."
lsof -ti:3000 | xargs kill -9 2>/dev/null

echo "⏳ Waiting 2 seconds..."
sleep 2

echo "🚀 Starting server..."
npm start
