import React from 'react';

function InfoBox({ handleCategorySelection, bigBoxText }) {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    console.log(selectedCategory);
    handleCategorySelection(selectedCategory);
  };

  const handleSeasonChange = (event) => {
    const selectedSeason = event.target.value;
    console.log(selectedSeason);
    handleCategorySelection(selectedSeason);
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
  };

  const labelStyle = {
    fontSize: '16px',
    marginTop: '10px',
  };

  const dropdownStyle = {
    width: '100%',
    padding: '5px',
  };

  return (
    <div className="info-box" style={infoBoxStyle}>
      <div style={centeredContainerStyle}>
        <div style={{ ...headerStyle, color: 'black', fontSize: '28px', fontWeight: 'bold' }}>Insert Text</div>
        <hr style={lineStyle} />
        <div style={{ ...labelStyle, color: 'black', fontWeight: 'bold'}}>Season:</div>
        <select style={dropdownStyle}>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
          <option value="winter">Winter</option>
        </select>
        <div style={{ ...labelStyle, color: 'black', fontWeight: 'bold' }}>Category:</div>
        <select style={dropdownStyle} onChange={handleCategoryChange} value={bigBoxText}>
          <option value="tops">Tops</option>
          <option value="bottoms">Bottoms</option>
          <option value="lower">Lower</option>
          <option value="socks">Socks</option>
          <option value="shoes">Shoes</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
    </div>
  );
}

export default InfoBox;
