import { useNavigate } from "react-router-dom";
import { getUserInfo } from '../../Services/requestServices';
import { useSelector } from "react-redux";
import useState from "react-usestateref";
import socket from "../../Services/socketServices";

const Match = ({ match }) => {
    const [matchState, setMatchState, matchStateRef] = useState(match);
    const [joinError, setJoinError, joinErrorRef] = useState(false);
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    const handleJoinMatchRoom = async () => {
        if (matchState.status != "not-started" || matchState.players.length >= 4) {
            setJoinError(true);
            return;
        }
        socket.emit(matchState._id, user)
        navigate(`/match/${matchState._id}`);
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
            <h2>{matchState.title}</h2>
            <img src={matchState.titleImage} alt={matchState.title} />
            <h3>{matchState.players.length}/4</h3>
            <h3>{matchState.status}</h3>
            <ShowError isError={joinError} />
        </div >
    );
};

export default Match;