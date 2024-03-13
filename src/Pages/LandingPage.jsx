import React from "react";
import './LandingPage.css';
import {Link} from 'react-router-dom';
import { IoStar } from "react-icons/io5";

const LandingPage = () => {

    return (
        <div className="landing-page-container">
            <div className="body">
                <h1>CLUECRYPT</h1>
                <h3>Welcome</h3>
                <ul>
                    <li>
                        <span><IoStar /></span>
                        <p>Solve Cases Anonymously</p>
                    </li>
                    <li>
                        <span><IoStar /></span>
                        <p>Earn Badges</p>
                    </li>
                    <li>
                        <span><IoStar /></span>
                        <p>Rank Up To Detective</p>
                    </li>
                    <li>
                        <span><IoStar /></span>
                        <p>About Us</p>
                    </li>
                    <li>
                        <span><IoStar /></span>
                        <p>Contact Us</p>
                    </li>
                </ul>
            </div>
            <div className="navbar">
                <ul>
                    <li className="navbar-signin"><Link to="/signin">Sign in</Link></li>
                    <li className="navbar-signup"><Link to="/signup">Sign up</Link></li>
                </ul>
            </div>
            <div className="getstarted">
                <h1><Link to="/signup" className="getstarted-link">Get Started</Link></h1>
            </div>
        </div>
    )
}

export default LandingPage;