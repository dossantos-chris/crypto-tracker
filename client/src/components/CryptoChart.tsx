import Chart from 'chart.js/auto';
import './CryptoChart.css'
import { useEffect } from 'react';

const CryptoChart = () => {
  
  useEffect(() => {
    const ctx = document.getElementById("myChart") as HTMLCanvasElement;
    if (!ctx) return;

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Bitcoin Price",
            data: [30000, 35000, 40000, 45000, 42000, 50000],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "#F7931A",
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
    return () => {
      myChart.destroy();
    };
  }, []);

  return(
    <div className="chart-container">
      <canvas id="myChart"></canvas>
    </div>
  )
};

export default CryptoChart