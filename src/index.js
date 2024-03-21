import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import BrandVideos from './videos/BrandVideos';
import EventVideos from './videos/EventVideos';
import SportVideos from './videos/SportVideos';
import PersonalVideos from './videos/PersonalVideos';
import PictureVideos from './videos/PictureVideos';
import WeddingVideos from './videos/WeddingVideos';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="brands" element={<BrandVideos />} />
      <Route path="events" element={<EventVideos/>}/>
      <Route path="sports" element={<SportVideos />}/>
      <Route path="personal" element={<PersonalVideos />}/>
      <Route path="picture" element={<PictureVideos />}/>
      <Route path="weddings" element={<WeddingVideos />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
