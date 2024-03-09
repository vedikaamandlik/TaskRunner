import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const form = useRef(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic form validation
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }
  
    if (!formData.email.trim()) {
      alert('Please enter your email');
      return;
    }
  
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    if (!formData.message.trim()) {
      alert('Please enter your message');
      return;
    }
    
    sendEmail();
  };
  
  const sendEmail = () => {
    emailjs
      .sendForm('service_10bwm5n', 'template_zvatqkg', form.current, {
        publicKey: 'WQMFz2ZC5XwHVf6W3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-us-container" style={{height:'100vh'}}>
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
