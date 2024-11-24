import React, { useEffect, useState } from "react";
import withAuth from "../components/withAuth";
import { app } from "../firebase";
import { ref, set, push, getDatabase, onValue } from "firebase/database";
import { CheckIcon, UserIcon, UsersIcon, XMarkIcon } from "@heroicons/react/16/solid";
import Card from "../components/Card";
import BarComponent from "../shared/BarComponent";
import LineChart from "../shared/LineChart";

const db = getDatabase(app);

const studentsCardData = [
  {
    title: "Total Teachers",
    count: 20,
    icon: <UserIcon className="h-6 w-6 text-white" />,
  },
  {
    title: "Total Students",
    count: 480,
    icon: <UsersIcon className="h-6 w-6 text-white" />, // Another icon example
  },
  {
    title: "Teachers Present",
    count: 20,
    icon: <CheckIcon className="h-6 w-6 text-white" />
  },
  {
    title: "Students Present",
    count: 450,
    icon: <XMarkIcon className="h-6 w-6 text-white" />, // Another icon example
  },
];

const Dashboard = () => {
  const studentInfo = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
     
    ], // X-Axis Labels
    datasets: [
      {
        label: "Students Present",
        data: [320, 310, 325, 330, 340, 380], // Data for each day
        backgroundColor: "rgba(0, 255, 0,0.5)", // Bar color
        borderColor: "rgba(0, 255, 0,0.2)", // Border color
        borderWidth: 1, // Border width
      },
      {
        label: "Students Absent",
        data: [20, 50, 5, 25, 25, 25],
        backgroundColor: "rgba(255, 0, 0,0.5)", // Bar color
        borderColor: "rgba(255, 0, 0,0.2)", // Border color
        borderWidth: 1, // Border width
      },
    ],
     options: {
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
    }
  };
  const teacherInfo = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
     
    ], // X-Axis Labels
    datasets: [
      {
        label: "Teachers Present",
        data: [20, 19, 18, 17, 16, 15], // Data for each day
        backgroundColor: "rgba(0, 255, 0,0.5)", // Bar color
        borderColor: "rgba(0, 255, 0,0.2)", // Border color
        borderWidth: 1, // Border width
      },
      {
        label: "Teachers Absent",
        data: [0, 1, 2, 3, 4, 5],
        backgroundColor: "rgba(255, 0, 0,0.5)", // Bar color
        borderColor: "rgba(255, 0, 0,0.2)", // Border color
        borderWidth: 1, // Border width
      },
    ],
     options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Teachers Attendance This Week", // Title for the chart
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
    }
  };
  const teacherMonthlyInfo = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Teachers Attendance',
       
        data: [20, 18, 19, 17,20, 14, 19],
        fill: true,
        borderColor: 'rgba(0, 255, 0,0.5',
        tension: 0.1,
      },
    ],
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Monthly Teachers Attendance',
        },
      },
    }
  };
  const studentMonthlyInfo = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Students Attendance',
        data: [320, 352, 380, 322, 252, 252, 281],
        fill: true,
        borderColor: 'rgba(0, 255, 0,0.5',
        tension: 0.1,
      },
    ],
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Monthly Students Attendance',
        },
      },
    }
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-1">
        {studentsCardData.map((card, id) => {
          return <Card cardData={card}></Card>;
        })}
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div className="mt-4">
        <BarComponent studentInfo={teacherInfo}></BarComponent>
      </div>
     
      <div className="mt-4">
        <BarComponent studentInfo={studentInfo}></BarComponent>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div className="mt-4">
        <LineChart teacherMonthlyInfo={teacherMonthlyInfo}></LineChart>
      </div>
     
      <div className="mt-4">
        <LineChart teacherMonthlyInfo={studentMonthlyInfo}></LineChart>
      </div>
      </div>
    </>
  );
};

export default withAuth(Dashboard);
