import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Bar, Line, Radar,pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const PieChart = () => {
  const data = {
    labels: ['Invested Amount', 'Est Returns'],
    datasets: [
      {
        label: 'Example Dataset',
        backgroundColor: ['rgb(173, 152, 234)', 'rgb(221, 209, 255)'], // Different colors for each data point
        borderColor: 'transparent',
        borderWidth: 2,
        data: [30, 70]
      }
    ]
  };

  const options = {
    title: {
      display: true,
      text: 'Pie Chart Example'
    }
  };

  return (
    <div>
      <Pie
        data={data}
        options={options}
      />
    </div>
  );
}

export default PieChart;
