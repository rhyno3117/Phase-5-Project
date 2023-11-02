import React, { useState } from 'react';
import InfoBox from './InfoBox';
import UploadFitBigBox from './UploadFitBigBox';
import Navbar from './Navbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function UploadCloset() {
  const words = ['Tops', 'Bottoms', 'Lower', 'Socks', 'Shoes', 'Accessories'];
  const [selectedCategory, setSelectedCategory] = useState('');
  const [bigBoxText, setBigBoxText] = useState('');
  const [picture, setPicture] = useState('');
  const [season, setSeason] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setBigBoxText(category);
  };

  const handleSubmit = () => {
    const postData = {
      category: selectedCategory,
      picture: picture,
      season: season,
    };

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
          marginTop: '-200px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            marginTop: '-600px',
          }}
        >
          {words.map((word) => (
            <div
              key={word}
              style={{
                marginTop: '50px',
                padding: '20px',
                width: '100px',
                height: '0px',
                margin: '15px',
                backgroundColor: word === selectedCategory ? 'yellow' : 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif',
                fontSize: '1em',
                color: word === selectedCategory ? 'black' : 'black',
                border: '2px solid black',
              }}
              onClick={() => handleCategorySelection(word)}
            >
              {word}
            </div>
          ))}
        </div>
        <UploadFitBigBox
          handleCategorySelection={handleCategorySelection}
          category={selectedCategory}
          bigBoxText={bigBoxText}
          setPicture={setPicture}
          setSeason={setSeason}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {submissionSuccess ? (
              <CheckCircleIcon style={{ color: 'green', marginRight: '10px', marginTop: '-1000px' }} />
            ) : null}
            <button
              style={{
                marginTop: '-1000px',
                display: 'flex',
                padding: '10px 20px',
                fontSize: '1em',
                fontWeight: 'bold',
                backgroundColor: 'purple',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                border: '3px solid #000',
              }}
              onClick={handleSubmit}
            >
              Submit Clothing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadCloset;
