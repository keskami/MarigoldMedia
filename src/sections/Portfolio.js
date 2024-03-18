import React, { useState } from 'react';
import DirectorPortfolio from './DirectorPorfolio';
import './Portfolio.css';

const Portfolio = () => {
  const [activeDirector, setActiveDirector] = useState('PabloVilla');

  const handleDirectorChange = (director) => {
    setActiveDirector(director);
  };

  return (
    <div id='portfolio' className="portfolio-section">
      <div className="director-buttons">
        <p id="title">Director Portfolios</p>
        <button onClick={() => handleDirectorChange('LarsPetersdorff')}>Lars Petersdorff</button>
        <button onClick={() => handleDirectorChange('PabloVilla')}>Pablo Villa  </button>
      </div>
      {activeDirector === 'LarsPetersdorff' && <DirectorPortfolio director="LarsPetersdorff" />}
      {activeDirector === 'PabloVilla' && <DirectorPortfolio director="PabloVilla" />}
    </div>
  );
};


export default Portfolio;
