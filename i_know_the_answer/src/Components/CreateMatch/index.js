import { getUserInfo, createMatch } from "../../Services/requestServices";
import useState from "react-usestateref";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const CreateMatch = () => {
    const [currentQuestion, setCurrentQuestion, questionRef] = useState(0);
    const [inputError, setInputError] = useState(false);
    const inputRef = useRef()

    const [match, setMatch, matchRef] = useState({
        title: "",
        titleImage: "",
        questions: [{
            title: "",
            options: [
                {
                    value: "",
                    correct: false},
                {
                    value: "",
                    correct: false},
                {
                    value: "",
                    correct: false},
                {
                    value: "",
                    correct: false}
            ]
        }],
        owner: {}
    });
    let navigate = useNavigate();

    useEffect(async () => {
        async function authenticate() {
            const user = await getUserInfo();
            if (user === undefined) {
                navigate("/login");
            }
        }
        authenticate();
    }, [])

    const handleNewQuestion = (event) => {
        event.preventDefault();
        setCurrentQuestion(currentQuestion + 1)
        const newQuestion = {
            title: "",
            options: [
                {
                    value: "",
                    correct: false},
                {
                    value: "",
                    correct: false},
                {
                    value: "",
                    correct: false},
                {
                    value: "",
                    correct: false}
            ]
        };
        setMatch({ ...match, questions: [...match.questions, newQuestion] });
    };

    const handleCreateMatch = async (event) => {
        event.preventDefault();
        if (match.questions.length <= 1) {
            setInputError(true);
            return;
        }
        setMatch({...match, owner: await getUserInfo()});
        var matchSubmit = {...match};
        matchSubmit.questions.pop();
        console.log("Match to be added:",matchSubmit);
        
        await createMatch(matchSubmit);
        navigate("/");
    };

    const ShowError = (props) => {
        const isError = props.isError;
        if (isError === false) {
            return null;
        }
        else {
            return <p>You must have at least 1 question.</p>;
        }
    }

    const handleFileUpload = (file) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
            document.getElementById("yourImgTag").src = reader.result;
            setMatch({...match, titleImage: `${reader.result}`});
        };
        reader.onerror = function (error) {
            // TODO: Handle error
            console.log('Error: ', error);
        };
    }

    return (
        <div>
            <h1>Create Match</h1>
            <form onSubmit={(event)=> handleCreateMatch(event)}>
                <label>Title:
                    <input
                        type="text"
                        value={matchRef.current.title}
                        placeholder="Enter Match Title"
                        required
                        onChange={(e) => setMatch({...match, title: e.target.value})}/>
                </label>
                <label>Match Image:
                    <input
                        type="file"
                        required
                        onChange={() => handleFileUpload(inputRef.current.files[0])}
                        ref={inputRef}
                        />
                </label>
                <img id="yourImgTag" />
                <ShowError isError={inputError}/>
                <input type="submit" value="Create Match"/>
            </form>
            <h1>Questions</h1>
            <button onClick={() => navigate("/")}>Cancel</button>
            <h2>Question {currentQuestion + 1}</h2>
            <form onSubmit={(event)=> handleNewQuestion(event)}>
            <label>Title of the Question:
                <input
                    type="text"
                    placeholder="Enter the Title of the Question"
                    required
                    value={matchRef.current.questions[currentQuestion].title}
                    onChange={(e) => {
                        var newQuestions = [...match.questions];
                        newQuestions[currentQuestion].title = e.target.value;
                        setMatch({...match, questions: newQuestions});
                    }}/>
            </label>
            {match.questions[currentQuestion].options.map((answer, answerIndex) => {
                return (
                    <div key={answerIndex}>
                        <label>Answer {answerIndex + 1}:
                        <input
                            type="text"
                            placeholder="Enter the answer"
                            required
                            value={matchRef.current.questions[currentQuestion].options[answerIndex].value}
                            onChange={(e) => {
                                var newQuestions = [...match.questions];
                                newQuestions[currentQuestion].options[answerIndex].value = e.target.value;
                                setMatch({...match, questions: newQuestions});
                            }}/>
                        </label>
                        <label>Right Answer?
                            <input
                                type="radio"
                                name="answer"
                                required
                                value={matchRef.current.questions[currentQuestion].options[answerIndex].correct}
                                onChange={() => {
                                    var newQuestions = [...match.questions];
                                    for (let option of newQuestions[currentQuestion].options) {
                                        option.correct = false;
                                    }
                                    newQuestions[currentQuestion].options[answerIndex].correct = true;
                                    setMatch({...match, questions: newQuestions});
                                    console.log("Current match: ", match);
                                }}/>
                        </label>
                    </div>
                )
            })}
            <input type="submit" value="Add Question"/>
            </form>
        </div >
    );
};

export default CreateMatch;