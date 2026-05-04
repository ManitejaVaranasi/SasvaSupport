# Quick Setup Guide - Zendesk Dashboard

Follow these steps to get your dashboard running in 5 minutes!

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies
Open terminal in this folder and run:
```bash
npm install
```

### Step 2: Start the Server
```bash
npm start
```

You should see:
```
🚀 Zendesk Dashboard Server running at http://localhost:3000
📊 Open your browser and navigate to http://localhost:3000
```

### Step 3: Configure Dashboard
1. Open browser to **http://localhost:3000**
2. Enter your Zendesk credentials:
   - **Subdomain**: e.g., `mycompany` (from mycompany.zendesk.com)
   - **Email**: Your Zendesk email
   - **API Token**: Get from Zendesk (see below)
3. Click **Save Configuration & Load Tickets**

Done! 🎉

---

## 🔑 How to Get Zendesk API Token

1. Login to Zendesk
2. Click **Admin** (gear icon) → **Apps and integrations** → **APIs** → **Zendesk API**
3. Click **Settings** tab
4. Enable **Token Access** (toggle it on)
5. Click **+ Add API Token**
6. Give it a name (e.g., "Dashboard")
7. Click **Create**
8. **Copy the token** (you won't see it again!)
9. Click **Save**

---

## ❓ Troubleshooting

### "Cannot GET /"
- Server not running. Run `npm start`

### "Error loading tickets"
**Check these:**
- ✅ Subdomain is correct (no `.zendesk.com`)
- ✅ Email is correct
- ✅ API token is valid
- ✅ Token Access is enabled in Zendesk

**Common Issues:**
1. **Wrong subdomain**: Use `mycompany` not `mycompany.zendesk.com`
2. **Expired token**: Generate a new one in Zendesk
3. **Token Access disabled**: Enable it in Zendesk API settings

### "npm: command not found"
- Node.js not installed. Download from https://nodejs.org/

---

## 🎯 What You Get

✅ Real-time ticket metrics (Total, Open, Pending, Solved, High Priority)  
✅ Interactive charts (Status & Priority distribution)  
✅ Advanced search and filtering  
✅ Sort by date, priority, status  
✅ Detailed ticket view modal  
✅ Auto-saved credentials  

---

## 🔄 Daily Usage

1. Open terminal in project folder
2. Run: `npm start`
3. Open browser: http://localhost:3000
4. Click Refresh button to update data

---

## 🛑 Stop the Server

Press `Ctrl + C` in the terminal

---

Need more help? Check **README.md** for detailed documentation.
