import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getUserInfo } from "../../Services/requestServices";
import useState from "react-usestateref";
import UserBar from "../UserBar";

const Dashboard = () => {
    const [user, setUser, userRef] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        async function authenticate() {
            const user = await getUserInfo();
            if (user === undefined) {
                navigate("/login");
            }
        }
        authenticate();
    }, [])

    return (
        <div>
            <UserBar user={user} />
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;