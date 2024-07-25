import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faTwitter, faApple, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Loginform.css"; 

const Loginform = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState(""); 
    const [formState, setFormState] = useState('login'); 

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleFlip = (formType) => {
        setFormState(formType);
    };

    return (
        <div className="login-wrapper">
            <div className={`login-container ${formState === 'signup' ? 'flip-left' : formState === 'forgot-password' ? 'flip-right' : ''}`}>
                {formState === 'login' && (
                    <div className="login-form">
                        <h2 className="text-center" style={{ marginTop: "3rem", marginBottom: "3rem" }}>Login</h2>
                        <form id="loginForm" action="/login" method="POST">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>
                                    <input 
                                        value={username} 
                                        onChange={handleUsernameChange} 
                                        type="text" 
                                        className="form-control" 
                                        id="username" 
                                        name="username" 
                                        placeholder="Type your username / email" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faLock} />
                                        </span>
                                    </div>
                                    <input 
                                        value={password} 
                                        onChange={handlePasswordChange} 
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        name="password" 
                                        placeholder="Type your password" 
                                        required 
                                    />
                                </div>
                                <button 
                                    type="button" 
                                    style={{ float: "right" }} 
                                    className="btn btn-link forgot-password" 
                                    onClick={() => handleFlip('forgot-password')}
                                >
                                    Forgot password?
                                </button>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                        </form>
                        <div className="social-login text-center mt-3">
                            <p>Or Log in using</p>
                            <button className="btn btn-outline-secondary facebook rounded-circle mx-1">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </button>
                            <button className="btn btn-outline-secondary google rounded-circle mx-1">
                                <FontAwesomeIcon icon={faGoogle} />
                            </button>
                            <button className="btn btn-outline-secondary twitter rounded-circle mx-1">
                                <FontAwesomeIcon icon={faTwitter} />
                            </button>
                            <button className="btn btn-outline-secondary apple rounded-circle mx-1">
                                <FontAwesomeIcon icon={faApple} />
                            </button>
                            <button className="btn btn-outline-secondary microsoft rounded-circle mx-1">
                                <FontAwesomeIcon icon={faMicrosoft} />
                            </button>
                        </div>
                        <div className="sign-up text-center mt-3">
                            <p>Or Sign Up using</p>
                            <button 
                                type="button" 
                                className="btn btn-link sign-up float-center" 
                                onClick={() => handleFlip('signup')}
                            >
                                SIGN UP
                            </button>
                        </div>
                    </div>
                )}
                {formState === 'signup' && (
                    <div className="sign-up-form">
                        <h2 className="text-center" style={{ marginTop: "3rem", marginBottom: "3rem" }}>Sign Up</h2>
                        <form id="signUpForm" action="/sign-up" method="POST">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>
                                    <input 
                                        value={username} 
                                        onChange={handleUsernameChange} 
                                        type="text" 
                                        className="form-control" 
                                        id="username" 
                                        name="username" 
                                        placeholder="Type your username" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </span>
                                    </div>
                                    <input 
                                        value={email} 
                                        onChange={handleEmailChange} 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        name="email" 
                                        placeholder="Type your email" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faLock} />
                                        </span>
                                    </div>
                                    <input 
                                        value={password} 
                                        onChange={handlePasswordChange} 
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        name="password" 
                                        placeholder="Type your password" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faLock} />
                                        </span>
                                    </div>
                                    <input 
                                        value={confirmPassword} 
                                        onChange={handleConfirmPasswordChange} 
                                        type="password" 
                                        className="form-control" 
                                        id="confirmPassword" 
                                        name="confirmPassword" 
                                        placeholder="Confirm your password" 
                                        required 
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        </form>
                        <div className="social-sign-up text-center mt-3">
                            <p>Or sign up using</p>
                            <button className="btn btn-outline-secondary facebook rounded-circle mx-1">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </button>
                            <button className="btn btn-outline-secondary google rounded-circle mx-1">
                                <FontAwesomeIcon icon={faGoogle} />
                            </button>
                            <button className="btn btn-outline-secondary twitter rounded-circle mx-1">
                                <FontAwesomeIcon icon={faTwitter} />
                            </button>
                            <button className="btn btn-outline-secondary apple rounded-circle mx-1">
                                <FontAwesomeIcon icon={faApple} />
                            </button>
                            <button className="btn btn-outline-secondary microsoft rounded-circle mx-1">
                                <FontAwesomeIcon icon={faMicrosoft} />
                            </button>
                        </div>
                        <div className="sign-in text-center mt-3">
                            <p>Already have an account?</p>
                            <button 
                                type="button" 
                                className="btn btn-link log-in" 
                                onClick={() => handleFlip('login')}
                            >
                                Log In
                            </button>
                        </div>
                    </div>
                )}
                {formState === 'forgot-password' && (
                    <div className="forgot-password-form">
                        <div className="forgot-password-header">
                            <h2 className="text-center" style={{ marginTop: "3rem", marginBottom: "3rem" }}>Forgot Password?</h2>
                        </div>
                        <div className="forgot-password-body">
                            <label htmlFor="email">Please enter your email to receive a recovery password</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                </div>
                                <input 
                                    value={email} 
                                    onChange={handleEmailChange} 
                                    type="text" 
                                    className="form-control" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Type your email" 
                                    required 
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </div>
                        <div className="forgot-password-footer">
                            <button 
                                type="button" 
                                className="btn btn-link" 
                                onClick={() => handleFlip('login')}
                            >
                                Back to Login
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Loginform;
