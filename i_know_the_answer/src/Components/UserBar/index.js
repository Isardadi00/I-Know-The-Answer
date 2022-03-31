import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAction } from "../../Actions/userActions";
import { logoutUser } from "../../Services/requestServices";

const UserBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const handleLogout = async () => {
        await logoutUser();
        dispatch(logoutUserAction());
        navigate("/");
    };

    return (
        <div>
            <img src={user.avatar} alt={user.displayName} />
            <h2>{user.displayName}</h2>
            <button onClick={handleLogout}>Log Out</button>
        </div >
    );
};

export default UserBar;