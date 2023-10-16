const axios = require('axios');

// Pull the API URL and API key from env file
const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

// Send GET request to CoinMarketCap API for BTC quote
module.exports.getData = async () => {
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