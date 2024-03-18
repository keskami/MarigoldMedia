import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Page.css'; // Your CSS file for styling

const videos = [
  {
    id: 1,
    src: 'https://geo.dailymotion.com/player/xrs7e.html?video=x8uujhe',
    description1: "In the spotlight, the recruit video of a high-level girl soccer athlete mesmerizes with a series of ball tricks and dynamic poses, capturing her passion for the game. Set against a backdrop that puts her squarely in the limelight, the video focuses on her fluid movements and technical prowess, as she effortlessly transitions between sophisticated soccer tricks, each more captivating than the last. The camera zooms in to catch the determination in her eyes and the precision of her footwork, framing her not just as an athlete, but as an artist on the field. Without the need for highlight clips, her command over the ball and the space around her tells a powerful story of potential, dedication, and the sheer love of soccer, inviting viewers to witness the emergence of a soccer prodigy in her element.",
    header: 'High Level Recruit Hype Video' // Example header text
  },
  {
    id: 2,
    src: 'https://geo.dailymotion.com/player/xrs7e.html?video=x8uujha',
    description1: "The NFL Combine quick turnaround recap video strikes a perfect tempo, engaging viewers with a brisk, yet informative narrative that highlights the day's key moments and standout performances. With a dynamic mix of footage, from the precision of passing drills to the agility of the 40-yard dash, the video moves at a pace that reflects the athletes' own determination and focus. Narration effortlessly threads through the sequences, providing context and commentary that enrich the visual experience, making it accessible and engaging for fans eager to catch up on the day's events. ",
    header: 'Quick turnaround day-of recap content' // Example header text
  },
  {
    id: 3,
    src: "https://geo.dailymotion.com/player/xrs7e.html?video=x8uujhc",
    description1: "At the heart of a Purdue baseball practice, the air is alive with the focused intensity of throwing and catching drills, capturing the core elements of teamwork and precision that define the sport. Players seamlessly transition between exercises, their arms tracing arcs of commitment across the field as they hone their throwing accuracy and catching consistency. These drills underscore the meticulous preparation behind each play, emphasizing not just the physical agility required but also the mental acuity to anticipate and react. It's a ballet of coordination and communication, where each throw and catch is a testament to the team's collective effort to sharpen their defensive prowess, ensuring that when game day arrives, their synergy is unbreakable and their execution, flawless.",
    header: 'Quick baseball practice edit' // Example header text
  },
  // Additional videos can be added here
];

const SportsPablo = () => {
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

export default SportsPablo;
