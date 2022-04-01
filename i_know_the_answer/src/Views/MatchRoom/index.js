import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setMatches, getMatches } from "../../Actions/matchActions";
import { useParams } from "react-router-dom";
import socket from "../../Services/socketServices";
import UserBar from "../../Components/UserBar";

const MatchRoom = () => {
    const { id } = useParams();
    const user = useSelector(state => state.user);
    const matches = useSelector(state => state.match);
    const singleMatch = matches.find(match => match._id === id);
    const dispatch = useDispatch();
    const currQuestionIndex = singleMatch.currentQuestion;
    const currQuestion = singleMatch.questions[currQuestionIndex - 1];

    return (
        <div>
            <h1>Question {currQuestionIndex}</h1>
            <h2>{currQuestion.title}</h2>
        </div>
    )


}

export default MatchRoom;