import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { app } from "./firebase";
import "bootstrap/dist/css/bootstrap.min.css";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Layout from "./components/Layout";
const auth = getAuth(app);
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/app" element={<Layout></Layout>}>
            <Route path="home" element={<Dashboard></Dashboard>}></Route>
            <Route path="students" element={<Students></Students>}></Route>

            <Route path="teachers" element={<Teachers></Teachers>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
