import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import UniversalButton from "./UniversalButton";
import "../style.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  function handleSignup() {
    if (!firstname || !lastname || !username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        return updateProfile(userCredential.user, {
          displayName: `${firstname} ${lastname}`,
        });
      })
      .then(() => {
        alert("Signup successful! You can now log in.");
        navigate("/login");
      })
      .catch((err) => {
        setError(err.message);
        console.error("Signup error:", err);
      });
  }

  return (
    <div className="form-container">
      <h1>Welcome</h1>
      <p>Create your Account</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Enter your first name"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
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
            onChange={(event) => setLastname(event.target.value)}
          />
        </div>
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
            placeholder="Enter a password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
