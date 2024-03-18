import React, { useRef, useEffect } from 'react';
import './Brands.css'; // Ensure this CSS file exists in your src directory

// Assuming these are iframe embed URLs for your videos
const videosRow1 = [
  "https://storage.cloud.google.com/marigold_videos/EVENTS%20-%20Boiler%20Vintage%20event%20recap%20reel.mp4",
  "https://storage.cloud.google.com/marigold_videos/BRANDS%20-%20Coca%20Cola%20Spec%20Ad%20(1).mp4",
  "https://storage.cloud.google.com/marigold_videos/BRANDS%20-%20Personal%20Athlete%20Promo%20for%20Urban%20Outfitters.mp4",
  "https://storage.cloud.google.com/marigold_videos/BRANDS%20-%20Trifecta%20Watches%20-%20Basketball%20Promo%20(1).mp4"
];

const imagesRow1 = [
  "https://i.ibb.co/YWrTSxm/Untitled-design-55.png",
  "https://i.ibb.co/zxzW3Yf/Untitled-design-52.png",
  "https://i.ibb.co/rczpFPq/Untitled-design-53.png",
  "https://i.ibb.co/4ZcT7t4/Untitled-design-54.png"
];

const videosRow2 = [
  "https://www.youtube.com/embed/VIDEO_ID5",
  "https://www.youtube.com/embed/VIDEO_ID6",
  "https://storage.cloud.google.com/marigold_videos/BRANDS%20-%20Insomnia%20Cookies%20Challenge%20Announcement.mp4",
  "https://www.youtube.com/embed/VIDEO_ID8"
];

const imagesRow2 = [
  "path/to/your/image5.jpg",
  "path/to/your/image6.jpg",
  "https://i.ibb.co/m5KCRR5/Untitled-design-56.png",
  "path/to/your/image8.jpg"
];

const scrollInterval = 20; // Interval in milliseconds for scrolling
const scrollStep = 1; // Pixels to scroll every interval

const Brands = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const scrollIntervalId1 = useRef(null);
  const scrollIntervalId2 = useRef(null);

  const directionRef1 = useRef('left');
  const directionRef2 = useRef('right');

  // Corrected manageScrolling to use correct interval ref based on the scrollRef
  const manageScrolling = (ref, directionRef, intervalIdRef, shouldStart) => {
    const autoScroll = () => {
      if (!ref.current) return;

      const maxScrollLeft = ref.current.scrollWidth - ref.current.clientWidth;
      if (directionRef.current === 'right') {
        if (ref.current.scrollLeft < maxScrollLeft) {
          ref.current.scrollLeft += scrollStep;
        } else {
          directionRef.current = 'left';
        }
      } else {
        if (ref.current.scrollLeft > 0) {
          ref.current.scrollLeft -= scrollStep;
        } else {
          directionRef.current = 'right';
        }
      }
    };

    if (shouldStart) {
      clearInterval(intervalIdRef.current); // Use the correct interval ref for clearing
      intervalIdRef.current = setInterval(autoScroll, scrollInterval);
    } else {
      clearInterval(intervalIdRef.current);
    }
  };

  useEffect(() => {
    // Functions to start and stop scrolling
    const startScroll = (ref, directionRef, intervalIdRef) => manageScrolling(ref, directionRef, intervalIdRef, true);
    const stopScroll = (intervalIdRef) => clearInterval(intervalIdRef.current);
  
    // Setup initial scrolling
    startScroll(scrollRef1, directionRef1, scrollIntervalId1);
    startScroll(scrollRef2, directionRef2, scrollIntervalId2);
  
    // Setup event handlers for pausing/resuming scroll on hover
    const setupHoverListeners = (ref, intervalIdRef) => {
      const handleMouseEnter = () => stopScroll(intervalIdRef);
      const handleMouseLeave = () => startScroll(ref, directionRef1, intervalIdRef); // Ensure the correct direction reference is used
      ref.current.addEventListener('mouseenter', handleMouseEnter);
      ref.current.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        // Check if the element exists before removing event listeners
        if (ref.current) {
          ref.current.removeEventListener('mouseenter', handleMouseEnter);
          ref.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    };
  
    // Execute setupHoverListeners for both rows and retain the cleanup functions
    const removeListeners1 = setupHoverListeners(scrollRef1, scrollIntervalId1);
    const removeListeners2 = setupHoverListeners(scrollRef2, scrollIntervalId2);
  
    // Cleanup function
    return () => {
      stopScroll(scrollIntervalId1);
      stopScroll(scrollIntervalId2);
      removeListeners1(); // Safely attempt to remove listeners
      removeListeners2(); // Safely attempt to remove listeners
    };
  }, []);
  


  const generateRowContent = (videos, images) => {
    return [...Array(4)].flatMap((_, i) => [
      <div className={`video-container ${i % 2 === 0 ? 'reel-dimensions' : ''}`} key={`video-${i}`}>
        <video
          controls
          title={`Video ${i}`}  
        >
          <source src={videos[i]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>,
      <div className="image-container" key={`image-${i}`}>
        <img src={images[i]} alt={`Placeholder ${i}`} />
      </div>
    ]);
  };

  return (
    <div id='brands'>
      <div className="scroll-container" ref={scrollRef1}>
        {generateRowContent(videosRow1, imagesRow1)}
      </div>
      <div className="scroll-container" ref={scrollRef2}>
        {generateRowContent(videosRow2, imagesRow2)}
      </div>
    </div>
  );
};

export default Brands;
