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

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      alert(`Logged in as ${user.displayName}`);
      navigate("/homepage");
    } catch (err) {
      setError("Failed to log in with Google. Please try again.");
      console.error("Google login error:", err);
    }
  };

  const handleEmailPasswordLogin = async () => {
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      alert(`Logged in as ${userCredential.user.email}`);
      navigate("/homepage");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.error("Login error:", err);
    }
  };

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
          onChange={(e) => setUsername(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <UniversalButton
        label="Log In with Email"
        variant="dark"
        onClick={handleEmailPasswordLogin}
      />
      <UniversalButton
        label="Log In with Google"
        variant="dark"
        onClick={handleGoogleLogin}
      />
      <p className="signup-prompt">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
