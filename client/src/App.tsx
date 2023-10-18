import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {

  //const API_URL = "localhost:5000/api/btc"
  const API_URL_BTC = "http://echo.jsontest.com/price/15000/crypto/btc";
  const API_URL_ETH = "http://echo.jsontest.com/price/2000/crypto/eth";
  const [crypto, setCrypto] = useState("");
  const [price, setPrice] = useState("");

  async function fetchQuote(URL: string)
  {
    const API_URL = URL;
    const response = await fetch(API_URL)
    const data = await response.json();
    setCrypto(data['crypto']);
    setPrice(data['price']);
  }

  useEffect(() => {
    fetchQuote(API_URL_BTC);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="crypto"
         onClick={() => {(crypto === "btc") ? fetchQuote(API_URL_ETH) : fetchQuote(API_URL_BTC);}}
        >
          {crypto} : {price}
        </div>
      </div>
    </div>
  )
}

export default App
