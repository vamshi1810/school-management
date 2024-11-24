
import React from 'react'

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
    labels: ['Active', 'In-Active'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19], // Your data here
        backgroundColor: [
          'rgba(0, 255, 0,0.5)',
          'rgba(255, 0, 0,0.5)',
          
        ],
        borderColor: [
            'rgba(0, 255, 0,0.5)',
          'rgba(255, 0, 0,0.5)',
          
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // 'top', 'bottom', 'left', or 'right'
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  

const ChartComponent = () => {
  return (
    <div style={{height:'280px'}} class=" flex justify-center gap-2 p-4  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       <Pie data={data} options={options} 
    />
    </div>
  )
}

export default ChartComponent
