const axios = require('axios');

// Send GET request to CoinMarketCap API for crypto quote
module.exports.getQuote = async (crypto) => {
    
    // Pull the crypto API URL and API key from env file
    let API_URL = "";
    const API_KEY = process.env.API_KEY;
    
    if(crypto === "btc")
        API_URL = process.env.API_URL_BTC;
    else if(crypto === "eth")
        API_URL = process.env.API_URL_ETH;
    else
        return {'data' : 'Crypto not supported.'};

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