import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Category.css';
import firebase from '../Firebase';

const Category = ({ serviceData }) => {
  const { category } = useParams();
  const navigate = useNavigate();

  const selectedCategory = serviceData.find((cat) => cat.category === category);

  if (!selectedCategory) {
    return <div>Category not found</div>;
  }

  const handleBookNowClick = (serviceName) => {
    if (firebase.auth().currentUser != null) {
      navigate(`/booking/${serviceName}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="category-container">
      <h1>{selectedCategory.category} Services</h1>
      {selectedCategory.services.map((service, index) => (
        <div key={index} className="service-item">
          <h3>{service.name}</h3>
          <p>
            Description: {service.description}
          </p>
          <button className="category-button" onClick={() => handleBookNowClick(service.name)}>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default Category;
