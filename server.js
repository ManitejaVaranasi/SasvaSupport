const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// API endpoint to fetch tickets
app.post('/api/tickets', async (req, res) => {
    const { subdomain, email, apiToken } = req.body;

    if (!subdomain || !email || !apiToken) {
        return res.status(400).json({ error: 'Missing required credentials' });
    }

    try {
        const apiUrl = `https://${subdomain}.zendesk.com/api/v2/tickets.json`;
        const auth = Buffer.from(`${email}/token:${apiToken}`).toString('base64');

        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching tickets:', error.message);
        
        if (error.response) {
            res.status(error.response.status).json({
                error: 'Failed to fetch tickets from Zendesk',
                details: error.response.data,
                status: error.response.status
            });
        } else {
            res.status(500).json({
                error: 'Failed to connect to Zendesk API',
                details: error.message
            });
        }
    }
});

// API endpoint to fetch single ticket details
app.post('/api/ticket/:id', async (req, res) => {
    const { subdomain, email, apiToken } = req.body;
    const ticketId = req.params.id;

    if (!subdomain || !email || !apiToken) {
        return res.status(400).json({ error: 'Missing required credentials' });
    }

    try {
        const apiUrl = `https://${subdomain}.zendesk.com/api/v2/tickets/${ticketId}.json`;
        const auth = Buffer.from(`${email}/token:${apiToken}`).toString('base64');

        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching ticket:', error.message);
        res.status(error.response?.status || 500).json({
            error: 'Failed to fetch ticket details',
            details: error.message
        });
    }
});

// API endpoint to fetch problems (tickets with type=problem)
app.post('/api/problems', async (req, res) => {
    const { subdomain, email, apiToken } = req.body;

    if (!subdomain || !email || !apiToken) {
        return res.status(400).json({ error: 'Missing required credentials' });
    }

    try {
        const apiUrl = `https://${subdomain}.zendesk.com/api/v2/tickets.json?type=problem`;
        const auth = Buffer.from(`${email}/token:${apiToken}`).toString('base64');

        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching problems:', error.message);
        res.status(error.response?.status || 500).json({
            error: 'Failed to fetch problems',
            details: error.message
        });
    }
});

// Serve the original dashboard
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'zendesk-dashboard.html'));
});

// Serve the problem management dashboard
app.get('/problem-management', (req, res) => {
    res.sendFile(path.join(__dirname, 'problem-management-multi-view.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Zendesk Dashboard Server running at http://localhost:${PORT}`);
    console.log(`📊 Dashboard: http://localhost:${PORT}`);
    console.log(`🎯 Problem Management: http://localhost:${PORT}/problem-management`);
});