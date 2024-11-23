import React, { useState } from "react";
import { Link } from "react-router-dom";
import UniversalButton from "./UniversalButton"; // Import the universal button
import "../style.css";

function Signup({ onSignup = (userDetails) => alert(`Signed up with username: ${userDetails.username}`) }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!firstname || !lastname || !username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    const userDetails = { firstname, lastname, username, password };
    onSignup(userDetails);
  };

  return (
    <div className="form-container">
      <h1>Welcome</h1>
      <p>Create your Account</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Enter your first name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Enter your last name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter a username"
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
            placeholder="Enter a password"
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
  );
}

export default Signup;
