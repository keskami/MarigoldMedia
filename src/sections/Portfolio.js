import HoverVideoPlayer from 'react-hover-video-player';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {

  const navigate = useNavigate();

  const handleVideoClick = (pagePath) => {
    navigate(pagePath);
  };

  const videos = [
    {
      url: "https://storage.cloud.google.com/marigold_videos/BRANDS%20-%20Coca%20Cola%20Spec%20Ad%20(1).mp4",
      title: "BRANDS",
      img: "https://i.ibb.co/6gCCjrx/Screenshot-2024-03-18-at-9-08-09-AM.png",
      pagePath: "/brands"
    },
    {
      url: "https://storage.cloud.google.com/marigold_videos/WEDDINGS%20-%20Trailer%20for%20full%20wedding%20video.mp4",
      title: "WEDDINGS",
      img: "https://i.ibb.co/CzqF4wy/Screenshot-2024-03-18-at-7-27-22-PM.png",
      pagePath: "/weddings"
    },
    {
      url: "https://storage.cloud.google.com/marigold_videos/SPORTS%20-%20High%20Level%20Recruit%20Hype%20Video%20(1).mp4",
      title: "SPORTS",
      img: "https://i.ibb.co/TcSfrMR/Screenshot-2024-03-17-at-11-50-09-AM.png",
      pagePath: "/sports"
    },
    {
      url: "https://storage.cloud.google.com/marigold_videos/EVENTS%20-%20Bigger%20than%20Basketball%2016x9.mp4",
      title: "EVENTS",
      img: "https://i.ibb.co/myt96vb/Screenshot-2024-03-17-at-8-26-41-PM.png",
      pagePath: "/events"
    },
    {
      url: "https://storage.cloud.google.com/marigold_videos/PERSONAL%20-%20Travel%20Project%20(West%20Baden%20Springs)%20(1).mov",
      title: "PERSONAL",
      img: "https://i.ibb.co/F8bY3Wr/Screenshot-2024-03-17-at-8-30-29-PM.png",
      pagePath: "/personal"
    },
    {
      url: "https://storage.cloud.google.com/marigold_videos/CAPABILITIES%20-%203D%20Camera%20Example%20(for%20a%20brand's%20event)%20(1).mp4",
      title: "3-D PICTURES",
      img: "https://i.ibb.co/XW59246/Screenshot-2024-03-17-at-8-27-58-PM.png",
      pagePath: "/picture"
    },
  ]

  return (
    <div id='portfolio' className="portfolio-section">
      <div className="director-buttons">
        <p id="title">Director Portfolios</p>
        <p className='director-names'>Lars Petersdorff</p>
        <p className='director-names'>Pablo Villa  </p>
      </div>
      <div className="director-portfolio">
        {videos.map((video, index) => (
          <div
            key={index}
            className="video-item"
            onClick={() => handleVideoClick(video.pagePath)}
            style={{ cursor: 'pointer' }} // Suggest it's clickable
          >
            <HoverVideoPlayer
              videoSrc={video.url}
              pausedOverlay={<img src={video.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
              loadingOverlay={<div className="loading-overlay"><div className="loading-spinner" /></div>}
            />
            <div className="video-item-title">
              <span>{video.title}</span>
              <span>{video.title}</span> {/* Duplicate the title for the animation effect */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Portfolio;
