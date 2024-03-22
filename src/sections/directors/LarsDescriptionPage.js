// PabloDescriptionPage.js
import React from 'react';
import './DirectorDescriptionPage.css'; // Using the same CSS file as for Lars' page

const LarsDescriptionPage = () => (
    <div className="description-page-container">
        <div className="director-column1" id="one">
            <div className="director-description">
                <p id="head">About Lars</p>
                <p className="body">Lars Petersdorff, a distinguished filmmaker and photographer from Chicago, is celebrated for his creativity, passion, and exceptional talent. His dedication to his craft is matched by his enjoyment in sharing it with others. Lars sets himself apart through his ability to work closely with clients, transforming their visions into captivating visual stories. His commitment to collaboration underpins his success, as he consistently seeks to enhance his skills. By delivering outstanding digital content with cutting-edge editing and camera technology, Lars captures the essence of each narrative with unparalleled precision and flair.</p>
            </div>
        </div>
        <div className="director-column2" id="two">
            <img src="https://i.ibb.co/chFF4Z6/A7409821.jpg" alt="Pablo Villa" className="director-image" />
        </div>
    </div>
);

export default LarsDescriptionPage;
