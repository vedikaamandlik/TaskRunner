// ForgotPassword.js
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const emailRef = useRef(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    // Reset any previous messages or errors
    setError(null);
    setMessage(null);

    try {
      const email = emailRef.current.value;

      // Send a password reset email using Firebase Auth
      await firebase.auth().sendPasswordResetEmail(email);

      setMessage('Password reset email sent. Check your inbox!');
    } catch (error) {
      setError('Error sending password reset email. Please try again.');
      console.error('Forgot Password Error:', error);
    }
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form">
        <h2>Forgot Password</h2>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" ref={emailRef} placeholder="Enter your email" />
        </div>
        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}
        <button type="submit" onClick={handleForgotPassword}>Reset Password</button>
        <div className="back-to-login">
          <Link to="/login">Back to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
