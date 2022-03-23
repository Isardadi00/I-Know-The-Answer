import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router"

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("User:", {
            username: username,
            password: password,
            displayName: displayName
        });
        // todo: create user in database
    }

    const handleCancel = () => {
        setUsername("");
        setPassword("");
        setDisplayName("");
        navigate("/login")
    };

    return (
        <div className="register-page">
            <div className="register-body">
                <h2>Register</h2>
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
                    <label>Enter Display Name:
                        <input
                            type="text"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                        />
                    </label>
                    <button onClick={handleCancel}>Cancel</button>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;