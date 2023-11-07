import React, { useEffect, useRef, useState } from 'react';
import { Container, SvgIcon } from "@mui/material";
import InfoBox from './InfoBox';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function UploadWidget({
  selectedCategory,
  setSelectedCategory,
  handleCategorySelection,
  setSeason,
  setPicture,
  category,
  handleSeasonSelection,
  handleResetImage,
}) 
{
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [bigBoxText, setBigBoxText] = useState("Click to upload");
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dkfo6aga4',
        uploadPreset: 'Something',
      },
      function (error, result) {
        if (result.event === 'success') {
          setPicture(result.info.url);
          setUploadedImage(result.info.url);
        }
      }
    );
  }, []);

  useEffect(() => {
    if (category) {
      const formattedCategory = capitalizeFirstLetter(category);
      setBigBoxText(`Click to upload - ${formattedCategory}`);
    } else {
      setBigBoxText("Click to upload");
    }
  }, [category]);

  // const handleResetClick = () => {
  //   setUploadedImage(null); // Set the image to null
  //   handleResetImage(); // Call the parent's reset function
  // };

  return (
    <div className="outer-box">
      <div className="big-box-and-another-box" style={{ display: 'flex' }}>
        <div
          className="big-box"
          style={{
            height: '400px',
            width: '500px',
            backgroundColor: 'white',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '10px solid black',
            marginTop: '-1000px',
            backgroundImage: uploadedImage ? `url(${uploadedImage})` : 'none',
            backgroundSize: 'fit',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
          }}
          onClick={() => widgetRef.current.open()}
        >
          {bigBoxText}
        </div>
        <div>
          <InfoBox
            handleCategorySelection={handleCategorySelection}
            handleSeasonSelection={handleSeasonSelection}
            category={category}
            bigBoxText={bigBoxText}
            setSeason={setSeason}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* <div>
          <button
            style={{
              marginTop: '10vh'
            }}
            onClick={handleResetClick}
          >
            Reset
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default UploadWidget;
