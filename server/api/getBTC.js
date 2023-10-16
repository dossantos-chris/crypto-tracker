const axios = require('axios');

// Pull the BTC API URL and API key from env file
const API_URL_BTC = process.env.API_URL_BTC;
const API_KEY = process.env.API_KEY;

// Send GET request to CoinMarketCap API for BTC quote
module.exports.getBTC = async () => {
    try 
    {
        let response = await axios.get(API_URL_BTC, 
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