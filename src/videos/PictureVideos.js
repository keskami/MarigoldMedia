import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Page.css'; // Your CSS file for styling

const videos = [
  {
    id: 1,
    src: 'https://geo.dailymotion.com/player/xrs7e.html?video=x8uunzu',
    description1: "Captured in the immersive depth of a 3D camera photo, a Boiler vintage event comes to life, offering viewers a tangible sense of stepping back in time. The image is rich with detail, from the intricate patterns of the attendees' retro attire to the warm glow of ambient lighting that seems to dance off the polished surfaces of classic decor. Each element in the photo tells a story of nostalgia and celebration, allowing the viewer to explore the scene in a way that feels both intimate and expansive. The 3D effect adds a layer of realism, making the textures and expressions all the more vivid, as if the laughter and music of the event could almost be heard. This photo is not just a snapshot; it's an invitation to experience the essence of Boiler spirit and tradition, preserved in the magic of three-dimensional photography.",
    header: '3D Camera Boiler Vintage' // Example header text
  },
  {
    id: 2,
    src: 'https://geo.dailymotion.com/player/xrs7e.html?video=x8uuof8',
    description1: "In the timeless elegance of black and white, a 3D camera photo captures a wedding scene with a depth that draws the viewer into the heart of the moment. The absence of color enhances the emotional resonance of the image, focusing attention on the intricate textures of the bride's gown, the delicate patterns of the floral arrangements, and the heartfelt expressions of the guests. This monochromatic masterpiece transforms the wedding into a scene from a classic film, where light and shadow play across the faces and settings, adding drama and a sense of nostalgia. The 3D effect intensifies this connection, offering a tangible sense of being within the moment, enveloped in the joy and solemnity of the occasion. This photo is not just a memory but an artful invitation to experience the timeless beauty and emotion of the day, preserved in the striking clarity and depth of black and white.",
    header: '3D Camera Wedding' // Example header text
  },
  // Additional videos can be added here
];

const PictureVideos = () => {
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

export default PictureVideos;
