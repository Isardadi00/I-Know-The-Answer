import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUserInfo } from "./Services/requestServices";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import CreateMatch from "./Components/CreateMatch";
import styles from './main.css';

function App() {

  return (
    <div className=".fill-window" style={styles.body}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/creatematch" element={<CreateMatch />} />
      </Routes>
    </div>
  );
}

export default App;
