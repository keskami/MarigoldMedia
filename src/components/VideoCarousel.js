import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './VideoCarousel.css'; // Create and customize your CSS file

const videos = [
    {
      src: 'https://storage.googleapis.com/marigold_videos/FIRST%20IMPRESSION%20-%20Cinematography%20Reel.mp4', // Replace YOUR_VIDEO_ID with your actual YouTube video ID
      caption: <text>Director <br /> <span className='dir-name'>Pablo Villa</span></text>
    },
    {
      src: 'https://storage.googleapis.com/marigold_videos/BRANDS%20-%20Coca%20Cola%20Spec%20Ad%20(1).mp4', // Replace YOUR_VIDEO_ID with your actual YouTube video ID
      caption: <text>Director <br /> <span className='dir-name'>Lars Petersdorff</span></text>
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
          <div key={index} className="video-slide">
            <video
              src={video.src}
              autoPlay
              muted
              loop
              controls={false}
              style={{ width: '100%', height: '100vh' }}
              className="video-wrapper"
            ></video>
            <div className="caption">{video.caption}</div>
          </div>
        ))}
      </Slider>
      </div>
    );
  }
  
  export default VideoCarousel;
  