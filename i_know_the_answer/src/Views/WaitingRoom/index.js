import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setMatches } from "../../Actions/matchActions";
import socket from "../../Services/socketServices";
import UserBar from "../../Components/UserBar";
import MatchPlayer from "../../Components/MatchPlayer";

const WaitingRoom = () => {
    const { id } = useParams();
    const user = useSelector(state => state.user);
    const matches = useSelector(state => state.match);
    const singleMatch = matches.find(match => match._id === id);
    console.log("singleMatch", singleMatch);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on('joinmatch', user => {
            dispatch(setMatches(matches.map(match => {
                if (match._id === id) {
                    return {
                        ...match,
                        players: [...match.players, user]
                    }
                }
                return match;
            })));
        });

        socket.on('leavematch', user => {
            dispatch(setMatches(matches.map(match => {
                if (match._id === id) {
                    return {
                        ...match,
                        players: match.players.filter(player => player.id !== user.id)
                    }
                }
                return match;
            })));
        });

        return () => {
            socket.off('joinmatch');
            socket.off('leavematch');
        }
    }, [matches]);

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
            {singleMatch?.players.map(player => <MatchPlayer key={player.id} player={player} />)}
        </div>
    );
};

export default WaitingRoom;