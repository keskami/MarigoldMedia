import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Page.css'; // Your CSS file for styling

const videos = [
  {
    id: 1,
    src: 'https://storage.googleapis.com/marigold_videos/BRANDS%20-%20Coca%20Cola%20Spec%20Ad%20(1).mp4',
    director: "Director: Pablo Villa",
    description1: "This Coca-Cola commercial showcases the iconic red can amidst a stunning VFX-enhanced backdrop of ice and effervescence, with no storyline but a powerful focus on the product itself. Directed by a visionary who believes in the strategic use of visual effects, the advertisement leverages cutting-edge VFX to highlight the refreshing nature of Coca-Cola. The director aimed to transform a standard product shot into a visually captivating experience, asserting that \"VFX are not for every video, but when they fit in, they will make a massive difference on the production value.\"",
    description2: " The production meticulously captures the can in hyper-realistic detail, surrounded by ice, with VFX simulating the dynamic splash and fizz of the beverage. These visuals are not just about showcasing the product but about evoking the sensory experience of enjoying a cold Coca-Cola. The commercial's climax features a dramatic, slow-motion spill from the can, emphasizing the refreshment Coca-Cola promises. Through this approach, the commercial not only highlights the product but does so in a way that significantly elevates its appeal, aligning with the director's belief in the transformative power of well-applied visual effects.",
    header: 'Coca-Cola Commercial' // Example header text
  },
  {
    id: 2,
    src: 'https://storage.googleapis.com/marigold_videos/BRANDS%20-%20Trifecta%20Watches%20-%20Basketball%20Promo.mp4',
    director: "Director: Pablo Villa",
    description1: "In the tranquility of an empty basketball court, the Trifecta Watches promo captures the solitary figure of Mason Gillis immersed in the quiet intensity of the game. Every frame is a juxtaposition of the athlete’s relaxed yet precise movements against the ticking precision of the Trifecta Watch. The watch, elegantly featured on Gillis's wrist, becomes a testament to the brand’s seamless blend of functionality and style. The camera lingers on the details: the hands of the watch sweeping past numbers, the glint of light on its face, the ease with which it displays messages — all emphasizing its role as a companion for both the quiet and the chaotic moments of life.",
    description2: "Directorially, the promo is crafted with a clear intention to evoke a sense of calm power. There is a palpable respect for the game’s quieter side, the solo practice where the only opponent is time itself. This vision is artfully realized through smooth slow-motion sequences, crisp sound design that echoes the solitude of the court, and a deliberate color grading that casts everything in a gentle, amber-tinged light — reflective of Trifecta's brand identity. The watch isn't just a feature; it’s a character that stands for the poise and potential of every second. This production isn't about the spectacle of basketball; it’s a showcase of the sport as a form of personal meditation and the watch as a silent witness to the passage of time.",
    header: 'Trifecta Watches - Basketball Promo' // Example header text
  },
  {
    id: 3,
    src: 'https://storage.googleapis.com/marigold_videos/HEYDUDE%20x%20Boopie%20Campaign.mp4',
    director: "Director: Lars Petersdorff",
    description1: "In the dynamic brand video for HEYDUDE, basketball player and social media influencer Boopie takes center stage, effortlessly merging the worlds of sports, fashion, and lifestyle. Set against a backdrop that transitions from the pulsating energy of the basketball court to the laid-back ambiance of city streets, Boopie showcases the versatility of HEYDUDE's footwear through a series of activities that highlight both performance and style. His natural charisma and the seamless integration of the shoes into his active lifestyle convey a message of comfort, durability, and trend-setting design. The video, enriched with vibrant visuals and an engaging soundtrack, not only captures the essence of the HEYDUDE brand but also amplifies its appeal through Boopie's influential presence, making it a compelling narrative that resonates with a diverse audience seeking footwear that doesn't compromise on style or functionality.",
    header: 'HEYDUDE x Boopie Campaign' // Example header text
  },
  {
    id: 4,
    src: "https://storage.googleapis.com/marigold_videos/BRANDS%20-%20Izod%20Clothing%20Promo.mp4",
    director: "Director: Pablo Villa",
    description1: "The Izod Clothing Promo is an embodiment of relaxed elegance, featuring Mason Gillis not on the basketball court, but on the serene greens of a golf course. The camera captures the quiet focus of Gillis as he takes his swing, the fabric of his Izod attire moving with grace and ease. Each frame is bathed in a warm, inviting color that speaks to the leisurely afternoons under the sun. Close-ups of the clothing reveal the texture and craftsmanship of the fabric, emphasizing the brand's commitment to comfort without sacrificing style.",
    description2: "As Mason Gillis moves across the course, the director's vision of tranquility and poise comes to life. The promo is paced to the rhythm of a leisurely game of golf, with each shot of Mason and the clothing designed to be as aesthetic as they are intentional. This is not a high-energy sports reel; it’s an ode to the leisurely sport and the lifestyle that accompanies it, perfectly complemented by Izod’s stylish, comfortable apparel. It's an invitation to experience the calm and collected side of athleticism, where the game is a backdrop to the story of a man, his attire, and the simple joys of a well-lived day.",
    header: 'Izod Clothing Promo' // Example header text
  },
  {
    id: 5,
    src: "https://storage.googleapis.com/marigold_videos/Hard%20Jewlery%20Spec%20Ad.mp4",
    director: "Director: Lars Petersdorff",
    description1: "In the visually captivating Hard Jewelry spec ad, a single model becomes the embodiment of bold self-expression, adorned with an array of striking jewelry pieces that command attention. The camera focuses in on the gleam of meticulously crafted rings, the elegant drape of bracelets, and the statement-making allure of necklaces, each piece showcased against the model's movements that blend strength with grace. This ad is a celebration of individuality, with close-ups that highlight the intricate details and unique designs Hard Jewelry is known for, set against a minimalist backdrop that ensures the jewelry remains the star of the show. The ad's sophisticated yet edgy aesthetic, paired with a subtle, atmospheric soundtrack, creates a mesmerizing narrative that appeals to those who see jewelry as an extension of their personality, inviting viewers to explore a world where accessories are not just worn, but experienced.",
    header: 'Hard Jewlery Spec Ad' // Example header text
  },
  {
    id: 6,
    src: "https://storage.googleapis.com/marigold_videos/BRANDS%20-%20Insomnia%20Cookies%20Challenge%20Announcement.mp4",
    director: "Director: Pablo Villa",
    description1: "The Insomnia Cookies Challenge Announcement is a heartwarming sequence that spotlights Abby, the reigning Ultimate Cookie Lover, whose enthusiasm for cookies is as infectious as it is genuine. Throughout the video, we see her immersed in the world of cookies—her eyes light up, her dances around with cookies in her hands, and her voice exudes excitement as she details the rules and prizes of this year's challenge. The camera captures a warm smile and an artful array of cookies in all their sugary glory, highlighting the joy that these baked goods bring.",
    description2: "Behind the scenes, the director's vision is clear: to draw the viewer into the simple pleasure of cookies through Abby's narrative. The focus is on her expressive storytelling, her evident love for the cookies, and the cookies themselves, each shot designed to engage the senses and entice cookie lovers to share their own experiences. It’s a celebration of personal passion and the shared community spirit that Insomnia Cookies fosters. This announcement video is not just a call to action; it's a tribute to the love of cookies, inviting others to join in the challenge and express their fondness for this universal treat.",
    header: 'Insomnia Cookies Challenge' // Example header text
  },
  {
    id: 7,
    src: "https://storage.googleapis.com/marigold_videos/BRANDS%20-%20Personal%20Athlete%20Promo%20for%20Urban%20Outfitters.mp4",
    director: "Director: Pablo Villa",
    description1: "In the heart of the city, the Urban Outfitters Promo unfolds as a vibrant testament to street culture and vintage flair, with Mason Gillis at the center of this stylish urban narrative. Roaming through the bustling streets, Mason embodies the essence of the urban explorer, his movements in harmony with the pulsating hip-hop soundtrack that defines the video's rhythm. The focus is on the meticulously selected vintage clothing from Urban Outfitters, each piece resonating with the brand's iconic blend of retro and modern. The camera loves Mason, capturing the fluidity of his motion and the standout details of his attire—be it the texture of a classic bomber jacket or the bold print of a throwback tee—against the vibrant backdrop of city life.",
    description2: "The director’s vision is realized through dynamic shots and a keen eye for color, using the urban landscape not just as a setting but as a canvas to accentuate the clothing's old-school cool. The warm color grading infuses each frame with a nostalgic glow, while the sharp cuts and angles keep the energy high, reflecting the restless spirit of the city. Mason's journey is more than a mere showcase of fashion; it's an ode to the individuality and creativity that Urban Outfitters champions. As Mason navigates the concrete maze, he brings to life the ethos of the brand—bold, eclectic, and unapologetically unique. This promo isn't just an advertisement; it's an invitation to join in the celebration of self-expression and the timeless appeal of vintage, set against the ever-changing backdrop of urban culture.",
    header: 'Urban Outfitters Promo' // Example header text
  },
  // Additional videos can be added here
];

const BrandVideos = () => {
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
                playerControls = {1}
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

export default BrandVideos;
