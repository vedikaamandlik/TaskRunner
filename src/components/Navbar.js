import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase, { firestore }  from '../Firebase';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      setUser(authUser);

      if (authUser) {
        // Fetch additional user information from Firestore
        const userRef = firestore.collection('users').doc(authUser.uid);
        userRef.get().then((doc) => {
          if (doc.exists) {
            setUser((prevUser) => ({ ...prevUser, username: doc.data().username }));
          }
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        console.log('User logged out successfully!');
        navigate('/login');
      })
      .catch((error) => {
        console.error('Logout Error:', error);
      });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/services">Services</Link>
        <Link to="/services">Services</Link>
      </div>
      <div className='navbar-right'>
        <Link to="/">Home</Link>
        <div className="navbar-auth">
          {user ? (
            // Show logout button when user is logged in
            <>
              <Link to={`/profile/${user.username}`}>{user.username}</Link>
              <Link to={`/runner/${user.username}`}>{user.username}</Link>
              <Link to="/task-runner-registration">Become a Runner</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            // Show login and signup buttons when user is not logged in
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
