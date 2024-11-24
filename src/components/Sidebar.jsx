import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo_prev_ui.png"

const Sidebar = () => {
  return (
    <div className="flex">
      <aside
        className={`sidebar bg-gray-900 text-gray-100 h-screen p-4 
          lg:flex flex-col w-64`}
      >
        <div className="mb-6">
        <img src={logo} className="w-16 object-cover mx-auto bg-transparent" alt="Logo" />

        </div>
        <nav>
          <ul className="pl-0">
            
            <NavLink
              to="/app/home"
              className={({ isActive }) =>
                `mb-2 no-underline flex items-center p-3 rounded  hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="size-6 h-6 w-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                />
              </svg>
              <span className="no-underline text-white">Dashboard</span>
            </NavLink>

            
      
            <NavLink
              to="/app/students"
              className={({ isActive }) =>
                `mb-2 no-underline flex items-center p-3 rounded w-full hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="size-6 h-6 w-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12M6 12h12"
                />
              </svg>
              <span className="no-underline text-white">Students</span>
            </NavLink>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
