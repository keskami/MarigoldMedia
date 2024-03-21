// In AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => (
  <div className="about-us" id="aboutus">
    <div className="container">
      <div id="title-row">
        <h3><span id='true'>TRUE</span></h3>
        <div id="text-carousel" className="text-carousel">
          <div>Creative Partners</div>
          <div>Visual Storytellers</div>
          <div>Narrative Crafters</div>
        </div>
      </div>
      <p>From initial concept to final delivery, our team crafts stunning visual content tailored for brands and agencies. Our expertise spans a diverse array of fields, encompassing both videography and photography, ensuring we capture the essence of your message. 
        <br/><br/>Through a collaborative approach, we work closely with our clients, offering our expertise to guide them toward the most effective strategies for their projects. Select from our talented directors to bring your vision to life with precision and creativity.</p>
    </div>
  </div>
);

export default AboutUs;
