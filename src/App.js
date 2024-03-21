import React from 'react';
import Navbar from './components/Navbar';
import VideoCarousel from './components/VideoCarousel';
import AboutUs from './sections/AboutUs';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import Brands from './sections/Brands';
import ContactUs from './sections/ContactUs';
import DirectorPortfolios from './sections/DirectorPortfolios';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoCarousel />
      <AboutUs />
      <DirectorPortfolios /> 
      <Portfolio />
      <Services />
      <Brands />
      <ContactUs />
    </div>
  );
}

export default App;
