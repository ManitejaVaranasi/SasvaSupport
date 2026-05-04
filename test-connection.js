/**
 * Quick Connection Test Script
 * Run this to verify your Zendesk API credentials work
 * 
 * Usage: node test-connection.js
 */

const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('='.repeat(60));
console.log('  ZENDESK API CONNECTION TEST');
console.log('='.repeat(60));
console.log('');

function question(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
}

async function testConnection() {
    try {
        // Get credentials
        const subdomain = await question('Enter your Zendesk subdomain (e.g., mycompany): ');
        const email = await question('Enter your email: ');
        const apiToken = await question('Enter your API token: ');

        console.log('\n🔍 Testing connection...\n');

        const apiUrl = `https://${subdomain}.zendesk.com/api/v2/tickets.json`;
        const auth = Buffer.from(`${email}/token:${apiToken}`).toString('base64');

        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/json'
            },
            timeout: 10000
        });

        console.log('✅ SUCCESS! Connection working properly\n');
        console.log(`📊 Found ${response.data.tickets.length} tickets in your Zendesk account\n`);
        
        if (response.data.tickets.length > 0) {
            console.log('Sample ticket:');
            const ticket = response.data.tickets[0];
            console.log(`  - ID: ${ticket.id}`);
            console.log(`  - Subject: ${ticket.subject}`);
            console.log(`  - Status: ${ticket.status}`);
            console.log(`  - Priority: ${ticket.priority || 'normal'}`);
        } else {
            console.log('⚠️  No tickets found. Create some test tickets in Zendesk to see data in the dashboard.');
        }

        console.log('\n✅ Your credentials are correct. You can now use them in the dashboard.\n');

    } catch (error) {
        console.log('❌ CONNECTION FAILED\n');
        
        if (error.response) {
            console.log(`Status: ${error.response.status} ${error.response.statusText}`);
            
            if (error.response.status === 401) {
                console.log('\n🔴 Error: Authentication failed');
                console.log('   - Check your email is correct');
                console.log('   - Verify your API token is valid');
                console.log('   - Make sure Token Access is enabled in Zendesk');
            } else if (error.response.status === 404) {
                console.log('\n🔴 Error: Subdomain not found');
                console.log('   - Check your subdomain is correct');
                console.log('   - Use only "mycompany" not "mycompany.zendesk.com"');
            } else {
                console.log(`\n🔴 Error: ${error.response.data?.error || 'Unknown error'}`);
            }
        } else if (error.code === 'ENOTFOUND') {
            console.log('\n🔴 Error: Domain not found');
            console.log('   - Check your subdomain spelling');
            console.log('   - Ensure you have internet connection');
        } else {
            console.log(`\n🔴 Error: ${error.message}`);
        }
        
        console.log('\nPlease fix the above issues and try again.\n');
    } finally {
        rl.close();
    }
}

testConnection();
