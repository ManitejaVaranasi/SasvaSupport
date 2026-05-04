# Fix GitHub 403 Error - Authentication Required

## The Problem
GitHub no longer accepts password authentication. You need a Personal Access Token.

## ✅ Solution: Create Personal Access Token

### Step 1: Generate Token on GitHub

1. Go to: **https://github.com/settings/tokens**
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `Zendesk Dashboard`
4. Set expiration: `90 days` (or No expiration)
5. **Select scopes:**
   - ✅ Check **`repo`** (this checks all sub-items automatically)
6. Scroll down and click **"Generate token"**
7. **COPY THE TOKEN NOW** (you won't see it again!)
   - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 2: Update Git Remote to Use Token

```bash
# Navigate to your project
cd "/Users/maniteja_varanasi/zendesk PMD"

# Remove old remote
git remote remove origin

# Add new remote with token
git remote add origin https://YOUR_TOKEN@github.com/ManitejaVaranasi/SasvaSupport.git
```

Replace `YOUR_TOKEN` with the token you just copied.

**Complete example:**
```bash
git remote add origin https://ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@github.com/ManitejaVaranasi/SasvaSupport.git
```

### Step 3: Push Again

```bash
git push -u origin main
```

This should work now! ✅

---

## 🔐 Alternative: Using Git Credential Manager (Easier)

If you want to avoid typing token each time:

### Step 1: Cache Your Credentials
```bash
git config --global credential.helper osxkeychain
```

### Step 2: Update Remote (without token in URL)
```bash
git remote remove origin
git remote add origin https://github.com/ManitejaVaranasi/SasvaSupport.git
```

### Step 3: Push
```bash
git push -u origin main
```

When prompted:
- **Username:** `ManitejaVaranasi`
- **Password:** Paste your Personal Access Token

Git will remember it for future pushes!

---

## 📋 Quick Copy-Paste Solution

**After creating your token, run these:**

```bash
cd "/Users/maniteja_varanasi/zendesk PMD"

# Configure credential helper
git config --global credential.helper osxkeychain

# Update remote
git remote remove origin
git remote add origin https://github.com/ManitejaVaranasi/SasvaSupport.git

# Push (will ask for credentials)
git push -u origin main
```

When it asks:
- Username: `ManitejaVaranasi`
- Password: `[paste your token here]`

---

## ✅ Expected Success Output:

```
Enumerating objects: 22, done.
Counting objects: 100% (22/22), done.
Delta compression using up to 10 threads
Compressing objects: 100% (21/21), done.
Writing objects: 100% (22/22), 36.43 KiB | 7.29 MiB/s, done.
Total 22 (delta 2), reused 0 (delta 0)
To https://github.com/ManitejaVaranasi/SasvaSupport.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## 🆘 Still Having Issues?

### Check if token has correct permissions:
1. Go to: https://github.com/settings/tokens
2. Find your token
3. Make sure `repo` scope is checked

### Verify repository access:
1. Go to: https://github.com/ManitejaVaranasi/SasvaSupport
2. Make sure you can see it and have write access

### Try SSH instead:
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: https://github.com/settings/keys

# Update remote to SSH
git remote set-url origin git@github.com:ManitejaVaranasi/SasvaSupport.git

# Push
git push -u origin main
```

---

**First, create your Personal Access Token at: https://github.com/settings/tokens**

Then use one of the methods above to push your code! 🚀
