import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis 
    LinearScale, // y axis
    PointElement 
    
} from 'chart.js';

ChartJS.register (
    LineElement,
    CategoryScale,  
    LinearScale, 
    PointElement
)

function DataChart() {

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], // Have a .map showing all the dates they have ever done. May be have an option for week, month, year
        datasets: [
            {
                label: 'Sales of the Week', // Need to have the exercise name
                data: [3, 6, 9, 2, 5], // Need to weight of the completed exercise
                backgroundColor: 'aqua',
                borderColor: 'black',
                pointBorderColor: 'aqua',
                fill: true,
                tension: 0.4
            }
        ]
    };
    const options = {
        plugins: {
            legend: false
        }, 
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                min: 1, // Change to the lowest Weight they have. 
                max: 10, // Change it to the Highest they have.
                ticks: {
                    stepSize: 2, // Change it into maybe 25lbs
                    callback: (value) => value + 'lbs' //Shows the y axis value which is pounds in this app
                }
            }
        }
    };

    return (
        <div className="dataChart">
        <Line 
            data = {data}
            options = {options}
        >        
        </Line>
        </div>
    )
}

export default DataChart;