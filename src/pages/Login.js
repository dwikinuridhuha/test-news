import {useNavigate} from "react-router-dom"
import {useState} from "react";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.length > 0 || password > 0) navigate("/news");
    };

    return (
        <div className="login mobile-view">
            <form className="form">
                <div className="username-form">
                    <p>username</p>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="password-form">
                    <p>password</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button className="btn" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Login;