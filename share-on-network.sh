#!/bin/bash
# Quick script to share dashboard on local network

echo "🌐 Setting up dashboard for network access..."
echo ""

# Get local IP address
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    LOCAL_IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -n 1)
else
    # Linux
    LOCAL_IP=$(hostname -I | awk '{print $1}')
fi

if [ -z "$LOCAL_IP" ]; then
    echo "❌ Could not detect local IP address"
    echo "Please find your IP manually with: ifconfig"
    exit 1
fi

echo "✅ Your local IP: $LOCAL_IP"
echo ""
echo "📊 Dashboard will be accessible at:"
echo "   http://$LOCAL_IP:3000/problem-management"
echo ""
echo "👥 Share this URL with your team members on the same network"
echo ""
echo "🚀 Starting server..."
echo ""

# Start the server
npm start
