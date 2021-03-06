import useState from 'react-usestateref';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from "react-router";
import { registerUser } from "../../Services/requestServices";

const Register = () => {
    const [username, setUsername, usernameRef] = useState("");
    const [password, setPassword, passwordRef] = useState("");
    const [displayName, setDisplayName, displayNameRef] = useState("");
    const [formErrors, setFormErrors, formErrorsRef] = useState({});
    const [inputError, setInputError] = useState(false);

    const state = useSelector(state => state);
    const user = useSelector(state => state.user);
    console.log("Redux state in register:", state);
    console.log("Redux user in register:", user);
    let navigate = useNavigate();

    useEffect(() => {
        if (user?.id === undefined) { return; }
        else {
            navigate('/dashboard');
        }
    })

    const validate = (fields) => {
        const errors = {};
        if (!(fields.username.length > 3)) { errors.username = "Username must be longer than 3 characters"; }
        if (!(fields.password.length > 8)) { errors.password = "Password must be longer than 8 characters"; }
        if (!(fields.displayName.length > 3)) { errors.displayName = "Display Name must be longer than 8 characters"; }
        return errors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            username: username,
            password: password,
            displayName: displayName
        };
        setFormErrors(validate(user));
        if (Object.keys(formErrorsRef.current).length > 0) {
            setInputError(true);
            return;
        }
        else {
            var registerResponse = await registerUser(user);
            if (!registerResponse.ok) {
                setInputError(true)

            }
            else {
                navigate("/");
            }
        };
    }

    const handleCancel = () => {
        setUsername("");
        setPassword("");
        setDisplayName("");
        navigate("/");
    };

    const ShowError = (props) => {
        const isError = props.isError;
        console.log("IsError:", isError);
        if (isError === false) {
            return null;
        }
        else {
            return <p>You provided insufficient information.</p>;
        }
    }

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
                    <ShowError isError={inputError} />
                    <button onClick={handleCancel}>Cancel</button>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;