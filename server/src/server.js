require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000;

const { getQuote } = require('./api/getQuote.js');

app.use(cors());

// Fetch current crypto quote from getQuote API and send to the user
app.get('/api/:crypto', getQuote);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// data['data']['1']['quote']['USD']['price'] to get current price of BTC
