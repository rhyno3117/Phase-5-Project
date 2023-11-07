import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { TextField } from '@mui/material';

function SetFits({selectedTopImage, selectedBottomImage, selectedSocksImage, selectedShoesImage, selectedAccesoriesImage,selectedImage}) {

  const carouselContainerStyle = {
    height: '400px',
    width: '400px',
    border: '5px solid black',
    overflow: 'hidden',
    display: 'flex'
  };

  const containerStyle = {
    display: 'flex',
  };

  const carouselColumnStyle = {
    width: '50%', 
    padding: '0 10px', 
  };

  const circleCarouselColumnStyle = {
    height: '400px',
    width: '400px',
    border: '10px solid black',
    overflow: 'hidden',
    margin: '2px',
    display: 'flex',
    borderRadius: '50%',
    marginTop: '92%',
    marginLeft: '65px',
    backgroundColor: 'grey'
  }

  const textFieldCircle={
  marginLeft: '75px',
marginTop: '100px',
border: '8px solid black',
backgroundColor: 'white'
}

const circleSubmitButton={
  marginLeft: '100px',
  marginTop: '50px',
  fontSize: '30px', 
  fontWeight: 'bold',
  textTransform: 'uppercase', 
  border: '8px solid black',
  backgroundColor: 'purple', 
};


return (
  <div style={containerStyle}>
    <div style={carouselColumnStyle}>
      <div id="carousel-container-tops" style={carouselContainerStyle}>
        {selectedImage && (
          <Carousel>
            <Carousel.Item>
              <img src={selectedTopImage} />
            </Carousel.Item>
          </Carousel>
        )}
      </div>

      <div id="carousel-container-bottoms" style={carouselContainerStyle}>
      {selectedImage && (
          <Carousel>
            <Carousel.Item>
              <img src={selectedBottomImage} />
            </Carousel.Item>
          </Carousel>
        )}
      </div>

      <div id="carousel-container-socks" style={carouselContainerStyle}>
      {selectedImage && (
          <Carousel>
            <Carousel.Item>
              <img src={selectedSocksImage} />
            </Carousel.Item>
          </Carousel>
        )}
      </div>

      <div id="carousel-container-shoes" style={carouselContainerStyle}>
      {selectedImage && (
          <Carousel>
            <Carousel.Item>
              <img src={selectedShoesImage} />
            </Carousel.Item>
          </Carousel>
        )}
      </div>

      <div id="carousel-container-accessories" style={carouselContainerStyle}>
      {selectedImage && (
          <Carousel>
            <Carousel.Item>
              <img src={selectedAccesoriesImage} />
            </Carousel.Item>
          </Carousel>
        )}
      </div>
    </div>
    <div style={circleCarouselColumnStyle}>
      <div id="set-fits-circle">
        <TextField style={textFieldCircle} placeholder="Event" />
        <button style={circleSubmitButton}>Set Fit</button>
      </div>
    </div>
  </div>
);
}

export default SetFits;