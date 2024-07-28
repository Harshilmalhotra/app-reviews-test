import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'daisyui';
import zoomPlugin from 'chartjs-plugin-zoom';

const Graph = () => {
  const [showGraph, setShowGraph] = useState(true);

  const reviewData = [
    { month: 'January', positive: 10000, neutral: 1000, negative: 1000 },
    { month: 'February', positive: 11000, neutral: 1500, negative: 1500 },
    { month: 'March', positive: 15000, neutral: 2000, negative: 2000 },
    { month: 'April', positive: 9000, neutral: 500, negative: 500 },
    { month: 'May', positive: 4000, neutral: 3000, negative: 2000 },
    { month: 'June', positive: 9500, neutral: 1000, negative: 1500 },
    { month: 'July', positive: 500, neutral: 2500, negative: 1000 },
    { month: 'August', positive: 6000, neutral: 1000, negative: 1000 },
    { month: 'September', positive: 9000, neutral: 2000, negative: 1000 },
    { month: 'October', positive: 9500, neutral: 500, negative: 1000 },
    { month: 'November', positive: 12000, neutral: 3000, negative: 1000 },
    { month: 'December', positive: 8000, neutral: 1500, negative: 1000 },
    { month: 'January', positive: 10000, neutral: 1000, negative: 1000 },
    { month: 'February', positive: 11000, neutral: 1500, negative: 1500 },
    { month: 'March', positive: 15000, neutral: 2000, negative: 2000 },
    { month: 'April', positive: 9000, neutral: 500, negative: 500 },
    { month: 'May', positive: 4000, neutral: 3000, negative: 2000 },
    { month: 'June', positive: 9500, neutral: 1000, negative: 1500 },
    { month: 'July', positive: 500, neutral: 2500, negative: 1000 },
    { month: 'August', positive: 6000, neutral: 1000, negative: 1000 },
    { month: 'September', positive: 9000, neutral: 2000, negative: 1000 },
    { month: 'October', positive: 9500, neutral: 500, negative: 1000 },
    { month: 'November', positive: 12000, neutral: 3000, negative: 1000 },
    { month: 'December', positive: 8000, neutral: 1500, negative: 1000 },
    // Add more months as needed
  ];

  const data = {
    labels: reviewData.map(item => item.month),
    datasets: [
      {
        label: 'Positive',
        data: reviewData.map(item => item.positive),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Neutral',
        data: reviewData.map(item => item.neutral),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Negative',
        data: reviewData.map(item => item.negative),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          callback: function (value) {
            return value.toLocaleString(); // Display the Y-axis values with commas
          },
        },
        title: {
          display: true,
          text: 'Number of Reviews',
        },
      },
      x: {
        stacked: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            const datasetIndex = context.datasetIndex;
            const type = datasetIndex === 0 ? 'Positive' : datasetIndex === 1 ? 'Neutral' : 'Negative';
            const count = context.raw.toLocaleString(); // Format the count with commas
            return `${type}: ${count} reviews`;
          },
        },
      },
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          mode: 'x',
        },
      },
    },
  };

  const toggleView = () => {
    setShowGraph(!showGraph);
  };

  return (
    <div className="card overflow-x-auto whitespace-nowrap py-4 px-2 h-full w-full shadow-xl" style={{ backgroundColor: '#ffffff' }} onClick={toggleView}>
      <div className="card-body">
        {showGraph ? (
          <Bar data={data} options={options} plugins={[zoomPlugin]} />
        ) : (
          <table className="table w-full">
            <thead>
              <tr>
                <th>Month</th>
                <th>Positive (count)</th>
                <th>Neutral (count)</th>
                <th>Negative (count)</th>
              </tr>
            </thead>
            <tbody>
              {reviewData.map((item, index) => (
                <tr key={index}>
                  <td>{item.month}</td>
                  <td>{item.positive.toLocaleString()}</td>
                  <td>{item.neutral.toLocaleString()}</td>
                  <td>{item.negative.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Graph;

