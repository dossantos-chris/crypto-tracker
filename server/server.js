require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000;

const { getBTC } = require('./api/getBTC.js');
const { getETH } = require('./api/getETH.js');

app.use(cors('*'));

// Sends user current stats on the price of BTC
app.get('/api/:cryptocurrency', (req, res) => {
    const { cryptocurrency } = req.params;
    
    // Fetch current BTC quote from getBTC API
    getBTC().then((data) =>
        res.json(data['data']['1']['quote']['USD']));
});

// Sends user current stats on the price of ETH
app.get('/api/eth', (req, res) => {

    // Fetch current ETH quote from getETH API
    getETH().then((data) =>
        res.json(data['data']['1027']['quote']['USD']));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// data['data']['1']['quote']['USD']['price'] to get current price of BTC
