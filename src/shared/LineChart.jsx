import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({teacherMonthlyInfo}) => {
  // Data for the line chart
  const data = {
    labels:teacherMonthlyInfo.labels||[],
    datasets:teacherMonthlyInfo.datasets|| [],
  };

  // Configuration options
  const options =teacherMonthlyInfo.options ||{}

  return (
    <div class=" py-4 px-8 flex gap-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<Line data={data} options={options} />
</div>  
)
  
};

export default LineChart;
