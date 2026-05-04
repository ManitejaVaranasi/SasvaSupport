#!/bin/bash
# Kill any process using port 3000

echo "🔍 Searching for processes on port 3000..."

# Find and kill the process
lsof -ti:3000 | xargs kill -9 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ Killed process on port 3000"
else
    echo "ℹ️  No process found on port 3000"
fi

echo "✅ Port 3000 is now free"
echo ""
echo "You can now run: npm start"
