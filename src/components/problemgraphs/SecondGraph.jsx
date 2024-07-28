import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SecondGraph = () => {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    title: {
        display: true,
        text: 'months',
        color: '#000000'},
    datasets: [
      {
        label: 'Privacy concerns',
        data: [10, 15, 35, 23, 50],
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'Relevancy',
        data: [5, 15, 25, 35, 45],
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Value for money',
        data: [10, 15, 35, 23, 50],
        borderColor: 'yellow',
        fill: false,
      },
    ],
  };

  const lineOptions = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Line data={lineData} options={lineOptions} />;
};

export default SecondGraph;
