const axios = require('axios');

module.exports.getQuote = async (req, res) => {
    const { crypto } = req.params;
    
    // Pull the crypto API URL and API key from env file
    let API_URL = "";
    const API_KEY = process.env.API_KEY;
    
    if(crypto === "btc")
        API_URL = process.env.API_URL_BTC;
    else if(crypto === "eth")
        API_URL = process.env.API_URL_ETH;
    else
        return res.status(400).send('Crypto not supported.');

    // Try and send GET request to CoinMarketCap API for crypto quote
    try 
    {
        let response = await axios.get(API_URL, 
        {
            headers: 
            {
                'X-CMC_PRO_API_KEY': API_KEY
            }
        });
        res.json(response.data['data']);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};