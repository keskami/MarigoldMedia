// PabloDescriptionPage.js
import React from 'react';
import './DirectorDescriptionPage.css'; // Using the same CSS file as for Lars' page

const PabloDescriptionPage = () => (
    <div className="description-page-container">
        <div className="director-column1" id="one">
            <div className="director-description">
                <p id="head">About Pablo</p>
                <p className="body">Pablo Villa, with a childhood fascination for remote control airplanes, ventured into drones and aerial cinematography. He mastered drone racing and content creation, progressing into general cinematography. FAA-licensed for commercial drone use, Pablo has worked with over 100 clients on projects like wedding films, corporate ads, and real estate tours. He prioritizes enhancing his craft while delivering high-quality digital content using top-tier editing software and camera equipment.</p>
            </div>
        </div>
        <div className="director-column2" id="two">
            <img src="https://storage.googleapis.com/marigold_videos/Pablo%203D%20Wedding.gif" alt="Pablo Villa" className="director-image" />
        </div>
    </div>
);

export default PabloDescriptionPage;
