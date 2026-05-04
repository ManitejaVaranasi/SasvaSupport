# Zendesk Problem Management Dashboard

A comprehensive, real-time dashboard for managing and monitoring Zendesk tickets with advanced filtering, search, and visualization capabilities.

## ⚠️ Important: Backend Server Required

Due to browser CORS restrictions, this dashboard requires a Node.js backend server to communicate with the Zendesk API.

## 🚀 Features

### 📊 Real-Time Metrics
- **Total Tickets** - Complete count of all tickets
- **Open Tickets** - Active tickets requiring attention
- **Pending Tickets** - Tickets awaiting response
- **Solved Tickets** - Successfully resolved tickets
- **High Priority** - Urgent and high-priority ticket count

### 📈 Interactive Visualizations
- **Status Distribution Chart** - Doughnut chart showing ticket status breakdown
- **Priority Analysis Chart** - Bar chart displaying tickets by priority level

### 🔍 Advanced Filtering & Search
- **Real-time Search** - Search by ticket ID, subject, or requester
- **Status Filter** - Filter by New, Open, Pending, Solved, or Closed
- **Priority Filter** - Filter by Urgent, High, Normal, or Low
- **Multiple Sort Options**:
  - Newest First
  - Oldest First
  - Recently Updated
  - Priority (High to Low)

### 📋 Detailed Ticket Management
- **Interactive Table** - Complete ticket overview with all key information
- **Ticket Details Modal** - Click any ticket to view full details
- **Auto-refresh** - Manual refresh button to update data on demand

### 🔐 Secure Configuration
- API credentials stored securely in browser localStorage
- Credentials persist across sessions
- Backend proxy protects API tokens
## 📋 Setup Instructions

### Prerequisites
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- A Zendesk account with API access
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Step 1: Install Node.js Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install:
- `express` - Web server framework
- `cors` - Cross-origin resource sharing
- `axios` - HTTP client for API requests
### Step 2: Get Your Zendesk API Token

1. Log in to your Zendesk account
2. Go to **Admin** → **Apps and integrations** → **APIs** → **Zendesk API**
3. Click on **Settings** tab
4. Enable **Token Access**
5. Click **Add API Token**
6. Copy the generated token (you'll need this for the dashboard)

### Step 3: Start the Backend Server

In your terminal, run:

```bash
npm start
```

You should see:
