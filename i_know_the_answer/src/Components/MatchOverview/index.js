import { useNavigate } from "react-router";
import { useEffect } from "react";
import useState from "react-usestateref";
import { getAllMatches } from "../../Services/requestServices";
import Match from "../Match";

const MatchOverview = () => {
    const [matches, setMatches, matchesRef] = useState([]);
    let navigate = useNavigate();

    useEffect(async () => {
        setMatches(await getAllMatches());
    },[]);

    return (
        <div>
            <h1>Matchrooms</h1>
            <button onClick={() => navigate("/creatematch")}>Create</button>
            {matches.map(match => <Match match={match}/>)}
        </div >
    );
};

export default MatchOverview;