import { useNavigate } from "react-router";
import { logoutUser, getUserInfo } from "../../Services/requestServices";

const UserBar = ({ user }) => {
    let navigate = useNavigate();

    const handleLogout = async () => {
        await logoutUser();
        navigate("../login");
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