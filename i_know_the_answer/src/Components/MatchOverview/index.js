import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Match from "../Match";

const MatchOverview = () => {
    const navigate = useNavigate();
    const matches = useSelector(state => state.match);

    return (
        <div>
            <h1>Matchrooms</h1>
            <button onClick={() => navigate("/match/create")}>Create</button>
            {matches.map(match => <Match key={match._id} match={match} />)}
        </div >
    );
};

export default MatchOverview;