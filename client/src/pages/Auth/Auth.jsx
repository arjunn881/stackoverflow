import React, { useState } from "react";
import "../Auth/Auth.css";
import { AboutAuth } from "./AboutAuth.jsx";

export const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="auth-section">
      {isSignup && <AboutAuth/>}
      <div className="auth-container">
        {!isSignup && (
          <img
            src="https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-icon.svg"
            alt=""
            className="login-logo"
          />
        )}
        <form>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" id="name" name="name" />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" />
          </label>
          <label htmlFor="password">
            <div>
              <h4>Password</h4>
              {!isSignup && <p style={{ color: "#007ac6", fontSize:"13px" }}>Forgot Password</p>}
            </div>
            <input type="password" name="password" />
            {isSignup && (
              <p>
                Password must containt at least 8 <br /> characters!, including
                at least 1 letter and 1<br />
                number...
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Opt-in to receive occasional, <br /> product updates, user
                research invitations,
                <br /> company announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign Up" : "Log in"}
          </button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking "Signup", you are agree to our  
              <span style={{ color: "#007ac6" }}>
                 terms of
                <br /> service
              </span>
              ,<span style={{ color: "#007ac6" }}>privacy policy</span> and
              <span style={{ color: "#007ac6" }}>cookie policy</span>.
            </p>
          )}
        </form>
        <p>
          {isSignup ? "already have an account?" : "Don't have an account?"}

          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};
