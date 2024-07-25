import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';
import { Scatter, Line, Pie, Bar } from 'react-chartjs-2';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

function Problem() {
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
        backgroundColor: ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
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
        backgroundColor: ['grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey'],
        pointBackgroundColor: 'grey',
      },
      {
        label: 'Google Play App',
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
        backgroundColor: ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
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
      },
      y: {
        type: 'linear',
        position: 'left',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 15, 35, 23, 50],
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'Dataset 2',
        data: [5, 15, 25, 35, 45],
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Dataset 3',
        data: [10, 15, 35, 23, 50],
        borderColor: 'yellow',
        fill: false,
      },
    ],
    options: {
      plugins: {
        legend: {
          position: 'right',
        },
      },
    },
  };

  const pieData = {
    labels: ['Issues', 'Solved', 'Blocked'],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ['grey', 'white', 'cyan'],
      },
    ],
    options: {
      plugins: {
        legend: {
          position: 'right',
        },
      },
    },
  };

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

  return (
    <div className="flex flex-wrap justify-center items-start gap-4 p-4" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="card bg-orange-200 shadow-xl w-full overflow-hidden rounded-lg" style={{ maxWidth: '628.57px', minHeight: '555px', padding: '20px' }}>
        <Scatter data={scatterData} options={scatterOptions} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="card bg-base-100 w-full shadow-xl overflow-hidden rounded-lg" style={{ maxWidth: '333.33px', minHeight: '250px', padding: '20px' }}>
          <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className="card bg-grey-200 w-full shadow-xl overflow-hidden rounded-lg" style={{ maxWidth: '333.33px', minHeight: '250px', padding: '20px' }}>
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
      <div className="card bg-cyan-200 shadow-xl p-5 overflow-hidden rounded-lg" style={{ maxWidth: '226.8px', minHeight: '550px', padding: '20px' }}>
        <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: true }} />
      </div>
    </div>
  );
}

export default Problem;
