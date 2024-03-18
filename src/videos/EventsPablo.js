import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Page.css'; // Your CSS file for styling

const videos = [
  {
    id: 1,
    src: 'https://geo.dailymotion.com/player/xrs7e.html?video=x8upmew',
    description1: 'The "Elevate! Professional Development Conference" for pre-K through 2nd-grade teachers is a visual ode to the passion and dedication of early childhood educators, captured through the innovative use of drone shots and intimate videography. As teachers gather, eager to enrich their skills and knowledge for the benefit of their young students, the camera takes flight, weaving through the spaces of shared learning and collaboration. These aerial views offer a unique perspective on the vibrant community of educators, their collective energy magnified by the grandeur of the conference setting. Transitioning from the expansive to the personal, the videography shifts to ground level, focusing on the animated faces of teachers as they engage in workshops, listen intently to keynote speakers, and share insights with peers.',
    description2: "Directed with a keen understanding of the event’s heart and soul, the footage captures the essence of what it means to be at the forefront of shaping young minds. Each frame is a testament to the conference's role as a crucible of innovation and inspiration, where educators are both teachers and lifelong learners. The use of drone technology not only highlights the scale of the event but also symbolizes the overarching vision of the conference—to elevate the teaching profession to new heights. Through this blend of sweeping aerial shots and close-up interactions, the \"Elevate! Professional Development Conference\" emerges as a pivotal gathering, empowering teachers of the youngest learners with the tools, knowledge, and network to make a lasting impact in the world of early childhood education.",
    header: 'Elevate! Professional Development Conference Recap' // Example header text
  },
  {
    id: 2,
    src: 'https://geo.dailymotion.com/player/xrs7e.html?video=x8upmey',
    description1: "The annual fundraiser hosted by the Boilermaker Alliance, in collaboration with the Purdue Basketball Team, emerges as an eloquent evening dedicated to philanthropy, encapsulated through the art of refined videography. This prestigious event gathers adults from various walks of life, united by a shared commitment to support charitable organizations through the strategic alliance of Purdue's name, image, and likeness with its student-athletes. The camera moves gracefully through the venue, capturing the elegance of the evening and the profound interactions that unfold, underscoring the event's dual purpose: to celebrate and to contribute.",
    description2: "With a narrative driven by the intention to illuminate the importance of the Boilermaker Alliance's mission, the director skillfully highlights the moments that symbolize the event's success and impact. From the warmth of the attendees mingling to the impassioned speeches that resonate with the audience, each shot is a testament to the collective effort to raise funds and awareness for the chosen causes. The presence of the Purdue Basketball Team adds a unique dimension, showcasing the athletes not just for their prowess on the court but as pivotal figures in this charitable endeavor, embodying the spirit of giving back that defines the Boilermaker community. Through this elegant fusion of sports, philanthropy, and community, the annual fundraiser stands out as a beacon of hope and generosity.",
    header: 'Bigger than Basketball' // Example header text
  },
];

const EventsPablo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const settings = {
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: false,
    cssEase: "linear",
    afterChange: index => setCurrentVideoIndex(index), // Update current video index on slide change
  };

  return (
    <div className="brandsPabloPage">
      <div className='logo-container'>
        <Link to="/">
          <img src="https://i.ibb.co/T1mjtcK/o-5.png" alt="Back" className="logo2" />
        </Link>
      </div>
      <div className="videoCarouselWrapper">
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="video-slide">
              <iframe
                src={video.src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Video ${index}`}
                style={{ width: '70%', height: '70vh' }}
              ></iframe>
            </div>
          ))}
        </Slider>
        <h1 className="videoHeader">{videos[currentVideoIndex].header}</h1> {/* Dynamic header based on the current video */}
      </div>
      <div className="videoDescriptionContainer">
        <div className="videoDescription">
          {videos[currentVideoIndex].description1} <br></br> <br></br>
          {videos[currentVideoIndex].description2}
        </div>
      </div>
    </div>
  );
};

export default EventsPablo;
