// LarsDescriptionPage.js
import React from 'react';
import './DirectorDescriptionPage.css'; // This CSS file will be shared between director pages

const LarsDescriptionPage = () => (
  <div className="description-page-container">
    <div className="director-column">
      <img src="/path-to-lars-image.jpg" alt="Lars Petersdorff" className="director-image"/>
      <p className="director-description">[Lars's description here. Add the actual content you'd like to display.]</p>
    </div>
    <div className="director-column">
      <img src="/path-to-lars-work.jpg" alt="Work by Lars Petersdorff" className="director-image"/>
      <p className="director-description">[Description of Lars's work here. Add the actual content you'd like to display.]</p>
    </div>
  </div>
);

export default LarsDescriptionPage;
