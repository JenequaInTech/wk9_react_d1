// Resume.jsx

import React, { useState } from 'react';

function Resume() {
  // State for Contact Me form fields
  const [contactFormData, setContactFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: ''
  });

  // Function to handle Contact Me form field changes
  const handleContactChange = (e) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle Contact Me form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle Contact Me form submission logic
  };

  // State for Feedback form fields
  const [feedbackFormData, setFeedbackFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    message: ''
  });

  // Function to handle Feedback form field changes
  const handleFeedbackChange = (e) => {
    setFeedbackFormData({
      ...feedbackFormData,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle Feedback form submission
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Handle Feedback form submission logic
  };

  return (
    <div>
      <h2>Resume & Contact Information</h2>
      <p>Contact Phone: 504-313-0669</p>
      <p>Email: Jenequaprofessional@gmail.com</p>
      <p>You can download my resume <a href="Resume1.pdf" download>here</a>.</p>
      
      <form onSubmit={handleContactSubmit}>
        {/* Contact Me form fields */}
      </form>

      <form onSubmit={handleFeedbackSubmit}>
        {/* Feedback form fields */}
      </form>
    </div>
  );
}

export default Resume;
