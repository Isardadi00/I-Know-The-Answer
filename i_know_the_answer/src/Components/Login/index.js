import useState from 'react-usestateref';
import { useNavigate } from "react-router";
import { loginUser, getUserInfo } from '../../Services/requestServices';
import { useEffect } from 'react';

const Login = () => {
    const [username, setUsername, usernameRef] = useState("");
    const [password, setPassword, passwordRef] = useState("");
    const [inputError, setInputError] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        async function authenticate() {
            const user = await getUserInfo();
            console.log("Login user:", user);
            if (user) {
                navigate("/");
            }
        }
        authenticate();
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            username: username,
            password: password
        };
        const loginResponse = await loginUser(user);
        console.log("Login Response:", loginResponse);
        if (loginResponse.noError) {
            navigate("../");
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