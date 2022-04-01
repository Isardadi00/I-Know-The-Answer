import { Routes, Route } from "react-router-dom";
import Login from "./Views/Login";
import Register from "./Views/Register";
import Dashboard from "./Views/Dashboard";
import CreateMatch from "./Views/CreateMatch";
import MainLayout from "./MainLayout";
import styles from './main.css';
import WaitingRoom from "./Views/WaitingRoom";
import MatchRoom from "./Views/MatchRoom";

function App() {

  return (
    <div className=".fill-window" style={styles.body}>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route Path="/*" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/match/create" element={<CreateMatch />} />
          <Route path="/match/:id" element={<WaitingRoom />} />
          <Route path="/matchroom/:id" element={<MatchRoom />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
