import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../Firebase';
import './Login.css';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset any previous error
    setError(null);

    // Validate input fields
    if (!emailRef.current.value) {
      setError('Email is required.');
      return;
    }

    if (!passwordRef.current.value) {
      setError('Password is required.');
      return;
    }

    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      // Sign in the user using Firebase Auth
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      // Success, user is logged in.
      console.log('User logged in successfully!', userCredential.user);

      // Redirect the user to the home page after successful login
      navigate('/');
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/invalid-email':
          setError('Invalid email or user not found.');
          break;
        case 'auth/wrong-password':
          setError('Invalid password.');
          break;
        default:
          setError('Login failed. Please try again later.');
          break;
      }
      console.error('Login Error:', error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Log In</h2>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" ref={emailRef} placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" ref={passwordRef} placeholder="Enter your password" />
          <div className="forgot-password-link">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" onClick={handleLogin}>Log In</button>
      <div className="signup-link">
        Don't have an account? <Link to="/signup">Sign Up Now!</Link>
      </div>
      </form>
    </div>
  );
};

export default Login;
