require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000;


const { getData } = require('./api/getData.js');

app.use(cors('*'));

// Sends user current stats on the price of BTC
app.get('/api/price', (req, res) => {

    // Fetch current BTC quote from getData API
    getData().then((data) =>
        res.json(data['data']['1']['quote']['USD']));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// data['data']['1']['quote']['USD']['price'] to get current price of BTC
