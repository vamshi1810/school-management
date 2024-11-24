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

// Registering Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Card = ({cardData}) => {
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ], // X-Axis Labels
    datasets: [
      {
        label: "Students Present",
        data: [320, 310, 325, 330, 340, 380, 420], // Data for each day
        backgroundColor: "rgba(0, 255, 0,0.5)", // Bar color
        borderColor: "rgba(0, 255, 0,0.2)", // Border color
        borderWidth: 1, // Border width
      },
      {
        label: "Students Present",
        data: [20, 50, 5, 25, 25, 25, 20],
        backgroundColor: "rgba(255, 0, 0,0.5)", // Bar color
        borderColor: "rgba(255, 0, 0,0.2)", // Border color
        borderWidth: 1, // Border width
      },
    ],
  };

  // Options for customizing the chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Student Attendance This Week", // Title for the chart
      },
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start the y-axis at zero
      },
    },
  };
  return (
    <>
      {/* <div class=" py-4 px-8 flex gap-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Bar data={data} options={options} />
      </div> */}

      
        <div class=" py-4 px-8 flex gap-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div>
            <div className="rounded-full bg-blue-700 p-2">
            <div>{cardData.icon}</div>
            </div>
          </div>
          <div>
            <div className="text-xl">{cardData.title}</div>
            <h2 className="text-xl">{cardData.count}</h2>
          </div>
        </div>
        {/* <div class=" py-4 px-8 flex gap-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div>
            <div className="rounded-full bg-blue-700 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
          </div>
          <div>
            <div className="text-xl">Total Teachers</div>
            <h2 className="text-xl">2545</h2>
          </div>
        </div>
        <div class=" py-4 px-8 flex gap-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div>
            <div className="rounded-full bg-blue-700 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
          </div>
          <div>
            <div className="text-xl">Total Teachers</div>
            <h2 className="text-xl">2545</h2>
          </div>
        </div> */}
      
    </>
  );
};

export default Card;
