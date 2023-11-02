import React from 'react';
import UploadWidget from './UploadWidget';

function UploadFitBigBox({ handleCategorySelection, category, setSeason, setPicture }) {
  return (

    <UploadWidget 
    handleCategorySelection={handleCategorySelection} 
    category={category} 
    setSeason={setSeason} 
    setPicture={setPicture} 
    />
  );
}

export default UploadFitBigBox;
