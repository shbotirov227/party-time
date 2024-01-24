import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.png";
import SignUpWithGoogleIcon from "../../assets/images/signupWithGoogleIcon.svg";
import SignUpWithFacebookIcon from "../../assets/images/signupWithFacebookIcon.svg";
import SignUpLeftImg from "../../assets/images/signupImg.png";

import "./SignUp.scss";

const SignUp = () => {
	return (
		<div className="SignUp">
			<div className="SignUp-inner container">
				<div className="SignUp-left">
					<Link to="/"><img className="logo" src={Logo} alt="logo" /></Link>
					<h4 className="SignUp-left-title">Getting Started With Party Time Eventick</h4>
					<img className="SignUp-left-img" src={SignUpLeftImg} alt="" />
				</div>

				<div className="SignUp-right">
					<h3 className="SignUp-right-title">Create Account</h3>

					<div className="mediaButtons">
						<Link className="SignUp-right-signupWithBtn" to="/"><img src={SignUpWithGoogleIcon} alt="" /> Signup with Google</Link>
						<Link className="SignUp-right-signupWithBtn" to="/"><img src={SignUpWithFacebookIcon} alt="" /> Signup with Facebook</Link>
					</div>

					<h4 className="or">- OR -</h4>

					
					<input type="text" placeholder="Full Name" />
					<input type="email" name="email" id="email" placeholder="Email" />
					<input type="password" name="password" id="password" placeholder="Password" />
					<Link to="/" className="btn-submit">Create Account</Link>


					<span>Already have an account? <Link to="/">Log In</Link></span>
				</div>
			</div>
		</div>
	)
}

export default SignUp;