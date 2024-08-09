import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import DashboardContainer from '../DashboardContainer';


const plugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = options.color || '#99ffff';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    }
};

// ChartJS.register(plugin);

export default function StarVNumber() {
    return (
        <DashboardContainer title="Insert Graph Title">
            <Bar
                id={11}
                data={{
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    datasets: [
                        {
                            label: "Number",
                            data: [10, 20, 30, 40, 50, 100, 150, 20, 60, 10, 70, 80],
                        },
                    ],
                }}

                options={{
                    responsive: true, // Make the chart responsive
                    maintainAspectRatio: false, // Allow the chart to resize freely
                    color: "#ffffff",
                    scales: {
                        x: { 
                            grid: { color: "rgba(255,255,255,0.1)" },
                            ticks: { color: "rgba(255,255,255,0.5)" }
                        },
                        y: { 
                            grid: { color: "rgba(255,255,255,0.1)" },
                            ticks: { color: "rgba(255,255,255,0.5)" }
                        },
                    }
                }}
            />
        </DashboardContainer>
    )
}