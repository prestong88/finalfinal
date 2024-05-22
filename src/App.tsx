import React, { useState } from 'react';
import './App.css';

const App = () => {
  const beginnerTricks = [
    'Ollie',
    'Kickflip',
    'Heelflip',
    'Manual',
    '50-50 Grind',
  ];

  const intermediateTricks = [
    'Pop Shove-it',
    'Frontside 180',
    'Backside 180',
    'Boardslide',
    'Nollie',
  ];

  const advancedTricks = [
    '360 Flip',
    'Hardflip',
    'Backside Flip',
    'Frontside Flip',
    'Varial Heelflip',
  ];

  const [selectedExperience, setSelectedExperience] = useState('Beginner');
  const [selectedTrick, setSelectedTrick] = useState('');

  const generateTrick = () => {
    let tricksList;
    switch (selectedExperience) {
      case 'Beginner':
        tricksList = beginnerTricks;
        break;
      case 'Intermediate':
        tricksList = intermediateTricks;
        break;
      case 'Advanced':
        tricksList = advancedTricks;
        break;
      default:
        tricksList = beginnerTricks;
    }
    const randomTrick = tricksList[Math.floor(Math.random() * tricksList.length)];
    setSelectedTrick(randomTrick);
  };

  return (
    <div className="App">
      <div className="selector-container">
        <label>Select Experience Level:</label>
        <select
          value={selectedExperience}
          onChange={(e) => setSelectedExperience(e.target.value)}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div className="button-container">
        <button onClick={generateTrick}>Generate Trick</button>
      </div>
      {selectedTrick ? (
        <div className="result-container">
          <p>Random {selectedExperience} Trick: {selectedTrick}</p>
        </div>
      ) : (
        <div className="result-container">
          <p>Select an experience and tap the button to generate a trick.</p>
        </div>
      )}
    </div>
  );
};

export default App;
