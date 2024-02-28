// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import 'firebase/auth';
import firebase, { auth } from '../Firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password, navigate, serviceName) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Additional logic after successful login

      // Redirect to the booking page if a serviceName is provided
      if (serviceName) {
        navigate(`/booking/${serviceName}`);
      } else {
        // Redirect to the home page or any other page you desire
        navigate('/');
      }
    } catch (error) {
      // Handle login errors
      console.error('Login Error:', error);
    }
  };

  const signUp = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Additional logic after successful sign-up
    } catch (error) {
      // Handle sign-up errors
      console.error('Sign-up Error:', error);
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
      // Additional logic after successful logout
    } catch (error) {
      // Handle logout errors
      console.error('Logout Error:', error);
    }
  };

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    login,
    signUp,
    logout,
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
