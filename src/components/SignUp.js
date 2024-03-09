import React, { useRef, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import firebase, { firestore } from '../Firebase';
import './Signup.css';

const SignUp = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const usernameRef = useRef(null);
  const birthDateRef = useRef(null);
  const genderRef = useRef(null);
  const contactRef = useRef(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const validateDateOfBirth = () => {
    const birthDate = new Date(birthDateRef.current.value);
    const currentDate = new Date();
    const minDate = new Date(currentDate);
    minDate.setFullYear(currentDate.getFullYear() - 60); // Minimum age of 60 years
    const maxDate = new Date(currentDate);
    maxDate.setFullYear(currentDate.getFullYear() - 18); // Minimum age of 18 years

    if (birthDate < minDate || birthDate > maxDate) {
      setError('Age should be between 18 and 60 years.');
    } else {
      setError(null);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Reset any previous error and success message
    setError(null);
    setSuccessMessage(null);

    // Validate input fields
    if (!nameRef.current.value) {
      setError('Name is required.');
      return;
    }

    if (!emailRef.current.value) {
      setError('Email is required.');
      return;
    }

    // Email format validation using regex
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailPattern.test(emailRef.current.value)) {
      setError('Invalid email format.');
      return;
    }

    if (!usernameRef.current.value) {
      setError('Username is required.');
      return;
    }

    if (!birthDateRef.current.value) {
      setError('Date of Birth is required.');
      return;
    }

    if (!genderRef.current.value) {
      setError('Gender is required.');
      return;
    }

    if (!passwordRef.current.value) {
      setError('Password is required.');
      return;
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError('Passwords do not match.');
      return;
    }

    // Password strength validation using regex
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordPattern.test(passwordRef.current.value)) {
      setError('Password must be 8 characters or more with an uppercase, a lowercase, and a number.');
      return;
    }
    
    if (!contactRef.current.value) {
      setError('Contact number is required.');
      return;
    }

    const contactNumber = contactRef.current.value.toString(); // Convert to string to get the length
    if (contactNumber.length !== 10) {
      setError('Contact number should be 10 digits.');
      return;
    }

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const username = usernameRef.current.value;
    const birthDate = birthDateRef.current.value;
    const gender = genderRef.current.value;
    const contact = contactRef.current.value;

    const isUsernameTaken = async (username) => {
      // Check if the username already exists in the 'users' collection
      const usernameSnapshot = await firestore.collection('users').where('username', '==', username).get();
    
      return !usernameSnapshot.empty;
    }
    // Create a new user in Firebase Auth
    try {
      const usernameExists = await isUsernameTaken(username);
    
      if (usernameExists) {
        setError('Username is already taken. Please choose another.');
        return;
      }

      // Create a new user in Firebase Auth
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const role = "user"

      await firestore.collection('users').doc(userCredential.user.uid).set({
        name,
        username,
        email,
        birthDate,
        gender,
        contact,
        role,
      });
      
      // Success, user is signed up.
      console.log('User signed up successfully!', userCredential.user);

      // Display success message and redirect to login page
      setSuccessMessage('Sign Up successful, please Log In!');
      setTimeout(() => {
        setSuccessMessage(null);
        navigate('/login'); // Redirect to login page after 2 seconds
      }, 2000);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use by another account.');
      } else {
        setError(error.message);
      }
      console.error('Sign Up Error:', error);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" ref={nameRef} placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" ref={usernameRef} placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" ref={emailRef} placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" ref={passwordRef} placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" ref={confirmPasswordRef} placeholder="Confirm your password" />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" ref={birthDateRef} onChange={validateDateOfBirth} onBlur={validateDateOfBirth} />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input type="number" ref={contactRef} placeholder="00000-00000" />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select ref={genderRef}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <button className="signup-button" type="submit" onClick={handleSignUp}>Sign Up</button>
      
      <div className="login-link">
        Already have an account? <Link to="/login">Log In!</Link>
      </div>
      </form>
    </div>
  );
};

export default SignUp;
