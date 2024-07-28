import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const TvsSGraph = () => {
  const scatterData = {
    datasets: [
      {
        label: 'MacOS',
        data: [
          { x: 22, y: 7 },
          { x: 22, y: 8 },
          { x: 25, y: 7 },
          { x: 25, y: 10 },
          { x: 26, y: 3 },
          { x: 26, y: 7 },
          { x: 27, y: 5 },
          { x: 27, y: 7 },
          { x: 30, y: 10 },
          { x: 31, y: 11 },
        ],
        backgroundColor: 'red',
        pointBackgroundColor: 'red',
      },
      {
        label: 'iOS Store',
        data: [
          { x: 20, y: 4 },
          { x: 25, y: 15 },
          { x: 35, y: 25 },
          { x: 10, y: 5 },
          { x: 12, y: 6 },
          { x: 13, y: 9 },
          { x: 15, y: 3 },
          { x: 17, y: 8 },
        ],
        backgroundColor: 'grey',
        pointBackgroundColor: 'grey',
      },
      {
        label: 'Playstore',
        data: [
          { x: 1, y: 15 },
          { x: 20, y: 25 },
          { x: 30, y: 35 },
          { x: 19, y: 4 },
          { x: 20, y: 7 },
          { x: 21, y: 5 },
          { x: 23, y: 10 },
          { x: 24, y: 11 },
        ],
        backgroundColor: 'blue',
        pointBackgroundColor: 'blue',
      },
    ],
  };

  const scatterOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Topics',
          color: '#000000', // Optional: Add color to make the label more visible
        },
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Sentiments',
          color: '#000000', // Optional: Add color to make the label more visible
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Scatter data={scatterData} options={scatterOptions} />;
};

export default TvsSGraph;
