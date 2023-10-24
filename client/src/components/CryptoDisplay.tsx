import React from 'react'
import './CryptoDisplay.css'
import CoinData from './CoinData.ts'

const CryptoDisplay = (data: CoinData) => {
  return (
    <div className="crypto-container">
        <div className="crypto-item">
            Price: ${data?.price.toFixed(2)}
        </div>
        <div className="crypto-item">
            Volume 24h: ${data?.volume_24h.toFixed(2)}
        </div>
        <div className="crypto-item">
            Volume Change 24h: {data?.volume_change_24h.toFixed(2)}%
        </div>
        <div className="crypto-item">
            Percent Change 1h: {data?.percent_change_1h.toFixed(2)}%
        </div>
        <div className="crypto-item">
            Percent Change 24h: {data?.percent_change_24h.toFixed(2)}%
        </div>
        <div className="crypto-item">
            Percent Change 7d: {data?.percent_change_7d.toFixed(2)}%
        </div>
        <div className="crypto-item">
            Percent Change 30d: {data?.percent_change_30d.toFixed(2)}%
        </div>
        <div className="crypto-item">
            Percent Change 60d: {data?.percent_change_60d.toFixed(2)}%
        </div>
        <div className="crypto-item">
            Percent Change 90d: {data?.percent_change_90d.toFixed(2)}%
        </div>
        <div className="crypto-item">
            Market Cap: ${data?.market_cap.toFixed(0)}
        </div>
        <div className="crypto-item">
            Market Cap Dominance: {data?.market_cap_dominance.toFixed(2)}%
        </div>
        <div className="crypto-item">
            Fully Diluted Market Cap: ${data?.fully_diluted_market_cap.toFixed(0)}
        </div>
        <div className="crypto-item">
            TVL: {data?.tvl ? data.tvl: "N/A"}
        </div>
        <div className="crypto-item">
            Last Updated: {data?.last_updated}
        </div>
      </div>
  )
}

export default CryptoDisplay