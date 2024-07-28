import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieGraph = () => {
  const pieData = {
    labels: ['Issues', 'Solved', 'Blocked'],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ['grey', 'white', 'cyan'],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return <Pie data={pieData} options={pieOptions} />;
};

export default PieGraph;
