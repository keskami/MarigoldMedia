import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Page.css'; // Your CSS file for styling

const videos = [
  {
    id: 1,
    src: 'https://storage.googleapis.com/marigold_videos/EVENTS%20-%20Elevate!%20Professional%20Development%20Conference%20Recap%2016x9.mp4',
    director: "Director: Pablo Villa",
    description1: 'The "Elevate! Professional Development Conference" for pre-K through 2nd-grade teachers is a visual ode to the passion and dedication of early childhood educators, captured through the innovative use of drone shots and intimate videography. As teachers gather, eager to enrich their skills and knowledge for the benefit of their young students, the camera takes flight, weaving through the spaces of shared learning and collaboration. These aerial views offer a unique perspective on the vibrant community of educators, their collective energy magnified by the grandeur of the conference setting. Transitioning from the expansive to the personal, the videography shifts to ground level, focusing on the animated faces of teachers as they engage in workshops, listen intently to keynote speakers, and share insights with peers.',
    description2: "Directed with a keen understanding of the event’s heart and soul, the footage captures the essence of what it means to be at the forefront of shaping young minds. Each frame is a testament to the conference's role as a crucible of innovation and inspiration, where educators are both teachers and lifelong learners. The use of drone technology not only highlights the scale of the event but also symbolizes the overarching vision of the conference—to elevate the teaching profession to new heights. Through this blend of sweeping aerial shots and close-up interactions, the \"Elevate! Professional Development Conference\" emerges as a pivotal gathering, empowering teachers of the youngest learners with the tools, knowledge, and network to make a lasting impact in the world of early childhood education.",
    header: 'Elevate! Professional Development Conference Recap' // Example header text
  },
  {
    id: 2,
    src: 'https://storage.googleapis.com/marigold_videos/Phi%20Mu%20Bid%20Day%202023.mp4',
    director: "Director: Lars Petersdorff",
    description1: "The Phi Mu Bid Day at Purdue University 2023 unfolds in a vibrant recap video that captures the sheer joy and sisterhood of this memorable day. From the anticipation-filled moments of letter opening to the spontaneous bursts of happiness that follow, each frame is infused with emotion and excitement. The video artfully showcases a cascade of reactions as new members discover their acceptance, their faces alight with smiles and tears, emblematic of the day's significance. It transitions smoothly into scenes of laughter, group pictures, and heartfelt embraces, painting a vivid picture of the bonds being formed.",
    description2: "The director's vision for the Phi Mu Bid Day 2023 recap at Purdue University was to weave a narrative that went beyond capturing moments, aiming instead to encapsulate the emotional essence and communal spirit of the event. Through a discerning lens, the director chose shots that showcased the depth of connections forming, employing a mix of dynamic and tender moments to convey the day's joy and sisterly bonds. The deliberate pacing and thoughtful music selection complemented the storytelling, offering viewers a heartfelt glimpse into the celebrations and the beginning of a new chapter in the lives of Phi Mu's newest members. This approach ensured the video was not just a recap but a lasting tribute to the memories and emotions shared on Bid Day.",
    header: 'Phi Mu Bid Day 2023' // Example header text
  },
  {
    id: 3,
    src: 'https://storage.googleapis.com/marigold_videos/Rising%20Professionals_1080_v1.mp4',
    director: "Director: Lars Petersdorff",
    description1: "The Rising Professionals program at Purdue University shines in the spotlight of its info video, meticulously crafted through a series of compelling testimonials from its members. Each participant, framed against the backdrop of the university's iconic landmarks, offers a high-level overview of the program's offerings. They speak eloquently about the program's core mission: to provide students with early, real-life professional experiences that complement their academic pursuits. The focus is on the program's ability to equip students with practical skills, industry insights, and professional networks that are crucial for their career development. As each member shares these details, the video paints a picture of a vibrant community where ambitious students are transformed into ready professionals, all underscored by the collective goal of fostering a proactive approach to career readiness.",
    header: 'Rising Professionals' // Example header text
  },
  {
    id: 4,
    src: 'https://storage.googleapis.com/marigold_videos/EVENTS%20-%20Bigger%20than%20Basketball%2016x9.mp4',
    director: "Director: Pablo Villa",
    description1: "The annual fundraiser hosted by the Boilermaker Alliance, in collaboration with the Purdue Basketball Team, emerges as an eloquent evening dedicated to philanthropy, encapsulated through the art of refined videography. This prestigious event gathers adults from various walks of life, united by a shared commitment to support charitable organizations through the strategic alliance of Purdue's name, image, and likeness with its student-athletes. The camera moves gracefully through the venue, capturing the elegance of the evening and the profound interactions that unfold, underscoring the event's dual purpose: to celebrate and to contribute.",
    description2: "With a narrative driven by the intention to illuminate the importance of the Boilermaker Alliance's mission, the director skillfully highlights the moments that symbolize the event's success and impact. From the warmth of the attendees mingling to the impassioned speeches that resonate with the audience, each shot is a testament to the collective effort to raise funds and awareness for the chosen causes. The presence of the Purdue Basketball Team adds a unique dimension, showcasing the athletes not just for their prowess on the court but as pivotal figures in this charitable endeavor, embodying the spirit of giving back that defines the Boilermaker community. Through this elegant fusion of sports, philanthropy, and community, the annual fundraiser stands out as a beacon of hope and generosity.",
    header: 'Bigger than Basketball' // Example header text
  },
  {
    id: 5,
    src: 'https://storage.googleapis.com/marigold_videos/EVENTS%20-%20Boiler%20Vintage%20event%20recap%20reel.mp4',
    director: "Director: Pablo Villa",
    description1: "The Boiler Vintage event recap video in West Lafayette is a vibrant showcase of the unique allure that vintage clothing holds. Capturing the essence of discovery, the video glides through the bustling store, highlighting eager buyers as they sift through racks of carefully curated vintage finds. The camera lovingly focuses on the textures, patterns, and timeless designs of the clothing, each piece telling its own story. Interspersed with these are featured shots of the store's interior, where the warm, inviting atmosphere and thoughtfully arranged displays speak to the passion behind Boiler Vintage. This visual narrative not only celebrates the individuality of vintage fashion but also the communal experience of exploring history through clothing, making the video a compelling invitation to all who seek to add a piece of the past to their modern wardrobe.",
    header: 'Boiler Vintage Event Reel' // Example header text
  },
];

const EventVideos = () => {
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

export default EventVideos;
