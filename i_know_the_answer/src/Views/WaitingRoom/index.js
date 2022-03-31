import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../Services/requestServices";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../Actions/userActions";
import UserBar from "../../Components/UserBar";

const WaitingRoom = () => {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    const handleLeaveMatchRoom = () => {
        navigate("/dashboard")
    }

    return (
        <div>
            <UserBar user={user} />
            <h1>Waiting for Players to Join</h1>
            <button>Start</button>
            <button onClick={handleLeaveMatchRoom}>Leave</button>
            <p>*Insert users here*</p>
        </div>
    );
};

export default WaitingRoom;