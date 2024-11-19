import React from "react";
import { Link } from "react-router-dom";
import UniversalButton from "../components/UniversalButton";
import "../style.css";

function Login() {
  const handleLogin = () => {
    alert("Login button clicked!");
  };

  return (
    <div>
      <div className="form-container">
        <h1>Log In</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
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
