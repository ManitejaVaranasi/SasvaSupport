# Problem Management Dashboard - User Guide

## 🎯 Overview

This enhanced dashboard provides a comprehensive view of your problem management lifecycle, helping you shift from reactive firefighting to proactive problem solving.

## 🚀 Quick Start

### 1. Start the Server
```bash
npm start
```

### 2. Access the Dashboard
Open your browser and navigate to:
```
http://localhost:3000/problem-management
```

### 3. Configure Credentials
- Enter your Zendesk **subdomain** (e.g., `mycompany`)
- Enter your **email**
- Enter your **API token**
- Click "Save Configuration & Load Data"

## 📊 Dashboard Features

### Left Sidebar Navigation
- **Dashboard** - Main overview (current page)
- **Problems** - Detailed problem list
- **Incidents** - Related incidents
- **Reports** - Analytics and trends
- **Settings** - Configuration

### Key Metrics Cards
1. **Total Problems** - Overall problem count with trend
2. **Recurring Problems** - Issues that keep coming back
3. **Problems in SLA** - Active problems within SLA timeframe
4. **Resolved Problems** - Successfully closed problems

### Visualizations

#### Status Distribution Chart (Doughnut)
Shows the breakdown of problems by status:
- New
- Open
- In Progress
- Resolved
- Closed

#### Problem Categories Chart (Horizontal Bar)
Displays top 5 problem categories ranked by incident count

### Problem Lists

#### Top Recurring Problems
- Shows problems that occur frequently
- Includes incident count
- Color-coded by priority (Red = Critical, Orange = High)

#### SLA Aging in Progress
- Tracks active problems approaching SLA deadline
- Visual progress bars:
  - **Green** - On track (<50%)
  - **Orange** - At risk (50-75%)
  - **Red** - Critical (>75%)
- Shows hours elapsed vs. total SLA time

## 🎨 Visual Indicators

### Priority Icons
- 🔴 **Red Circle** - Urgent/Critical
- 🟠 **Orange Circle** - High Priority  
- 🟡 **Yellow Circle** - Medium Priority

### Status Badges
- **Blue** - New
- **Orange** - Open
- **Pink** - In Progress
- **Green** - Resolved
- **Grey** - Closed

## 💡 How It Reduces Incidents

The dashboard highlights 5 key benefits:

1. **Identifies Patterns Early** - Detect recurring issues before they escalate
2. **Drives Root Cause Fixes** - Focus on permanent solutions
3. **Improves Proactive IT** - Shift from reactive to proactive
4. **Enhances Knowledge** - Build comprehensive knowledge base
5. **Better Prioritization** - Focus on high-impact problems

## 📈 Real Impact Section

Track concrete outcomes:
- 📉 **Reduction in Repeat Incidents**
- 🛡️ **Improved Service Stability**
- ⏱️ **Faster MTTR** (Mean Time To Resolve)
- 😊 **Increased Customer Satisfaction**
- 👥 **Better Prioritization**

## 🔄 Regular Usage

### Daily Workflow
1. Open dashboard: `http://localhost:3000/problem-management`
2. Review key metrics for trends
3. Check "SLA Aging" for at-risk problems
4. Identify top recurring problems to address
5. Click "Refresh" to update data

### Weekly Review
- Compare Total Problems trend (vs last week)
- Analyze top problem categories
- Review resolved problem success rate
- Identify patterns in recurring problems

## 🎯 Best Practices

### 1. Focus on Recurring Problems
Priority should be given to problems appearing multiple times. These have the highest ROI for root cause fixes.

### 2. Monitor SLA Aging
Check the SLA progress bars daily. Address problems in the orange/red zones first.

### 3. Track Categories
Use the category chart to identify systemic issues in specific areas (Network, Hardware, Software, etc.)

### 4. Set Goals
- Aim to reduce recurring problems by 10% each month
- Maintain 90%+ problems resolved within SLA
- Increase resolved problem percentage weekly

## 🔧 Customization Options

### Changing SLA Timeframe
Edit the SLA calculation in `problem-management-dashboard.html`:
```javascript
// Current: 48 hours
const age = Math.floor((new Date() - new Date(t.created_at)) / (1000 * 60 * 60));
const progress = Math.min((age / 48) * 100, 100);

// Change to 24 hours:
const progress = Math.min((age / 24) * 100, 100);
```

### Adjusting Chart Colors
Modify the backgroundColor arrays in the chart initialization:
```javascript
backgroundColor: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b']
```

### Adding Custom Metrics
Add new metric cards in the metrics-grid section:
```html
<div class="metric-card">
    <div class="metric-icon blue">
        <i class="fas fa-your-icon"></i>
    </div>
    <div class="metric-info">
        <h3>Your Metric Name</h3>
        <div class="metric-value" id="yourMetric">0</div>
    </div>
</div>
```

## 📱 Responsive Design

The dashboard is fully responsive:
- **Desktop** - Full sidebar + multi-column layout
- **Tablet** - Compressed sidebar + stacked charts
- **Mobile** - Minimal sidebar + single column

## 🔐 Data Privacy

- All credentials stored in browser localStorage only
- No data sent to external servers (except Zendesk API)
- Backend server acts as proxy only
- Clear localStorage to remove saved credentials

## ❓ Troubleshooting

### Charts Not Updating
- Click the "Refresh" button
- Check browser console (F12) for errors
- Verify API credentials are correct

### No Data in Tables
- Ensure you have tickets/problems in Zendesk
- Check that tickets have proper type/tags
- Verify API token has read permissions

### SLA Progress Bars Incorrect
- Check ticket created_at timestamps
- Verify SLA timeframe matches your needs
- Adjust calculation if using custom SLA

## 🚀 Advanced Features (Coming Soon)

- Auto-refresh every 5 minutes
- Export reports to PDF/Excel
- Email notifications for SLA breaches
- Historical trend analysis
- Multi-team dashboards
- Custom alert thresholds

## 📞 Support

For issues:
1. Check this guide
2. Review browser console for errors
3. Verify Zendesk API token permissions
4. Check server terminal output

---

**Built to help you eliminate incidents at the root! 🌳**
