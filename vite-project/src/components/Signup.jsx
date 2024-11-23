import React, { useState } from "react";
import { Link } from "react-router-dom";
import UniversalButton from "./UniversalButton";
import "../style.css";

function Signup({ onSignup = (userDetails) => alert(`Signed up with username: ${userDetails.username}`) }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    const userDetails = { username, password };
    onSignup(userDetails); 
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <div className="logo">
        
        </div>
        <h1>Sign Up</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <UniversalButton
            label="Sign Up"
            variant="dark"
            onClick={handleSignup}
          />
        </form>
        <p className="redirect-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
