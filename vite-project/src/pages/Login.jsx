import React, { useState } from "react";
import { Link } from "react-router-dom";
import UniversalButton from "../components/UniversalButton";
import "../style.css";

function Login({ onLogin = (username) => alert(`Logged in as ${username}`) }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    onLogin(username); 
  };

  return (
    <div>
      <div className="form-container">
        <h1>Log In</h1>
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
            label="Enter"
            variant="dark"
            onClick={handleLogin}
          />
        </form>
        <p className="signup-prompt">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
