import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'daisyui/dist/full.css';

const Graph = () => {
  const [showGraph, setShowGraph] = useState(true);

  const reviewData = [
    { month: 'Version1', positive: 80, neutral: 10, negative: 10 },
    { month: 'Version2', positive: 70, neutral: 15, negative: 15 },
    { month: 'Version3', positive: 60, neutral: 20, negative: 20 },
    { month: 'Version4', positive: 90, neutral: 5, negative: 5 },
    { month: 'Version5', positive: 50, neutral: 30, negative: 20 },
    { month: 'Version6', positive: 75, neutral: 10, negative: 15 },
    { month: 'Version6.1', positive: 65, neutral: 25, negative: 10 },
    { month: 'Version6.2', positive: 80, neutral: 10, negative: 10 },
    { month: 'Version6.3', positive: 70, neutral: 20, negative: 10 },
    { month: 'Version6.4', positive: 85, neutral: 5, negative: 10 },
    { month: 'Version6.5', positive: 60, neutral: 30, negative: 10 },
    { month: 'Version7', positive: 40, neutral: 10, negative: 50 },
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
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            const index = context.dataIndex;
            const datasetIndex = context.datasetIndex;
            const type = datasetIndex === 0 ? 'Positive' : datasetIndex === 1 ? 'Neutral' : 'Negative';
            const value = context.raw;
            return `${type}: ${value}%`;
          },
        },
      },
    },
  };

  const toggleView = () => {
    setShowGraph(!showGraph);
  };

  return (
    <div className="card h-full w-full shadow-xl"style={{ backgroundColor: '#ffffff' }}  onClick={toggleView}>
      <div className="card-body">
        {showGraph ? (
          <Bar data={data} options={options} />
        ) : (
          <table className="table w-full">
            <thead>
              <tr>
                <th>Version</th>
                <th>Positive (%)</th>
                <th>Neutral (%)</th>
                <th>Negative (%)</th>
              </tr>
            </thead>
            <tbody>
              {reviewData.map((item, index) => (
                <tr key={index}>
                  <td>{item.month}</td>
                  <td>{item.positive}</td>
                  <td>{item.neutral}</td>
                  <td>{item.negative}</td>
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
