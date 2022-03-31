import { Routes, Route } from "react-router-dom";
import Login from "./Views/Login";
import Register from "./Views/Register";
import Dashboard from "./Views/Dashboard";
import CreateMatch from "./Views/CreateMatch";
import styles from './main.css';
import WaitingRoom from "./Views/WaitingRoom";

function App() {

  return (
    <div className=".fill-window" style={styles.body}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/match/create" element={<CreateMatch />} />
        <Route path="/match/:id" element={<WaitingRoom />} />
      </Routes>
    </div>
  );
}

export default App;
