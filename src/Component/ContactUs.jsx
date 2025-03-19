import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

  // Check if user is authenticated (token exists)
  const token = localStorage.getItem('token');
  if (!token) {
    // alert('Access Denied! Please login to access Contact Us.');
    navigate('/');
    return null;
  }
  

  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};

export default ContactUs;
