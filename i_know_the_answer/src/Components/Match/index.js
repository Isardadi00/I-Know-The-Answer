import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useState from "react-usestateref";
import socket from "../../Services/socketServices";

const Match = ({ match }) => {
    const [joinError, setJoinError] = useState(false);
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    const handleJoinMatchRoom = async () => {
        if (match.status !== "not-started" || match.players.length >= 4) {
            setJoinError(true);
            return;
        }
        socket.emit('joinmatch', match._id, user)
        navigate(`/match/${match._id}`);
    }

    const ShowError = (props) => {
        const error = props.isError;
        if (error === false) {
            return null;
        }
        return <p>Match is full/Match is already started.</p>;
    }

    return (
        <div
            onClick={() => handleJoinMatchRoom()}>
            <h2>{match.title}</h2>
            <img src={match.titleImage} alt={match.title} />
            <h3>{match.players.length}/4</h3>
            <h3>{match.status}</h3>
            <ShowError isError={joinError} />
        </div >
    );
};

export default Match;