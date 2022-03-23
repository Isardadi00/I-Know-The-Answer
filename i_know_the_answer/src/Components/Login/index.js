import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("User:", {
            username: username,
            password: password
        });
        // todo: log user into website
    }

    // navigate to register on register click

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
                    <button onClick={() => {navigate("../register")}}>Register</button>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;