import React from 'react';
import Navbar from './Navbar';
import Weather from './Weather';
import CreateFits from './CreateFits';
import SetFits from './SetFits';

function MainPage() {
  const containerStyle = {
    display: 'flex',
    marginTop: '-200px', 
    alignItems: 'center',
    top: '50%', // Center vertically
    left: '15%', // Center horizontally
    position: 'absolute',

    
  };


  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <div id="weather">
          <Weather />
        </div>
        <div id="carousel" >
          <CreateFits />
        </div>
        <div id="confirm" >
          <SetFits />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
