import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import BrandsPablo from './videos/BrandsPablo';
import EventsPablo from './videos/EventsPablo';
import SportsPablo from './videos/SportsPablo';
import PersonalPablo from './videos/PersonalPablo';
import PicturePablo from './videos/PicturePablo';
import WeddingsPablo from './videos/WeddingsPablo';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="brands" element={<BrandsPablo />} />
      <Route path="events" element={<EventsPablo />}/>
      <Route path="sports" element={<SportsPablo />}/>
      <Route path="personal" element={<PersonalPablo />}/>
      <Route path="picture" element={<PicturePablo />}/>
      <Route path="weddings" element={<WeddingsPablo />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
