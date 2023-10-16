const axios = require('axios');

// Pull the ETH API URL and API key from env file
const API_URL_ETH = process.env.API_URL_ETH;
const API_KEY = process.env.API_KEY;

// Send GET request to CoinMarketCap API for ETH quote
module.exports.getETH = async () => {
    try 
    {
        let response = await axios.get(API_URL_ETH, 
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