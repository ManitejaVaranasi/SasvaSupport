# Quick Fix - No Data Showing

## Most Common Issue: Server Not Running or Wrong URL

### Fix in 3 Steps:

#### Step 1: Make Sure Server is Running
Open terminal in your project folder and run:
```bash
npm start
```

You MUST see this:
```
🚀 Zendesk Dashboard Server running at http://localhost:3000
```

If you see errors, run:
```bash
npm install
npm start
```

#### Step 2: Use the CORRECT URL
Open your browser to:
```
http://localhost:3000/problem-management
```

**NOT:**
- ❌ `file:///C:/Users/.../problem-management-dashboard.html`
- ❌ Just opening the HTML file from your files
- ❌ `localhost/problem-management` (missing port 3000)

#### Step 3: Enter Your Credentials
1. You'll see a yellow box asking for credentials
2. Enter:
   - **Subdomain**: Just `mycompany` (if your Zendesk is mycompany.zendesk.com)
   - **Email**: Your Zendesk email
   - **API Token**: From Zendesk Admin → API
3. Click "Save Configuration & Load Data"

---

## Still Not Working? Test Your Credentials First

Run this test to verify your Zendesk credentials work:

```bash
node test-connection.js
```

Follow the prompts and it will tell you if your credentials are correct.

---

## Enable Debug Mode

1. Open browser (http://localhost:3000/problem-management)
2. Press F12 to open console
3. Type:
```javascript
localStorage.setItem('debug', 'true');
location.reload();
```

4. Now check the console for detailed debug messages
5. Take a screenshot of any errors and check against these:

### Common Error Messages:

**"Failed to fetch"**
→ Server not running. Run `npm start`

**"401 Unauthorized"**
→ Wrong email or API token

**"404 Not Found"**
→ Wrong subdomain (use just "mycompany" not full URL)

**"CORS error"**
→ Not using localhost:3000. Must access via server, not HTML file

---

## Create Test Data in Zendesk

If you have NO tickets in Zendesk:

1. Log into your Zendesk
2. Create 2-3 test tickets
3. Set different statuses (Open, Pending, Solved)
4. Set different priorities (Low, Normal, High, Urgent)
5. Refresh the dashboard

---

## Nuclear Option - Complete Reset

If nothing works:

```bash
# Stop server (Ctrl + C)

# Delete everything
rm -rf node_modules package-lock.json

# Fresh install
npm install

# Start server
npm start
```

Then in browser:
1. Clear cache (Ctrl + Shift + Delete)
2. Open http://localhost:3000/problem-management
3. Press F12, go to Application → Local Storage → Clear
4. Refresh page
5. Enter credentials again

---

## Check These:

- [ ] Server is running (`npm start`)
- [ ] Using correct URL (`http://localhost:3000/problem-management`)
- [ ] Yellow config box appeared (if first time)
- [ ] Entered subdomain WITHOUT `.zendesk.com`
- [ ] API token is correct and active in Zendesk
- [ ] Token Access is ENABLED in Zendesk Admin → API → Settings
- [ ] You have at least 1 ticket in Zendesk
- [ ] Browser console (F12) shows no red errors

---

**Need more help? Share the exact error message from browser console (F12 → Console tab)**
