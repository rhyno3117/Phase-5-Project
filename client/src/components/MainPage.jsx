import React from 'react';
import Navbar from './Navbar';
import Weather from './Weather';
import CreateFits from './CreateFits';
import SetFits from './SetFits';
import CompleteFits from './CompleteFits';

function MainPage({ user, setUser, clothes, setClothes, clothesData, setClothesData }) {
  const containerStyle = {
    display: 'flex',
    marginTop: '-200px',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '50%',
    left: '15%',
    width: '70%',
  };

  const componentStyle = {
    display: 'flex',
    margin: '5px',
  };

  return (
    <div>
      <Navbar />
      <div id="weather" style={componentStyle}>
        <Weather />
      </div>
      <div style={containerStyle}>
        <div id="carousel" style={componentStyle}>
          <CreateFits setUser={setUser} clothes={clothes} setClothes={setClothes} setClothesData={setClothesData} user={user} clothesData={clothesData} />
        </div>
        <div id="confirm" style={componentStyle}>
          <SetFits />
        </div>
        <div id="complete" style={componentStyle}>
          <CompleteFits />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
