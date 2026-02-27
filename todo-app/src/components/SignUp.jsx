import React, { useState } from "react";
import "./SignUp.css";

function SignUp() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data);
      alert("Account Created Successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-title">Create Account</h2>

        <form className="signup-form" onSubmit={handleSubmit}>
          
          <input
            className="signup-input"
            type="text"
            name="username"
            placeholder="Full Name"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            className="signup-input"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className="signup-input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button className="signup-button" type="submit">
            Create Account
          </button>

        </form>
      </div>
    </div>
  );
}

export default SignUp;