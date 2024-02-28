import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = ({ serviceData }) => {
  return (
    <div className="home-container">
      <h1>Welcome to TaskRunner!</h1>
      <h3>Hire someone else to run your errands</h3>

      <div className="home-button-container">

      {serviceData.map((category, index) => (
        <div key={index}>
          <h2>
            <Link to={`/services/${category.category}`}> {category.icon && (
            <img src={category.icon} alt={`${category.category} Image`} />
          )} </Link>
          </h2>
          
        </div>
      ))}

      </div>
    </div>
  );
};

export default Home;

