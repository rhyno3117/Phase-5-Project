import React, { useEffect, useRef, useState } from 'react';

function InfoBox({ setSelectedCategory,handleCategorySelection, bigBoxText, setSeason, selectedCategory }) {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    // console.log(selectedCategory);
    // handleCategorySelection(selectedCategory);
  };

  const handleSeasonChange = (event) => {
    const selectedSeason = event.target.value;
    setSeason(selectedSeason);
  };

  const infoBoxStyle = {
    flex: 1,
    height: '400px',
    width: '500px',
    backgroundColor: 'white',
    border: '10px solid black',
    marginTop: '-1000px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
  };

  const centeredContainerStyle = {
    textAlign: 'center',
  };

  const headerStyle = {
    fontSize: '24px',
  };

  const lineStyle = {
    width: '100%',
    borderTop: '3px solid black',
    margin: '5px 0',
    borderRadius: '10px',
  };

  const labelStyle = {
    fontSize: '16px',
    marginTop: '10px',
  };

  const dropdownStyle = {
    width: '100%',
    padding: '5px',
    borderRadius: '10px',
  };

  return (
    <div className="info-box" style={infoBoxStyle}>
      <div style={centeredContainerStyle}>
        <div style={{ ...headerStyle, color: 'black', fontSize: '40px', fontWeight: 'bold', marginTop: '-50px' }}>Select Text</div>
        <hr style={lineStyle} />
        <div style={{ ...labelStyle, color: 'black', fontWeight: 'bold'}}>Season:</div>
        <select style={dropdownStyle} onChange={handleSeasonChange}>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
          <option value="winter">Winter</option>
        </select>
        <div style={{ ...labelStyle, color: 'black', fontWeight: 'bold' }}>Category:</div>
        <select style={dropdownStyle} onChange={handleCategoryChange}>
          <option value="tops">Tops</option>
          <option value="bottoms">Bottoms</option>
          <option value="socks">Socks</option>
          <option value="shoes">Shoes</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
    </div>
  );
}

export default InfoBox;
