import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend, PieController } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, PieController);

const PieChart = () => {
  const chartRef = useRef(null);
  const myChartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the existing chart instance if it exists
    if (myChartRef.current) {
      myChartRef.current.destroy();
    }

    // Create a new chart instance
    myChartRef.current = new Chart(ctx, {
      type: 'pie', // or 'doughnut'
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }]
      },
      options: {
        responsive: true,
      }
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }
    };
  }, []);

  return (
    <canvas ref={chartRef} id="myChart" />
  );
};

export default PieChart;
