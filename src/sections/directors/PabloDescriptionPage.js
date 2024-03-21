// PabloDescriptionPage.js
import React from 'react';
import './DirectorDescriptionPage.css'; // Using the same CSS file as for Lars' page

const PabloDescriptionPage = () => (
  <div className="description-page-container">
    <div className="director-column">
      <img src="/path-to-pablo-image.jpg" alt="Pablo Villa" className="director-image"/>
      <p className="director-description">[Pablo's description here. Add the actual content you'd like to display.]</p>
    </div>
    <div className="director-column">
      <img src="/path-to-pablo-work.jpg" alt="Work by Pablo Villa" className="director-image"/>
      <p className="director-description">[Description of Pablo's work here. Add the actual content you'd like to display.]</p>
    </div>
  </div>
);

export default PabloDescriptionPage;
