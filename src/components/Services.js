import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = ({ serviceData }) => {
  return (
    <div className="services-container">
      <h3>Hire someone else to run your errands</h3>

      <div className="services-button-container">

      {serviceData.map((category, index) => (
        <div key={index}>
          <h2>
            <p>{category.category}</p>
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

export default Services;
