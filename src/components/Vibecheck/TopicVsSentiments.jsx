import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'daisyui/dist/full.css';
import DashboardContainer from '../DashboardContainer';

export default function TopicVsSentiments() {
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
                borderColor: 'rgba(75, 192, 192, 0.6)',
                fill: false,
                tension: 0.2
            },
            {
                label: 'Neutral',
                data: reviewData.map(item => item.neutral),
                borderColor: 'rgba(54, 162, 235, 0.6)',
                fill: false,
                tension: 0.2
            },
            {
                label: 'Negative',
                data: reviewData.map(item => item.negative),
                borderColor: 'rgba(255, 99, 132, 0.6)',
                fill: false,
                tension: 0.2
            },
        ],
    };

    const options = {
        responsive: true, // Make the chart responsive
        maintainAspectRatio: false, 
        color: "#ffffff",
        scales: {
            x: { 
                grid: { color: "rgba(255,255,255,0.1)" },
                ticks: { color: "rgba(255,255,255,0.5)" }
            },
            y: {
                grid: { color: "rgba(255,255,255,0.1)" },
                ticks: { color: "rgba(255,255,255,0.5)" },
                beginAtZero: true,
            },
        },
        plugins: {
            datalabels: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
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
        <DashboardContainer title="Insert Graph Title">
            <div className="h-full" onClick={toggleView}>
                {showGraph ? (
                    <Line id={22} data={data} options={options} />
                ) : (
                    <table className="table">
                        <thead>
                            <tr className="text-white/50">
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
        </DashboardContainer>
    );
};