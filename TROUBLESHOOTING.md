# Troubleshooting - No Data Showing

## Quick Checklist

### 1. Is the Server Running?
Check your terminal. You should see:
```
🚀 Zendesk Dashboard Server running at http://localhost:3000
📊 Dashboard: http://localhost:3000
🎯 Problem Management: http://localhost:3000/problem-management
```

If not, run:
```bash
npm start
```

### 2. Did You Enter Credentials?
- Open browser console (F12 → Console tab)
- Look for any error messages
- You should see the yellow configuration box if credentials aren't saved

### 3. Check Browser Console for Errors
Press `F12` and look for:
- ❌ CORS errors
- ❌ Network errors (failed to fetch)
- ❌ 401 Unauthorized (wrong credentials)
- ❌ 404 Not Found (wrong subdomain)

### 4. Test Your Zendesk Credentials

**Test Subdomain:**
- If your Zendesk URL is `https://mycompany.zendesk.com`
- Enter ONLY: `mycompany` (NOT the full URL)

**Test API Token:**
1. Go to Zendesk Admin → API → Settings
2. Ensure "Token Access" is ENABLED (toggle ON)
3. Check your token is active (green checkmark)

### 5. Manual API Test

Open a new browser tab and test directly:
```
https://YOUR_SUBDOMAIN.zendesk.com/api/v2/tickets.json
```

You should be prompted to login. If you can see JSON data, your API is accessible.

## Common Issues & Fixes

### Issue 1: "Error loading tickets" in Console
**Cause:** Wrong credentials or CORS issue

**Fix:**
1. Clear browser localStorage:
   ```javascript
   // In browser console (F12):
   localStorage.clear()
   ```
2. Refresh page
3. Re-enter credentials carefully
4. Ensure server is running

### Issue 2: Configuration Box Won't Disappear
**Cause:** Validation failing

**Fix:**
- Ensure ALL three fields are filled
- No extra spaces in subdomain
- Use email format for email field

### Issue 3: Server Connection Refused
**Cause:** Port 3000 already in use or server not running

**Fix:**
```bash
# Kill process on port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Then restart:
npm start
```

### Issue 4: Charts Show But No Data
**Cause:** No tickets in Zendesk or filtering issue

**Fix:**
1. Check if you have any tickets in Zendesk
2. Look at browser console for JavaScript errors
3. Try creating a test ticket in Zendesk

### Issue 5: "Cannot GET /"
**Cause:** Accessing HTML file directly instead of through server

**Fix:**
- ❌ Don't open: `file:///path/to/problem-management-dashboard.html`
- ✅ Use: `http://localhost:3000/problem-management`

## Debug Mode - Enable Detailed Logging

Add this to your browser console to see what's happening:

```javascript
// Enable debug mode
localStorage.setItem('debug', 'true');
location.reload();
```

Then check console for detailed logs.

## Check Server Logs

Look at your terminal where you ran `npm start`. You should see:
- Incoming requests: `POST /api/tickets`
- Any server-side errors

## Still Not Working?

### Step-by-Step Reset:

1. **Stop the server** (Ctrl + C)

2. **Clear everything:**
```bash
# Remove node_modules
rm -rf node_modules

# Clear npm cache
npm cache clean --force

# Reinstall
npm install
```

3. **Clear browser data:**
- Open browser console (F12)
- Run: `localStorage.clear()`
- Close all browser tabs
- Clear browser cache (Ctrl + Shift + Delete)

4. **Restart fresh:**
```bash
npm start
```

5. **Open in incognito/private window:**
```
http://localhost:3000/problem-management
```

6. **Enter credentials again**

## Manual Data Test

To verify your dashboard code works, add this test function to browser console:

```javascript
// Test with fake data
const testData = {
    tickets: [
        {
            id: 1,
            subject: "Test Problem 1",
            status: "open",
            priority: "high",
            type: "problem",
            created_at: new Date().toISOString(),
            tags: ["recurring"]
        },
        {
            id: 2,
            subject: "Test Problem 2",
            status: "pending",
            priority: "urgent",
            type: "problem",
            created_at: new Date().toISOString(),
            tags: []
        }
    ]
};

// Inject test data
allTickets = testData.tickets;
updateMetrics();
updateCharts();
updateTables();
```

If this shows data, the issue is with API connection, not the dashboard code.

## Network Tab Inspection

1. Open browser DevTools (F12)
2. Go to "Network" tab
3. Click "Refresh" button on dashboard
4. Look for request to `http://localhost:3000/api/tickets`
5. Click on it to see:
   - **Request Headers** - Are credentials being sent?
   - **Response** - What did the server return?
   - **Status Code** - 200 OK? Or error?

## Contact Information

If still stuck, check:
1. Node.js version: `node --version` (should be v14+)
2. Browser version (use latest Chrome/Firefox)
3. Operating system
4. Exact error messages from console

---

**Most common fix: Make sure server is running and you're accessing through `http://localhost:3000/problem-management` not opening the HTML file directly!**
