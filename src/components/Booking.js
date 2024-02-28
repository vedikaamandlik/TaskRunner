import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Booking.css';

const Booking = ({ serviceData }) => {
  const { serviceName } = useParams();
  const selectedService = serviceData
    .flatMap(category => category.services)
    .find(service => service.name === serviceName);

  const [formData, setFormData] = useState(
    // Initialize form fields based on bookingForm
    selectedService
      ? selectedService.bookingForm.reduce((initialData, field) => {
          initialData[field.name] = '';
          return initialData;
        }, {})
      : {}
  );

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the field on change
    validateField(name, value);
  };

  const validateField = (name, value) => {
    // Add strict validation logic based on specific criteria
    let error = '';

    switch (name) {
      case 'email':
        // Validate email format strictly
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
          error = 'Invalid email format';
        }
        break;
      // Add more cases for other fields with strict validation
      default:
        break;
    }

    // Update errors state
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    validateAllFields();

    // Check if there are no errors
    if (Object.values(errors).every((error) => !error)) {
      // Add logic to handle form submission (e.g., booking request)
      console.log('Form submitted:', formData);
      // You can add your booking logic here
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  const validateAllFields = () => {
    // Validate all fields and update errors state
    Object.keys(formData).forEach((name) => {
      validateField(name, formData[name]);
    });
  };

  return (
    <div>
      <h1>Book {serviceName}</h1>
      <form onSubmit={handleFormSubmit}>
        {selectedService &&
          selectedService.bookingForm.map((field, index) => (
            <div key={index}>
              <label>
                {field.label}:
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  required={field.required}
                />
              </label>
              {errors[field.name] && (
                <span className="error-message">{errors[field.name]}</span>
              )}
              <br />
            </div>
          ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Booking;
