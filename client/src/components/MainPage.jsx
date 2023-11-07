import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Weather from './Weather';
import CreateFits from './CreateFits';
// import SetFits from './SetFits';
import CompleteFits from './CompleteFits';

function MainPage({ user, setUser, clothes, setClothes, clothesData, setClothesData }) {
  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedId, setSelectedId] = useState([]);

  const [selectedTopImage, setSelectedTopImage] = useState([]);
  const [selectedBottomImage, setSelectedBottomImage] = useState([]);
  const [selectedSocksImage, setSelectedSocksImage] = useState([]);
  const [selectedShoesImage, setSelectedShoesImage] = useState([]);
  const [selectedAccesoriesImage, setSelectedAccessoriesImage] = useState([]);
  console.log(selectedShoesImage)


  const updateSelectedImage = (image, id) => {
    console.log(image,id)
    setSelectedImage(image);
    setSelectedId(id);
  };

  const containerStyle = {
    display: 'flex',
    marginTop: '-150px',
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
          <CreateFits setSelectedAccessoriesImage={setSelectedAccessoriesImage} setSelectedSocksImage={setSelectedSocksImage} setSelectedBottomImage={setSelectedBottomImage} setSelectedTopImage={setSelectedTopImage} setSelectedId={setSelectedId} setSelectedImage={setSelectedImage} updateSelectedImage={updateSelectedImage} setUser={setUser} clothes={clothes} setClothes={setClothes} setClothesData={setClothesData} user={user} clothesData={clothesData} setSelectedShoesImage={setSelectedShoesImage}/>
        </div>
        <div id="complete" style={componentStyle}>
          <CompleteFits selectedAccesoriesImage={selectedAccesoriesImage} selectedShoesImage={selectedShoesImage} selectedSocksImage={selectedSocksImage} selectedBottomImage={selectedBottomImage} selectedTopImage={selectedTopImage} selectedImage={selectedImage} selectedId={selectedId}/>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
