require('dotenv').config();
const axios = require('axios');
const { getData } = require('./api/getData.js');

//Output BTC stats to json file
getData().then((data) =>
    console.log(data['data']['1']['quote']['USD'])
);

//data['data']['1']['quote']['USD']['price'] to get current price of BTC
