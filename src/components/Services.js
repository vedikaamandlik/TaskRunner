import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = ({ serviceData }) => {
  return (
    <div className="services-container">
      <h1>Available Services</h1>

      {serviceData.map((category, index) => (
        <div key={index}>
          <h2>
            <Link to={`/services/${category.category}`}>{category.category}</Link>
          </h2>
          {category.image && (
            <img src={category.image} alt={`${category.category} Image`} style={{ maxWidth: '100%', height: 'auto' }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Services;
