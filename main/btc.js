require('dotenv').config()
const axios = require('axios');
const fs = require('fs');

//Pull the API URL and key from env files
const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

//Send Get request to CoinMarketCap API for BTC quote
const getData = async () => {
    try 
    {
        let response = await axios.get(API_URL, 
        {
            headers: 
            {
                'X-CMC_PRO_API_KEY': API_KEY
            }
        });
        return response.data;
    } 
    catch (error) 
    {
        return error;
    }
};

//Console log the current price of BTC
getData().then((data) =>
    fs.writeFile("btc.json", JSON.stringify(data, null, 4), (err) => 
        console.log("data written to file"))
);

//data['data']['1']['quote']['USD']['price'] to get current price of BTC