import React from 'react';
import './ContactUs.css'; // Assuming you have a ContactUs.css for styling

const redirectToPage = () => {
  window.location.href = 'https://o6z7ezn1h3p.typeform.com/to/rEMSnNY0';
};

const ContactUs = () => (
  <div id="contactus" className="section">
    <h1>Book a free call!</h1>
    <button id="button" onClick={redirectToPage}>Book a call</button>
  </div>
);

export default ContactUs;
