import React, { useEffect, useRef, useState } from 'react';
import { Container, SvgIcon } from "@mui/material";
import InfoBox from './InfoBox';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function UploadWidget({ handleCategorySelection, setSeason, setPicture, category }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [bigBoxText, setBigBoxText] = useState("Click to upload");
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dkfo6aga4',
      uploadPreset: 'Something'
    }, function (error, result) {
      if (result.event === "success") {
        setPicture(result.info.url);
        setUploadedImage(result.info.url); // Set the uploaded image
      }
    });
  }, []);

  useEffect(() => {
    if (category) {
      const formattedCategory = capitalizeFirstLetter(category);
      setBigBoxText(`Click to upload - ${formattedCategory}`);
    } else {
      setBigBoxText("Click to upload");
    }
  }, [category]);

  return (
    <div className="outer-box">
      <div className="big-box-and-another-box" style={{ display: 'flex' }}>
        <div
          className="big-box"
          style={{
            flex: 1,
            height: '400px',
            width: '500px',
            backgroundColor: 'white',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '10px solid black',
            marginTop: '-1000px',
            backgroundImage: uploadedImage ? `url(${uploadedImage})` : 'none', // Set the background image
            backgroundSize: 'cover', // Cover the entire box
            backgroundRepeat: 'no-repeat',
          }}
          onClick={() => widgetRef.current.open()}
        >
          {bigBoxText}
        </div>
        <div>
          <InfoBox
            handleCategorySelection={handleCategorySelection}
            category={category}
            bigBoxText={bigBoxText}
            setSeason={setSeason}
          />
        </div>
      </div>
    </div>
  );
}

export default UploadWidget;
