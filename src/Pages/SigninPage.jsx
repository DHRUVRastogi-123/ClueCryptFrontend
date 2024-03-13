import React, {useState} from "react";
import {Link} from "react-router-dom";
import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";
import "./SigninPage.css";

const SigninPage = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
    };

    return (
        <div className="signinPage">
            <div className="signin-container">
                <div className="signin-side-image">
                    <h1>WELCOME BACK!</h1>
                    <p>
                        <span>To Solve More Cases With Us Login With Your</span>
                        <span> Details Here</span>
                    </p>
                    <Link to="/signup" >Don't Have An Account? Register</Link>
                </div>
                <div className="signin-body">
                    <h1>LOGIN</h1>
                    <form onSubmit={() => handleLogin} >
                        <div className="div-2">
                            <span>EMAIL</span>
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="div-2">
                            <span>PASSWORD</span>
                            <input type={showPassword? 'text' : 'password'} name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <div className="eye-for-password" onClick={() => {setShowPassword(!showPassword)}}>{showPassword? <GoEyeClosed /> : <GoEye />}</div>
                        </div>
                        <button type="submit">LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SigninPage;