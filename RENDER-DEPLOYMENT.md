# Deploy to Render - Step by Step Guide

## 🚀 Easiest Way to Make Your Dashboard Live (5 Minutes)

### Step 1: Push Code to GitHub

#### Option A: Using GitHub Desktop (Easiest)
1. Download GitHub Desktop: https://desktop.github.com/
2. Open GitHub Desktop
3. Click "Add" → "Add Existing Repository"
4. Select your folder: `/Users/maniteja_varanasi/zendesk PMD`
5. Click "Publish repository"
6. Uncheck "Keep this code private" (or keep checked for private)
7. Click "Publish"

#### Option B: Using Terminal
```bash
cd "/Users/maniteja_varanasi/zendesk PMD"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Zendesk Problem Management Dashboard"

# Create GitHub repo and push
# First create a new repo at github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/zendesk-dashboard.git
git branch -M main
git push -u origin main
```

---

### Step 2: Deploy to Render

1. **Go to Render.com**
   - Visit: https://render.com
   - Click "Get Started for Free"
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +" button
   - Select "Web Service"
   - Connect your GitHub account
   - Select your `zendesk-dashboard` repository

3. **Configure Service**
   Fill in these details:
   - **Name:** `zendesk-problem-dashboard`
   - **Environment:** `Node`
   - **Region:** Choose closest to you (e.g., Oregon, Frankfurt)
   - **Branch:** `main`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** `Free`

4. **Deploy**
   - Click "Create Web Service"
   - Wait 2-3 minutes for deployment
   - You'll see build logs in real-time

5. **Get Your Live URL**
   After deployment completes, you'll get a URL like:
   ```
   https://zendesk-problem-dashboard.onrender.com
   ```

6. **Access Dashboard**
   ```
   https://zendesk-problem-dashboard.onrender.com/problem-management
   ```

---

### Step 3: Share with Your Team

**Your Live Dashboard URL:**
```
https://YOUR-APP-NAME.onrender.com/problem-management
```

Share this URL with team members. They can:
1. Open the URL in their browser
2. Enter Zendesk credentials (saved in their browser)
3. View real-time dashboard data

---

## ✅ What You Get with Render Free Tier:

✅ **Free Hosting** - No credit card required  
✅ **Automatic HTTPS** - Secure SSL certificate  
✅ **Custom Domain** - Add your own domain (optional)  
✅ **Auto-Deploy** - Updates when you push to GitHub  
✅ **Health Monitoring** - Automatic restarts if needed  
✅ **750 hours/month** - More than enough for 24/7 uptime  

---

## ⚠️ Important Notes:

1. **Free Tier Spin Down**
   - Free services sleep after 15 minutes of inactivity
   - First visit after sleep takes ~30 seconds to wake up
   - Upgrade to $7/month for always-on service

2. **Credentials**
   - Users enter their own Zendesk credentials
   - Stored in browser localStorage only
   - Not stored on server

3. **Performance**
   - Free tier is perfect for small teams (<50 users)
   - For larger teams, upgrade to paid plan

---

## 🔄 How to Update Your Dashboard

When you make changes:

```bash
cd "/Users/maniteja_varanasi/zendesk PMD"

# Make your changes, then:
git add .
git commit -m "Updated dashboard features"
git push
```

Render will **automatically detect the push** and redeploy! No manual steps needed.

---

## 🎯 Alternative: Quick Local Network Share (For Today)

If you need to share **right now** with teammates in the same office:

### Step 1: Find Your IP
```bash
# On Mac
ifconfig | grep "inet " | grep -v 127.0.0.1
```

Example output: `inet 192.168.1.100`

### Step 2: Update server.js
```javascript
// Change the last line to:
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`🌐 Network access: http://YOUR_IP:${PORT}`);
});
```

### Step 3: Restart Server
```bash
npm start
```

### Step 4: Share URL
Give teammates:
```
http://192.168.1.100:3000/problem-management
```

**Note:** Your computer must stay on, and they must be on the same network.

---

## 📊 Recommended Approach

**For Quick Demo Today:**
→ Use Local Network Share (Option above)

**For Permanent Team Access:**
→ Use Render Deployment (Steps 1-3)

**For Enterprise Production:**
→ Contact me for AWS/Azure deployment guide

---

## 🆘 Need Help?

**Common Issues:**

1. **"npm install failed" on Render**
   - Check that `package.json` is committed to GitHub
   - Ensure `node_modules` is in `.gitignore`

2. **"Application Error" on deployed site**
   - Check Render logs (click "Logs" tab)
   - Ensure `PORT` environment variable is used

3. **Can't access on network**
   - Check firewall settings
   - Ensure server is running with `0.0.0.0`

---

**Ready to deploy? Choose your method and follow the steps above!** 🚀
