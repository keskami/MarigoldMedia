import React, { useState } from 'react';
import './DirectorPortfolios.css';
import LarsDescriptionPage from './directors/LarsDescriptionPage';
import PabloDescriptionPage from './directors/PabloDescriptionPage';

const DirectorPortfolios = () => {
  // State to manage which director's info is being displayed
  const [currentDirector, setCurrentDirector] = useState('');

  // Function to render the selected director's component
  const renderDirectorComponent = () => {
    switch (currentDirector) {
      case 'Lars':
        return <LarsDescriptionPage />;
      case 'Pablo':
        return <PabloDescriptionPage />;
      default:
        return null; // Default case when no director is selected
    }
  };

  return (
    <div className='director-descriptions'>
      <div className="director-buttons">
        <p id="title">Director Portfolios</p>
        <button className='director-names' onClick={() => setCurrentDirector('Lars')}>Lars Petersdorff</button>
        <button className='director-names' onClick={() => setCurrentDirector('Pablo')}>Pablo Villa</button>
      </div>
      {renderDirectorComponent()}
    </div>
  );
};

export default DirectorPortfolios;
