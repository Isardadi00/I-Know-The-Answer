import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import socket from "../../Services/socketServices";
import UserBar from "../../Components/UserBar";
import MatchPlayer from "../../Components/MatchPlayer";

const WaitingRoom = () => {
    const { id } = useParams();
    const user = useSelector(state => state.user);
    const match = useSelector(state => state.match.find(match => match._id === id));
    const navigate = useNavigate();

    const handleLeaveMatchRoom = () => {
        socket.emit('leavematch', id, user);
        navigate("/dashboard")
    }

    return (
        <div>
            <UserBar user={user} />
            <h1>Waiting for Players to Join</h1>
            <button>Start</button>
            <button onClick={handleLeaveMatchRoom}>Leave</button>
            {match?.players.map(player => <MatchPlayer key={player.id} player={player} />)}
        </div>
    );
};

export default WaitingRoom;