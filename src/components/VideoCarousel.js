import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './VideoCarousel.css'; // Create and customize your CSS file

const videos = [
    {
      type: 'youtube',
      src: 'https://geo.dailymotion.com/player/xroum.html?video=x8tszai', // Replace YOUR_VIDEO_ID with your actual YouTube video ID
      caption: <text>Director <br /> <span className='dir-name'>Pablo Villa</span></text>
    },
    {
      type: 'youtube',
      src: 'https://galleries.vidflow.co/videos/mvo8owxn', // Replace YOUR_VIDEO_ID with your actual YouTube video ID
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
            <iframe
              src={video.src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
              frameborder={0}
              style={{ width: '100%', height: '100vh' }}
              className="video-wrapper"
            >
            </iframe>
            <div className="caption">{video.caption}</div>
          </div>
        ))}
      </Slider>
      </div>
    );
  }
  
  export default VideoCarousel;
  