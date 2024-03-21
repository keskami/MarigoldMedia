import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Page.css'; // Your CSS file for styling

const videos = [
  {
    id: 1,
    src: 'https://geo.dailymotion.com/player/xrs7e.html?video=x8v6guw',
    description1: "The wedding trailer opens with the gentle dawn light spilling over a picturesque venue, setting the stage for the day when two hearts become one. As the first notes of a soft, melodic tune begin to play, viewers are swept into a whirlwind of preparation and anticipation. The camera dances through scenes of delicate floral arrangements, the bride's exquisite gown hanging gracefully, and the groom's attire laid out with precision. Each shot is a brushstroke in the painting of a day filled with love, promise, and meticulous attention to detail. The laughter and chatter of the bridal party blend seamlessly with the music, creating a backdrop of warmth and excitement.",
    description2: "As the day unfolds, the trailer captures the magic of fleeting moments—the exchange of nervous glances, the gentle holding of hands, and the joyous embraces of family and friends. The culmination of the trailer is a breathtaking sequence of the couple's first look, where time seems to stand still, and all that exists is their shared gaze, full of love and a lifetime of promises. This moment, beautifully encapsulated and set against the backdrop of an evocative soundtrack, symbolizes the essence of the wedding day. The trailer concludes with a teaser of the ceremony and reception, hinting at the laughter, tears, and dance that define the celebration of love, leaving viewers eagerly anticipating the full story of this unforgettable day.",
    header: 'Trailer for full wedding video' // Example header text
  },
  {
    id: 2,
    src: 'https://geo.dailymotion.com/player/xrs7e.html?video=x8uuqvs',
    description1: "The wedding trailer opens with the gentle dawn light spilling over a picturesque venue, setting the stage for the day when two hearts become one. As the first notes of a soft, melodic tune begin to play, viewers are swept into a whirlwind of preparation and anticipation. The camera dances through scenes of delicate floral arrangements, the bride's exquisite gown hanging gracefully, and the groom's attire laid out with precision. Each shot is a brushstroke in the painting of a day filled with love, promise, and meticulous attention to detail. The laughter and chatter of the bridal party blend seamlessly with the music, creating a backdrop of warmth and excitement.",
    description2: "As the day unfolds, the trailer captures the magic of fleeting moments—the exchange of nervous glances, the gentle holding of hands, and the joyous embraces of family and friends. The culmination of the trailer is a breathtaking sequence of the couple's first look, where time seems to stand still, and all that exists is their shared gaze, full of love and a lifetime of promises. This moment, beautifully encapsulated and set against the backdrop of an evocative soundtrack, symbolizes the essence of the wedding day. The trailer concludes with a teaser of the ceremony and reception, hinting at the laughter, tears, and dance that define the celebration of love, leaving viewers eagerly anticipating the full story of this unforgettable day.",
    header: 'Trailer for full wedding video' // Example header text
  },
  // Additional videos can be added here
];

const WeddingVideos = () => {
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

export default WeddingVideos;
