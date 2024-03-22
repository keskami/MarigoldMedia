// PabloDescriptionPage.js
import React from 'react';
import './DirectorDescriptionPage.css'; // Using the same CSS file as for Lars' page

const PabloDescriptionPage = () => (
    <div className="description-page-container">
        <div className="director-column1" id="one">
            <div className="director-description">
                <p id="head">Equipment</p>
                <p className="body" id="bodyequip">
                  <div>
                    <span className='main'>Main Camera:</span>
                    <p>RED Komodo-X Super 35</p>
                  </div>
                
                  <div>
                    <span className='main'>​Remote, Aerial, & "B" Cameras:</span>
                    <p>Blackmagic Pocket Cinema Camera 4K</p>
                    <p>Blackmagic Micro Cinema Camera</p>
                    <p>Canon 1DX Mark II</p>
                 </div>

                  <div>
                    <span className='main'>Main Glass:</span>
                    <p style={{textDecoration:'underline'}}>DZO Cinema Lenses</p>
                    <p>Range covered: 20-125</p>
                    <p style={{textDecoration:'underline'}}>Sigma Lenses</p>
                    <p>Range covered: 18-500</p>
                  </div>

                  <div>
                    <span className='main'>FPV Drone:</span>
                    <p>*Lumenier FPV Cinema Whoop</p>
                  </div>
                </p>
              </div>
          </div>
        <div className="director-column2" id="two">
            <img src="https://i.ibb.co/K55WGfQ/pablocamera.webp" alt="Pablo Villa" className="director-image" />
        </div>
    </div>
);

export default PabloDescriptionPage;
