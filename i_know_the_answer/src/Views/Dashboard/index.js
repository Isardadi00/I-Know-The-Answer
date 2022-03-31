import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../Actions/userActions";
import UserBar from "../../Components/UserBar";
import MatchOverview from "../../Components/MatchOverview";
import { getUserInfo } from "../../Services/requestServices";

const Dashboard = () => {
    const state = useSelector(state => state);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(async () => {
        if (user?.id != undefined) { return; }
        const session = await getUserInfo();

        if (!session) {
            navigate("/");
        }
        else {
            dispatch(setUser(session));
        }
    }, []);

    return (
        <div>
            <UserBar user={user} />
            <h1>Dashboard</h1>
            <MatchOverview />
        </div>
    );
};

export default Dashboard;