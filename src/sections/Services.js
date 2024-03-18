import React from 'react';
import './Services.css'; // Make sure to create this CSS file

const Services = () => {

  const services = [
    {
      header: 'Cinematic Capture',
      description: 'Our lens to your legacy – we start by filming with a blend of artistic vision and technical precision, ensuring every shot is a masterpiece.',
      src: 'https://i.ibb.co/G9L4gcN/Untitled-design-50.png'
    },
    {
      header: 'Story Sculpting',
      description: 'Where raw footage becomes narrative – our editing process weaves visuals and sounds into compelling stories that resonate and engage.',
      src: 'https://i.ibb.co/3hd1dWS/Untitled-design-51.png'
    },
    {
      header: 'Visual Symphony',
      description: 'The finale of finesse – in the production stage, we harmonize all elements to give your video the polish and allure of a cinematic release.',
      src: 'https://i.ibb.co/zQt9J1v/o.png'
    },
  ];

  const benefits = [
    {
      header: 'Uncross Your Fingers',
      description: "We capture diverse angles and collaborate to align our visuals tightly with your brand's unique identity.",
      src: 'https://i.ibb.co/3fzy67t/o-2.png'
    },
    {
      header: 'Affordable Expertise',
      description: "Gain the advantage of expert videography without the overhead of in-house teams or the unpredictability of freelance costs.",
      src: 'https://i.ibb.co/dtMTFJm/o-3.png'
    },
    {
      header: 'Innovative Edge',
      description:  "Stay at the forefront of marketing trends with a team dedicated to implementing what truly works in today's landscape.",
      src: 'https://i.ibb.co/ncD46wV/o-4.png'
    },
  ]

  return (
    <div className="services-section" id='services'>
      <h1>How our world-class team creates masterpieces</h1>
      <div className="feature-boxes">
        {services.map((service, index) => (
          <div key={index} className="feature-box">
            <div id="row">
            <div className="feature-number">{index + 1}</div>
            <h3>{service.header}</h3>
            </div>
            <img src={service.src} alt='feature'/>
            <p id="description">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="core-benefit-boxes">
      {benefits.map((benefit, index) => (
          <div key={index} className="core-benefit-box">
            <img src={benefit.src} alt='feature' className="benefit-icon-placeholder"/>
            <h3>{benefit.header}</h3>
            <p id="description2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
