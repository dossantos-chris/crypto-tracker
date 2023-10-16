require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000;

const { getQuote } = require('./api/getQuote.js');

app.use(cors('*'));

// Sends user current quote on the price of a cryptocurrency
app.get('/api/:cryptocurrency', (req, res) => {
    const { cryptocurrency } = req.params;
    
    // Fetch current crypto quote from getQuote API
    getQuote(cryptocurrency).then((data) =>
        res.json(data['data']));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// data['data']['1']['quote']['USD']['price'] to get current price of BTC
