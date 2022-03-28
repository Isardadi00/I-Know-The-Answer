
const Match = ({match}) => {
    console.log("Match: ", match);
    return (
        <div>
            <h2>{match.title}</h2>
            <img src={match.titleImage} alt={match.title} />
            <h3>{match.players.length}/4</h3>
            <h3>{match.status}</h3>
        </div >
    );
};

export default Match;