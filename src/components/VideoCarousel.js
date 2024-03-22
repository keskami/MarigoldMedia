import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './VideoCarousel.css'; // Create and customize your CSS file

const videos = [
  {
    src: 'https://storage.googleapis.com/marigold_videos/FIRST%20IMPRESSION%20-%20Cinematography%20Reel.mp4', // Replace YOUR_VIDEO_ID with your actual YouTube video ID
  },
  {
    src: 'https://storage.googleapis.com/marigold_videos/Natalie%20%26%20Dylan%20Wedding%20Film.mp4', // Replace YOUR_VIDEO_ID with your actual YouTube video ID
  }
  // You can still include other video objects here
];

const VideoCarousel = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinite: false
  };


  return (
    <div className="video-carousel">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <video
            key={index}
            src={video.src}
            autoPlay
            muted
            loop
            controls={false}
            style={{ width: '100%', height: '100vh' }}
            className="video-wrapper"
          ></video>

        ))}
      </Slider>
    </div>
  );
}

export default VideoCarousel;
