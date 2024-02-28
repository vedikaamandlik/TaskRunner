import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Category.css';
import firebase from '../Firebase';

const Category = ({ serviceData }) => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Find the selected category from the service data
  const selectedCategory = serviceData.find((cat) => cat.category === category);

  if (!selectedCategory) {
    return <div>Category not found</div>;
  }

  const handleBookNowClick = (serviceName) => {
    if (firebase.auth().currentUser != null) {
      // User is logged in, navigate to the booking page with the selected service name
      navigate(`/booking/${serviceName}`);
    } else {
      // User is not logged in, redirect to the login page
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
            {/* Access the description from the service object */}
            Description: {service.description}
          </p>
          <button onClick={() => handleBookNowClick(service.name)}>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default Category;
