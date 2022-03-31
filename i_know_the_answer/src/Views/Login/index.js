import useState from 'react-usestateref';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { loginUser } from '../../Services/requestServices';
import { setUser } from '../../Actions/userActions';
import { useEffect } from 'react';

const Login = () => {
    const [username, setUsername, usernameRef] = useState("");
    const [password, setPassword, passwordRef] = useState("");
    const [inputError, setInputError] = useState(false);

    const user = useSelector(state => state.user);
    let navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (user?.id === undefined) { return; }
        else {
            navigate('/dashboard');
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            username: username,
            password: password
        };
        const loginResponse = await loginUser(user);
        console.log("Login response:", loginResponse);
        if (loginResponse != undefined) {
            dispatch(setUser(loginResponse));
            navigate("/dashboard");
        }
        else {
            setInputError(true);
            return null;
        }
    }

    const ShowError = (props) => {
        const isError = props.isError;
        if (isError === false) {
            return null;
        }
        else {
            return <p>Your login information was incorrect.</p>;
        }
    }

    return (
        <div className="login-page">
            <div className="login-body">
                <h2>Log in</h2>
                <form onSubmit={handleSubmit}>
                    <label>Username:
                        <input
                            type="text"
                            value={username}
                            placeholder="Enter Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="text"
                            value={password}
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <ShowError isError={inputError} />
                    <button onClick={() => { navigate("../register") }}>Register</button>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;