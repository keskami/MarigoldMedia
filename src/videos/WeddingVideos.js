import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Page.css'; // Your CSS file for styling

const videos = [
  {
    id: 1,
    src: 'https://storage.googleapis.com/marigold_videos/natalie.mp4',
    director: "Director: Lars Petersdorff",
    description1: "In the full wedding film featuring Natalie and Dylan, the narrative begins with the first light of dawn, casting a serene glow over the venue that seems to whisper promises of the love-filled day ahead. The film, a harmonious blend of cinematic shots and heartfelt moments, captures the essence of their journey to the altar. As the soft melody of a love song gently rises, viewers are invited into the intimate world of Natalie and Dylan, witnessing the delicate lace of Natalie’s dress, the careful preparation of Dylan’s suit, and the joyful anticipation of friends and family coming together. Each scene is carefully woven together, creating a tapestry of memories that celebrates the beauty of commitment and the warmth of two families uniting.",
    description2: "As the film progresses, the focus shifts to the heartfelt vows exchanged under a canopy of flowers, the couple's eyes shimmering with emotion and promise. The camera captures the subtleties of their expressions, the exchange of rings, and the triumphant walk down the aisle, all set against the stunning backdrop of their chosen venue. The reception unfolds with laughter, dancing, and tears of joy, as speeches and toasts paint a picture of Natalie and Dylan’s love story. The film closes with laughter and dancing, a beautiful ending to their day and the beginning of their forever. This wedding film is not just a visual keepsake but a deeply moving narrative that encapsulates the magic of Natalie and Dylan’s love, promising to evoke memories and emotions for years to come.",
    header: 'Natalie and Dylan Wedding Film' // Example header text
  },
  {
    id: 2,
    src: 'https://storage.googleapis.com/marigold_videos/WEDDINGS%20-%20Trailer%20for%20full%20wedding%20video.mp4',
    director: "Director: Pablo Villa",
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

export default WeddingVideos;
