import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './VideoCarousel.css'; // Create and customize your CSS file

const videos = [
  {
    src: 'https://storage.googleapis.com/marigold_videos/FIRST%20IMPRESSION%20-%20Cinematography%20Reel.mp4',
    caption: { line1: "Pablo Villa", line2: "First Impression" }
  },
  {
    src: 'https://storage.googleapis.com/marigold_videos/Natalie%20%26%20Dylan%20Wedding%20Film.mp4',
    caption: { line1: "Lars Petersdorff", line2: "Wedding Day" }
  }
  // Add more video objects with captions as needed
];


const VideoCarousel = () => {
  const [sliderHeight, setSliderHeight] = useState('56.25vw'); // Default for 16:9 videos

  useEffect(() => {
    const adjustSliderHeight = () => {
      // Assume a 16:9 aspect ratio; adjust as necessary
      const aspectRatio = 9 / 16;
      const sliderWidth = document.querySelector('.slick-slider').offsetWidth;
      const newHeight = sliderWidth * aspectRatio;
      setSliderHeight(`${newHeight}px`);
    };

    window.addEventListener('resize', adjustSliderHeight);
    adjustSliderHeight(); // Initial adjust

    return () => window.removeEventListener('resize', adjustSliderHeight);
  }, []);
  const settings = {
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinite: false,
  };


  return (
    <div className="video-carousel1" style={{ height: sliderHeight }}>
      <Slider {...settings} className="custom">
        {videos.map((video, index) => (
          <div className="video-slide1" key={index}>
            <div className="video-wrapper1">
              <video
                src={video.src}
                autoPlay
                muted
                loop
                controls={false}
                style={{ width: '100%', height: '100vh' }}
                className="video-featured"
              ></video>
            </div>
            <div className="video-caption">
              <p className='caption-title'>{video.caption.line1}</p>
              <p className='caption-body'>{video.caption.line2}</p>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
}

export default VideoCarousel;
