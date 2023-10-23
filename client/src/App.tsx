import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

import CoinData from './components/CoinData.ts'
import CryptoDisplay from './components/CryptoDisplay.tsx'

const App = () => {

  const API_URL_BTC = "http://localhost:5000/api/btc";
  const [data, setData] = useState<CoinData>({
    price: 0,
    volume_24h: 0,
    volume_change_24h: 0,
    percent_change_1h: 0,
    percent_change_24h: 0,
    percent_change_7d: 0,
    percent_change_30d: 0,
    percent_change_60d: 0,
    percent_change_90d: 0,
    market_cap: 0,
    market_cap_dominance: 0,
    fully_diluted_market_cap: 0,
    tvl: null,
    last_updated: ''
  });
  const test_data = {"1":{"id":1,"name":"Bitcoin","symbol":"BTC","slug":"bitcoin","num_market_pairs":10496,"date_added":"2010-07-13T00:00:00.000Z","tags":["mineable","pow","sha-256","store-of-value","state-channel","coinbase-ventures-portfolio","three-arrows-capital-portfolio","polychain-capital-portfolio","binance-labs-portfolio","blockchain-capital-portfolio","boostvc-portfolio","cms-holdings-portfolio","dcg-portfolio","dragonfly-capital-portfolio","electric-capital-portfolio","fabric-ventures-portfolio","framework-ventures-portfolio","galaxy-digital-portfolio","huobi-capital-portfolio","alameda-research-portfolio","a16z-portfolio","1confirmation-portfolio","winklevoss-capital-portfolio","usv-portfolio","placeholder-ventures-portfolio","pantera-capital-portfolio","multicoin-capital-portfolio","paradigm-portfolio","bitcoin-ecosystem","ftx-bankruptcy-estate"],"max_supply":21000000,"circulating_supply":19522056,"total_supply":19522056,"is_active":1,"infinite_supply":false,"platform":null,"cmc_rank":1,"is_fiat":0,"self_reported_circulating_supply":null,"self_reported_market_cap":null,"tvl_ratio":null,"last_updated":"2023-10-23T19:50:00.000Z","quote":{"USD":{"price":31343.478417827584,"volume_24h":25528524333.002174,"volume_change_24h":149.5893,"percent_change_1h":1.07707841,"percent_change_24h":4.95154824,"percent_change_7d":9.98029051,"percent_change_30d":17.76241714,"percent_change_60d":20.49325077,"percent_change_90d":7.25982245,"market_cap":611889140907.6215,"market_cap_dominance":51.8437,"fully_diluted_market_cap":658213046774.38,"tvl":null,"last_updated":"2023-10-23T19:50:00.000Z"}}}}
  
  async function fetchQuote(URL: string)
  {
    const API_URL = URL;
    const response = await fetch(API_URL);
    const data = await response.json();
    const coinData = test_data['1']['quote']['USD'] as CoinData;
    setData(coinData);
  }

  useEffect(() => {
    const coinData = test_data['1']['quote']['USD'] as CoinData;
    setData(coinData);
  }, []);

  return (
    <div className="App">
      <CryptoDisplay {...data} />
    </div>
  )
}

export default App
