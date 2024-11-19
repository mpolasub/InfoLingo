import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Signup() {
  return (
    <div className="page-container">
      <div className="form-container">
        <div className="logo">
        </div>
        <h1>Sign Up</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn-submit">Sign Up</button>
        </form>
        <p className="redirect-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
