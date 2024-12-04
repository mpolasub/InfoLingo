import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import UniversalButton from "./UniversalButton";
import "../style.css";

function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      alert(`Logged in as ${user.displayName}`);
      navigate("/homepage"); // Redirect to homepage
    } catch (err) {
      setError("Failed to log in with Google. Please try again.");
      console.error("Google login error:", err);
    }
  };

  return (
    <div>
      <div className="form-container">
        <h1>Log In</h1>
        <p>Choose a login method:</p>
        
        {/* Google Login Button */}
        <UniversalButton
          label="Log in with Google"
          variant="dark"
          onClick={handleGoogleLogin}
        />

        <p className="signup-prompt">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
