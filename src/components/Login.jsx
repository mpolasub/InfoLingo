import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import UniversalButton from "./UniversalButton";
import "../style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  // this function is not used but it is being preserved for potential future use
  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        alert(`Logged in as ${user.displayName}`);
        navigate("/homepage");
      })
      .catch((err) => {
        setError("Failed to log in with Google. Please try again.");
        console.error("Google login error:", err);
      });
  }

  function handleEmailPasswordLogin() {
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        alert(`Logged in as ${userCredential.user.email}`);
        navigate("/homepage");
      })
      .catch((err) => {
        setError("Invalid email or password. Please try again.");
        console.error("Login error:", err);
      });
  }

  return (
    <div className="form-container">
      <h1>Log In</h1>
      <div className="form-group">
        <label htmlFor="username">Email</label>
        <input
          type="email"
          id="username"
          name="username"
          placeholder="Enter your email"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="input-field" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="input-field" 
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <UniversalButton
        label="Log In with Email"
        variant="dark"
        onClick={handleEmailPasswordLogin}
      />
      {/* 
      Same reasoning as comment above
      <UniversalButton
        label="Log In with Google"
        variant="dark"
        onClick={handleGoogleLogin}
      /> */}
      <p className="signup-prompt">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
