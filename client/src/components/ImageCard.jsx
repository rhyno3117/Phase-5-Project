import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function ImageCard({ image, isEditing, id, deleteClothes,user }) {
  const imageStyle = {
    objectFit: 'fit',
    height: '30vh',
    width: '30vh',
    border: '10px solid black',
    borderRadius: '10px',
  };

  const deleteButtonStyle = {
    position: 'absolute',
    top: 10,
    right: 10,
    color: 'black',
    border: 'none',
    cursor: 'pointer',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    borderRadius: '10px',
  };

  const cardStyle = {
    margin: '10px',
    backgroundColor: 'white',
    marginRight: '500px',
    borderRadius: '10px',
  };

  const handleDeleteImage = () => {
    deleteClothes(id);
  };

  return (
    <div style={cardContainerStyle}>
      <Card style={cardStyle}>
        <CardContent>
          {id === 0 && (
            <div style={{ backgroundColor: 'red', padding: '10px', color: 'white' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>All</div>
              </div>
            </div>
          )}
          <img onClick={handleDeleteImage} src={image} alt="Uploaded Clothing" style={imageStyle} />
        </CardContent>
        <CardActions>
          {isEditing && (
            <Button style={deleteButtonStyle} onClick={handleDeleteImage}>
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default ImageCard;
