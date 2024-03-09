import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import './Booking.css';
import firebase, { firestore } from '../Firebase'; 
import { collection,addDoc } from 'firebase/firestore';
//import RazorpayPaymentButton from './RazorpayPaymentButton';

const Booking = ({ serviceData }) => {
  const { serviceName } = useParams();
  const result = serviceData
  .flatMap(category => category.services.map(service => ({ category: category.name, service })))
  .find(item => item.service.name === serviceName);

  const selectedService = result ? result.service : null;
  const category = result ? result.category : null;

  const [formData, setFormData] = useState(
    selectedService
      ? selectedService.bookingForm.reduce((initialData, field) => {
          initialData[field.name] = '';
          return initialData;
        }, {})
      : {}
  );

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      setUser(authUser);

      if (authUser) {
        const userRef = firestore.collection('users').doc(authUser.uid);
        userRef.get().then((doc) => {
          if (doc.exists) {
            setUser((prevUser) => ({ ...prevUser, username: doc.data().username, uid: doc.data().uid }));
          }
        });
      }
    });

    return () => unsubscribe();
  }, []);
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'email':
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
          error = 'Invalid email format';
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    validateAllFields();

    const timeDue = document.getElementById("timeDue").value;
    const time = new Date().toLocaleString();
    //console.log(uid);

    if (Object.values(errors).every((error) => !error)) {
      try {
        const formattedData = {
          category: "eh",
          service: serviceName,
          //formData: { ...formData },
          timeBooked: time,
          timeDue: timeDue,
          status: "pending",
          userId: user.uid,
          runnerId: " ",
        };
  
        const tasksRef = firestore.collection('tasks');
        await tasksRef.add(formattedData);
        console.log('Form submitted successfully:', formData);
        setSuccessMessage("Form Submitted");
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  const validateAllFields = () => {
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
            <>
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
            </>
          ))}
          <label>Time Due:</label>
            <input type="time" name="timeDue" id="timeDue" required></input>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {/* <RazorpayPaymentButton /> <br></br> */}
        <button className="booking-button" type="submit" >Submit</button>
      </form> 
    </div>
  );
};

export default Booking;