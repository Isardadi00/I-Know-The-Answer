import { useSelector } from "react-redux";
import UserBar from "../../Components/UserBar";
import MatchOverview from "../../Components/MatchOverview";

const Dashboard = () => {
    const user = useSelector(state => state.user);

    return (
        <div>
            <UserBar user={user} />
            <h1>Dashboard</h1>
            <MatchOverview />
        </div>
    );
};

export default Dashboard;