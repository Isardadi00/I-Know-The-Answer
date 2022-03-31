
const MatchPlayer = ({ player }) => {
    return (
        <div>
            <img src={player.avatar} alt={player.displayName} />
            <h2>{player.displayName} is in the Building!</h2>
        </div>
    );
};

export default MatchPlayer;