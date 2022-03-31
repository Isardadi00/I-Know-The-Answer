import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMatches } from "../../Actions/matchActions";
import Match from "../Match";

const MatchOverview = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const matches = useSelector(state => state.match);

    useEffect(async () => {
        dispatch(getMatches());
    }, []);

    return (
        <div>
            <h1>Matchrooms</h1>
            <button onClick={() => navigate("/match/create")}>Create</button>
            {matches.map(match => <Match match={match} />)}
        </div >
    );
};

export default MatchOverview;