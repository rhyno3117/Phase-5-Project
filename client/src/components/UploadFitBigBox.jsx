import React from 'react';
import UploadWidget from './UploadWidget';

function UploadFitBigBox({handleResetImage, handleCategorySelection, category, setSeason, setPicture, handleSeasonSelection, setSelectedCategory, selectedCategory }) {
  return (

    <UploadWidget 
    handleCategorySelection={handleCategorySelection} 
    handleSeasonSelection={handleSeasonSelection}
    category={category} 
    setSeason={setSeason} 
    setPicture={setPicture} 
    setSelectedCategory={setSelectedCategory}
    selectedCategory={selectedCategory}
    handleResetImage={handleResetImage} // Pass the reset function

    />
  );
}

export default UploadFitBigBox;
