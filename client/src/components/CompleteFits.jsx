import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

function SetFits({ user, setUser, clothes, setClothes, clothesData, setClothesData }) {
  const [categoryImage, setCategoryImage] = useState([]);
  

  function fun(index, photo) {
    console.log(index);
    console.log(photo);
  }

  const carouselContainerStyle = {
    // display: 'flex',
    height: '400px',
    width: '400px',
    border: '5px solid black',
    overflow: 'hidden',
    margin: '2px',
    marginLeft: '-280px'

  };


  const containerStyle = {
    // width: '100px',
    // // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // // justifyContent: 'fit',
    // // height: '100vh',
  };


  return (
    <div style={containerStyle}>
      <div id="carousel-container-tops" style={carouselContainerStyle}>
        
        </div>

      <div id="carousel-container-bottoms" style={carouselContainerStyle}>
        
      </div>
      <div id="carousel-container-socks" style={carouselContainerStyle}>
       
      </div>

      <div id="carousel-container-shoes" style={carouselContainerStyle}>
        
      </div>

      <div id="carousel-container-accessories" style={carouselContainerStyle}>
      </div>
    </div>
  );
}

export default SetFits;
