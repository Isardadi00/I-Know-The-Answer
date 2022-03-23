import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
                    <label>Enter Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>Enter Password:
                        <input
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button onClick={navigate("../register")}>Register</button>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;