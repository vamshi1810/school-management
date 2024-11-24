import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarComponent = ({ studentInfo }) => {
  const data = {
    labels: studentInfo.labels || [],
    datasets: studentInfo.datasets || [],
  };

  const options = studentInfo.options || {};
  return (
    <div class=" py-4 px-8 flex gap-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarComponent;
