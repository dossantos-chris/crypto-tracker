require('dotenv').config()
const axios = require('axios');
const fs = require('fs');

const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

async function getData()
{   
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
}

getData().then((data) => 
    fs.writeFile("btc.json", JSON.stringify(data, null, 4), (err) => 
        console.log("data written to file"))
);

