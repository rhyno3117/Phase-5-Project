import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

function CreateFits({ user, setUser, clothes, setClothes, clothesData, setClothesData }) {
  const [categoryImage, setCategoryImage] = useState([]);
  

  function fun(index, photo) {
    console.log(index);
    console.log(photo);
  }

  const carouselContainerStyle = {
    display: 'flex',
    height: '400px',
    width: '400px',
    border: '5px solid black',
    overflow: 'hidden',
    margin: '2px',
  

  };

  const containerStyle = {
    width: '100px',
    // display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '45px'
  };

  useEffect(() => {
    fetch(`/api/clothes`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('Failed to fetch images');
          return [];
        }
      })
      .then((data) => {
        // set the data here
        console.log(data);
        setCategoryImage(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const topCategoryImages = categoryImage.filter((clothes) => clothes.category === 'Tops');

  const bottomsCategoryImages = categoryImage.filter((clothes) => clothes.category === 'bottoms');
  const socksCategoryImages = categoryImage.filter((clothes) => clothes.category === 'socks');
  const shoesCategoryImages = categoryImage.filter((clothes) => clothes.category === 'shoes');
  // console.log(shoesCategoryImages)
  const accessoriesCategoryImages = categoryImage.filter((clothes) => clothes.category === 'accessories');


  return (
    <div style={containerStyle}>
      <div id="carousel-container-tops" style={carouselContainerStyle}>
        <Carousel>
          {topCategoryImages.map((clothes, index) => (
            <Carousel.Item key={index}>
              <img src={clothes.image} onClick={() => fun(index, clothes.image)} />
            </Carousel.Item>
          ))}
        </Carousel>
        </div>

      <div id="carousel-container-bottoms" style={carouselContainerStyle}>
        <Carousel>
          {bottomsCategoryImages.map((clothes, index) => (
            <Carousel.Item key={index}>
              <img
                src={clothes.image}
                onClick={() => fun(index, clothes.image)} 
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div id="carousel-container-socks" style={carouselContainerStyle}>
        <Carousel>
          {socksCategoryImages.map((clothes, index) => (
            <Carousel.Item key={index}>
              <img
                src={clothes.image}
                onClick={() => fun(index, clothes.image)} 
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div id="carousel-container-shoes" style={carouselContainerStyle}>
        <Carousel>
          {shoesCategoryImages.map((clothes, index) => (
            <Carousel.Item key={index}>
              <img
                src={clothes.image}
                onClick={() => fun(index, clothes.image)} 
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div id="carousel-container-accessories" style={carouselContainerStyle}>
        <Carousel>
          {accessoriesCategoryImages.map((clothes, index) => (
            <Carousel.Item key={index}>
              <img
                src={clothes.image}
                onClick={() => fun(index, clothes.image)} 
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CreateFits;
