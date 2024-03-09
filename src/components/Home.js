import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  const navigate = useNavigate();

  const bookNowClicked = () => {
    navigate('/services');
  }

  return (
    <div className="home-container">
      <h1>Welcome to TaskRunner!</h1>
      <h3>Hire someone else to run your errands</h3>
      <p>"Welcome to TaskRunner – Your Gateway to Effortless Living! <br></br>
      We understand the demands of your busy life, and that's why we've crafted a platform where your daily tasks are seamlessly managed. <br></br>
      From errands to special requests, TaskRunner connects you with reliable helpers, allowing you to reclaim valuable time and reduce stress. <br></br>
      Whether you're a professional juggling a hectic schedule or someone seeking convenience, our mission is to simplify your life, one task at a time.<br></br> 
      Explore the possibilities, delegate with ease, and embrace a lifestyle where your to-do list becomes our expertise. Start streamlining your day today!"</p>

      <button className="home-button" onClick={bookNowClicked}>Book Tasks Now!</button>
    </div>
  );
};

export default Home;

