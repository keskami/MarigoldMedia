import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Page.css'; // Your CSS file for styling

const videos = [
  {
    id: 1,
    src: 'https://geo.dailymotion.com/player/xrs7e.html?video=x8upm7q',
    description1: "In this vibrant and jazzy edit, the director captures the essence of a trip to the West Baden Springs Hotel in French Lick, Indiana, a place as rich in history as it is seemingly out of place in its rural surroundings. Through careful selection of shots, the director brings to life the hotel's fascinating past, with a particular focus on its stunning dome architecture and the statues that grace its interiors. The choice of \"Take Five\" as the background score adds a layer of nostalgic elegance to the video, a decision inspired by the moment the song filled the hotel's dome, perfectly encapsulating the ambiance the director aimed to convey. Beyond the architectural marvels, the video intimately portrays the personalities of the friends who were part of the journey, ensuring their experiences and characters shine through, thus creating a narrative that's as much about the camaraderie as it is about the location itself.",
    header: 'Coca-Cola Commercial' // Example header text
  },
  {
    id: 2,
    src: 'https://geo.dailymotion.com/player/xrs7e.html?video=x8upm7o',
    description1: "In the tranquility of an empty basketball court, the Trifecta Watches promo captures the solitary figure of Mason Gillis immersed in the quiet intensity of the game. Every frame is a juxtaposition of the athlete’s relaxed yet precise movements against the ticking precision of the Trifecta Watch. The watch, elegantly featured on Gillis's wrist, becomes a testament to the brand’s seamless blend of functionality and style. The camera lingers on the details: the hands of the watch sweeping past numbers, the glint of light on its face, the ease with which it displays messages — all emphasizing its role as a companion for both the quiet and the chaotic moments of life.",
    description2: "Directorially, the promo is crafted with a clear intention to evoke a sense of calm power. There is a palpable respect for the game’s quieter side, the solo practice where the only opponent is time itself. This vision is artfully realized through smooth slow-motion sequences, crisp sound design that echoes the solitude of the court, and a deliberate color grading that casts everything in a gentle, amber-tinged light — reflective of Trifecta's brand identity. The watch isn't just a feature; it’s a character that stands for the poise and potential of every second. This production isn't about the spectacle of basketball; it’s a showcase of the sport as a form of personal meditation and the watch as a silent witness to the passage of time.",
    header: 'Trifecta Watches - Basketball Promo' // Example header text
  },
  {
    id: 3,
    src: "https://geo.dailymotion.com/player/xrs7e.html?video=x8upm7k",
    description1: "The Insomnia Cookies Challenge Announcement is a heartwarming sequence that spotlights Abby, the reigning Ultimate Cookie Lover, whose enthusiasm for cookies is as infectious as it is genuine. Throughout the video, we see her immersed in the world of cookies—her eyes light up, her dances around with cookies in her hands, and her voice exudes excitement as she details the rules and prizes of this year's challenge. The camera captures a warm smile and an artful array of cookies in all their sugary glory, highlighting the joy that these baked goods bring.",
    description2: "Behind the scenes, the director's vision is clear: to draw the viewer into the simple pleasure of cookies through Abby's narrative. The focus is on her expressive storytelling, her evident love for the cookies, and the cookies themselves, each shot designed to engage the senses and entice cookie lovers to share their own experiences. It’s a celebration of personal passion and the shared community spirit that Insomnia Cookies fosters. This announcement video is not just a call to action; it's a tribute to the love of cookies, inviting others to join in the challenge and express their fondness for this universal treat.",
    header: 'Insomnia Cookies Challenge Announcement' // Example header text
  },
  {
    id: 4,
    src: "https://geo.dailymotion.com/player/xrs7e.html?video=x8upm7s",
    description1: "The Izod Clothing Promo is an embodiment of relaxed elegance, featuring Mason Gillis not on the basketball court, but on the serene greens of a golf course. The camera captures the quiet focus of Gillis as he takes his swing, the fabric of his Izod attire moving with grace and ease. Each frame is bathed in a warm, inviting color that speaks to the leisurely afternoons under the sun. Close-ups of the clothing reveal the texture and craftsmanship of the fabric, emphasizing the brand's commitment to comfort without sacrificing style.",
    description2: "As Mason Gillis moves across the course, the director's vision of tranquility and poise comes to life. The promo is paced to the rhythm of a leisurely game of golf, with each shot of Mason and the clothing designed to be as aesthetic as they are intentional. This is not a high-energy sports reel; it’s an ode to the leisurely sport and the lifestyle that accompanies it, perfectly complemented by Izod’s stylish, comfortable apparel. It's an invitation to experience the calm and collected side of athleticism, where the game is a backdrop to the story of a man, his attire, and the simple joys of a well-lived day.",
    header: 'Izod Clothing Promo' // Example header text
  },
  {
    id: 5,
    src: "https://geo.dailymotion.com/player/xrs7e.html?video=x8upm7u",
    description1: "In the heart of the city, the Urban Outfitters Promo unfolds as a vibrant testament to street culture and vintage flair, with Mason Gillis at the center of this stylish urban narrative. Roaming through the bustling streets, Mason embodies the essence of the urban explorer, his movements in harmony with the pulsating hip-hop soundtrack that defines the video's rhythm. The focus is on the meticulously selected vintage clothing from Urban Outfitters, each piece resonating with the brand's iconic blend of retro and modern. The camera loves Mason, capturing the fluidity of his motion and the standout details of his attire—be it the texture of a classic bomber jacket or the bold print of a throwback tee—against the vibrant backdrop of city life.",
    description2: "The director’s vision is realized through dynamic shots and a keen eye for color, using the urban landscape not just as a setting but as a canvas to accentuate the clothing's old-school cool. The warm color grading infuses each frame with a nostalgic glow, while the sharp cuts and angles keep the energy high, reflecting the restless spirit of the city. Mason's journey is more than a mere showcase of fashion; it's an ode to the individuality and creativity that Urban Outfitters champions. As Mason navigates the concrete maze, he brings to life the ethos of the brand—bold, eclectic, and unapologetically unique. This promo isn't just an advertisement; it's an invitation to join in the celebration of self-expression and the timeless appeal of vintage, set against the ever-changing backdrop of urban culture.",
    header: 'Urban Outfitters Promo' // Example header text
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

export default PersonalVideos;
