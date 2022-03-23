import react, { useEffect } from "react";
import useState from 'react-usestateref';
import { useNavigate } from "react-router"

const Register = () => {
    const [username, setUsername, usernameRef] = useState("");
    const [password, setPassword, passwordRef] = useState("");
    const [displayName, setDisplayName, displayNameRef] = useState("");
    const [formErrors, setFormErrors, formErrorsRef] = useState({});
    let navigate = useNavigate();
    
    const validate = (fields) => {
        const errors = {};
        if (!(fields.username.length > 3)) {errors.username = "Username must be longer than 3 characters";}
        if (!(fields.password.length > 8)) {errors.password = "Password must be longer than 8 characters";}
        if (!(fields.displayName.length > 3)) {errors.displayName = "Display Name must be longer than 8 characters";}
        return errors;
    }; 
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            username: username,
            password: password,
            displayName: displayName
        };
        setFormErrors(validate(user));
        if (Object.keys(formErrorsRef.current).length > 0) {
            console.log("Errors:", formErrorsRef.current);
            return;
        }
        else {
            // todo: register user
            console.log(JSON.stringify(user));
            navigate("/login");
        };
    }

    const handleCancel = () => {
        setUsername("");
        setPassword("");
        setDisplayName("");
        navigate("/login");
    };

    return (
        <div className="register-page">
            <div className="register-body">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label>Username:
                        <input
                            type="text"
                            value={usernameRef.current}
                            placeholder="Enter Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="text"
                            value={passwordRef.current}
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <label>Display Name:
                        <input
                            type="text"
                            value={displayNameRef.current}
                            placeholder="Enter Display Name"
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