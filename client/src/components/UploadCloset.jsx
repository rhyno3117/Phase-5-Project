import React, { useEffect, useState } from 'react';
import InfoBox from './InfoBox';
import UploadWidget from './UploadWidget';
import Navbar from './Navbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function UploadCloset({user}) {
  const words = ['Tops', 'Bottoms', 'Socks', 'Shoes', 'Accessories'];
  const [selectedCategory, setSelectedCategory] = useState('');
  const [bigBoxText, setBigBoxText] = useState('');
  const [picture, setPicture] = useState('');
  const [season, setSeason] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [imageReset, setImageReset] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setBigBoxText(category);
  };

  const handleResetImage = () => {
    setPicture('');
    setImageReset(true);
    console.log("Image resetting");
  };

  const handleResetClick = () => {
    setUploadedImage(null); 
    handleResetImage();
    setSubmissionSuccess(false); 
  };

  const handleSubmit = () => {
    const postData = {
      category: selectedCategory,
      picture: picture,
      season: season,
      user_id: user.id,
    };
    console.log('Data to be submitted:', postData);

    fetch('/api/clothes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Clothing uploaded successfully!');
          setSubmissionSuccess(true);
        } else {
          console.error('Error uploading clothing');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  
    
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '100vh',
          width: '100vw',
          margin: 'auto',
          padding: 'auto',
          marginTop: '-300px', // Adjust the marginTop
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            marginTop: '-400px', // Adjust the marginTop
            borderRadius: '10px',
          }}
        >
          {words.map((word) => (
            <div
              key={word}
              style={{
                marginTop: '50px',
                padding: '20px',
                width: '250px', 
                height: '10px',
                margin: '15px',
                backgroundColor: word === selectedCategory ? 'yellow' : 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif',
                fontSize: '2em', // Increase the fontSize
                color: word === selectedCategory ? 'black' : 'black',
                border: '3px solid black', // Increase the border size
                borderRadius: '10px',
              }}
              onClick={() => handleCategorySelection(word)}
            >
              {word}
            </div>
          ))}
        </div>
        <UploadWidget
          handleCategorySelection={handleCategorySelection}
          category={selectedCategory}
          bigBoxText={bigBoxText}
          setPicture={setPicture}
          setSeason={setSeason}
          setSelectedCategory={setSelectedCategory}
          handleResetImage={handleResetImage}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px',
            marginBottom: '20px', // Add a margin at the bottom
            borderRadius: '10px',
          }}
        >
          <div style={{ display: 'flex', gap: '10px', marginTop: '-1350px', marginRight: '-470px' }}>
            {submissionSuccess ? (
              <CheckCircleIcon style={{ color: 'green', marginRight: '10px' }} />
            ) : null}
            <button
              style={{
                fontSize: '1em',
                fontWeight: 'bold',
                backgroundColor: 'purple',
                color: 'white',
                cursor: 'pointer',
                border: '3px solid #000',
                borderRadius: '10px',
              }}
              onClick={() => handleSubmit()}
            >
              Submit Clothing
            </button>
            <button
              style={{
                fontSize: '1em',
                fontWeight: 'bold',
                backgroundColor: 'red',
                color: 'white',
                cursor: 'pointer',
                border: '3px solid #000',
                borderRadius: '10px',
              }}
              onClick={handleResetClick}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadCloset;
