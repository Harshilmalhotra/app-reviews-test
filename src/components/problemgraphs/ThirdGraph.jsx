import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ThirdGraph = () => {
  const barData = {
    labels: ['Battery Issues'],
    datasets: [
      {
        label: 'Positive',
        data: [20],
        backgroundColor: 'red',
      },
      {
        label: 'Negative',
        data: [30],
        backgroundColor: 'blue',
      },
      {
        label: 'Resolved',
        data: [50],
        backgroundColor: 'green',
      },
    ],
  };

  const barOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
    },
    scales: {
      x: {
        min: 0,
        max: 60,
      },
    },
  };

  return <Bar data={barData} options={barOptions} />;
};

export default ThirdGraph;
