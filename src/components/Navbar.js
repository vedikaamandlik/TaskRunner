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
        const userRef = firestore.collection('users').doc(authUser.uid);
        userRef.get().then((doc) => {
          if (doc.exists) {
            setUser((prevUser) => ({ ...prevUser, username: doc.data().username, role: doc.data().role }));
          }
        });
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log("User:", user);
  }, [user]);

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
        <Link to="/"><img className="logo" src="/images/logo-transparent.png" alt="logo"></img></Link>
      </div>
      <div className='navbar-right'>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>  
        <div className="navbar-auth">
          {user ? (
            <>
              {console.log("User role:", user.role)}
              {user.role === "user" &&
                <>
                  <Link to={`/profile/${user.username}`}>{user.username}</Link>
                  <Link to="/task-runner-registration">Become a Runner</Link>
                </>
              }
              {user.role === "runner" &&
                <Link to={`/runner/${user.username}`}>{user.username}</Link>
              }
              {user.username === "vedikaa" &&
                <Link to="/admin">ADMIN</Link>
              }
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
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
