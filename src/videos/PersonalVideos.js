import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Page.css'; // Your CSS file for styling

const videos = [
  {
    id: 1,
    src: 'https://storage.googleapis.com/marigold_videos/PERSONAL%20-%20Travel%20Project%20(West%20Baden%20Springs)%20(1)%20(1).mp4',
    director: "Director: Pablo Villa",
    description1: "In this vibrant and jazzy edit, the director captures the essence of a trip to the West Baden Springs Hotel in French Lick, Indiana, a place as rich in history as it is seemingly out of place in its rural surroundings. Through careful selection of shots, the director brings to life the hotel's fascinating past, with a particular focus on its stunning dome architecture and the statues that grace its interiors. The choice of \"Take Five\" as the background score adds a layer of nostalgic elegance to the video, a decision inspired by the moment the song filled the hotel's dome, perfectly encapsulating the ambiance the director aimed to convey. Beyond the architectural marvels, the video intimately portrays the personalities of the friends who were part of the journey, ensuring their experiences and characters shine through, thus creating a narrative that's as much about the camaraderie as it is about the location itself.",
    header: 'Travel Project (West Baden Springs)' // Example header text
  },
  // Additional videos can be added here
];

const PersonalVideos = () => {
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
          <img src="https://i.ibb.co/XD4kJmq/Untitled-design-64.png" alt="Back" className="logo2" />
        </Link>
      </div>
      <div className="videoCarouselWrapper">
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="video-slide">
              <video
                src={video.src}
                loop
                controls={true}
                style={{ width: '70%', height: '65vh' }}
                className="video-wrapper1"
              ></video>
            </div>
          ))}
        </Slider>
        <h1 className="videoHeader">{videos[currentVideoIndex].header}</h1> {/* Dynamic header based on the current video */}
      </div>
      <div className="videoDescriptionContainer">
        <div className="videoDescription">
          <span className='video-director-name'>{videos[currentVideoIndex].director}</span> <br></br>
          {videos[currentVideoIndex].description1} <br></br> <br></br>
          {videos[currentVideoIndex].description2}
        </div>
      </div>
    </div>
  );
};

export default PersonalVideos;
