import { getUserInfo } from "../../Services/requestServices";
import useState from "react-usestateref";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CreateMatch = () => {
    const [title, setTitle, titleRef] = useState("");
    const [image, setImage, imageRef] = useState("");
    const [questionCounter, setQuestionCounter, questionCounterRef] = useState(1);
    const [questionTitle, setQuestionTitle, questionTitleRef] = useState("");
    const [option1, setOption1, option1Ref] = useState({});
    const [option2, setOption2, option2Ref] = useState({});
    const [option3, setOption3, option3Ref] = useState({});
    const [option4, setOption4, option4Ref] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        async function authenticate() {
            const user = await getUserInfo();
            if (user === undefined) {
                navigate("/login");
            }
        }
        authenticate();
    }, [])

    const handleQuestionSubmit = () => {

    };

    const handleMatchSubmit = async () => {

    };

    return (
        <div>
            <h1>Create Match</h1>
            <form>
                <label>Title:
                    <input
                        type="text"
                        value={titleRef.current}
                        placeholder="Enter Match Title"
                        onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>Match Image:
                    <input
                        type="file"
                        value={imageRef.current}
                        onChange={(e) => setImage(e.target.value)} />
                </label>
            </form>
            <h1>Questions</h1>
            <button>Add</button>
            <h2>Question {questionCounterRef.current}</h2>
            <form>
                <label>Title of the Question:
                    <input
                        type="text"
                        value={questionTitleRef.current}
                        placeholder="Enter the Title of the Question"
                        onChange={(e) => setQuestionTitle(e.target.value)} />
                </label>
                <label>Answer 1:
                    <input
                        type="text"
                        value={option1Ref.current}
                        placeholder="Enter the answer"
                        onChange={(e) => setOption1(e.target.value)} />
                </label>
                <label>Answer 2:
                    <input
                        type="text"
                        value={option2Ref.current}
                        placeholder="Enter the answer"
                        onChange={(e) => setOption2(e.target.value)} />
                </label>
                <label>Answer 3:
                    <input
                        type="text"
                        value={option3Ref.current}
                        placeholder="Enter the answer"
                        onChange={(e) => setOption3(e.target.value)} />
                </label>
                <label>Answer 4:
                    <input
                        type="text"
                        value={option4Ref.current}
                        placeholder="Enter the answer"
                        onChange={(e) => setOption4(e.target.value)} />
                </label>
            </form>
        </div >
    );
};

export default CreateMatch;