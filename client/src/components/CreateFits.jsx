import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

function CreateFits({setSelectedTopImage,setSelectedBottomImage,setSelectedSocksImage,setSelectedShoesImage,setSelectedAccessoriesImage, setSelectedId, setSelectedImage}) {
  const [categoryImage, setCategoryImage] = useState([]);

  function fun(index, photo) {
    console.log(photo)
    setSelectedId(index);
    setSelectedImage(photo);
    setSelectedTopImage(photo);
    setSelectedBottomImage(photo);
    setSelectedSocksImage(photo);
    setSelectedShoesImage(photo);
    setSelectedAccessoriesImage(photo);
    console.log(index, photo)
  }

  const carouselContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '400px',
    width: '400px',
    border: '5px solid black',
    overflow: 'hidden',
    margin: '4px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '50px',
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
        console.log(data);
        setCategoryImage(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const categoryNames = ['Tops', 'bottoms', 'socks', 'shoes', 'accessories'];

  return (
    <div style={containerStyle}>
      {categoryNames.map((category) => (
        <div key={category} style={{ display: 'flex', alignItems: 'center' }}>
          <div id={`carousel-container-${category}`} style={carouselContainerStyle}>
            <Carousel>
              {categoryImage
                .filter((clothes) => clothes.category === category)
                .map((clothes, index) => (
                  <Carousel.Item key={index}>
                    <img src={clothes.image} onClick={() => fun(index, clothes.image)} />
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>
          <div >
              <img
                src="https://t4.ftcdn.net/jpg/05/30/79/15/360_F_530791557_T8hNharBQQJqmw0R2FRjCrC9CgNwaeui.jpg"
              />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CreateFits;
