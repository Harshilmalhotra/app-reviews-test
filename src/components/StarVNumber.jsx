import {Chart as ChartJS} from 'chart.js/auto';
import { Bar,Doughnut,Line } from 'react-chartjs-2';


export default function StarVNumber() {
    return (
        <div className="flex flex-col items-center justify-center bg-white h-[380px] w-[830px] rounded-[20px] drop-shadow-xl p-2">
           
            <Bar
                data={{                                 
                    labels:["January","February","March","April","May","June","July","August","September","October","November","December"],
                    datasets:[
                        {
                            label:"Number",
                            data:[10,20,30,40,50,100,150,20,60,10,70,80],
                        },
                    ],
                }}

                options={{
                    responsive: true, // Make the chart responsive
                    maintainAspectRatio: false, // Allow the chart to resize freely
                    // aspectRatio: 2, // Optional: if you want to maintain a specific aspect ratio
                }}

          />
        </div>
    )
}