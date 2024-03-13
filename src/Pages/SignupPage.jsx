import React, {useState} from "react";
import {Link} from "react-router-dom";
import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";
import "./SignupPage.css";

const SignupPage = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = () => {
    };

    return (
        <div className="signupPage">
            <div className="signup-container">
                <div className="signup-body">
                    <h1>REGISTER</h1>
                    <form onSubmit={() => handleSignUp} >
                        <div className="div-0">
                            <div className="div-1">
                                <span>FIRST NAME</span>
                                <input type="text" name="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="div-1">
                                <span>LAST NAME</span>
                                <input type="text" name="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div className="div-2">
                            <span>EMAIL</span>
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="div-2">
                            <span>PASSWORD</span>
                            <input type={showPassword? 'text' : 'password'} name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <div className="eye-for-password" onClick={() => {setShowPassword(!showPassword)}}>{showPassword? <GoEyeClosed /> : <GoEye />}</div>
                        </div>
                        <div className="div-2">
                            <span>CONFIRM PASSWORD</span>
                            <input type="text" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <button type="submit">REGISTER</button>
                    </form>
                </div>
                <div className="signup-side-image">
                    <h1>WELCOME CANDIDATE!</h1>
                    <p>
                        <span>Join The Community Of Detectives And Officers</span>
                        <span>Start By Registering Here</span>
                    </p>
                    <Link to="/signin" >Already Have An Account? Register</Link>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;