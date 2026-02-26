import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    /* The Wrapper: This is the invisible box that fills the screen */
    <div className="signup-page">
      
      {/* The Container: This is your actual form box */}
      <div className="signup-container">
        <h2 className="signup-title">Create Account</h2>
        <form className="signup-form">
          <input className="signup-input" type="text" placeholder="Full Name" />
          <input className="signup-input" type="email" placeholder="Email" />
          <input className="signup-input" type="password" placeholder="Password" />
          <input className="signup-input" type="password" placeholder="Confirm Password" />
          <button className="signup-button" type="submit">Create Account</button>
        </form>
      </div>

    </div>
  );
}

export default SignUp;