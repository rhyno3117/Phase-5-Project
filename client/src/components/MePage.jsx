import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { TextField, Button, Box } from '@mui/material';
import ImageCard from './ImageCard';
import Card from '@mui/material/Card';

function MePage({ setUser, user }) {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    username: user.user,
    password: '',
  });
  const [editMode, setEditMode] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  useEffect(() => {
    fetch('/api/clothes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('Failed to fetch images');
        return null;
      }
    })
      .then((data) => {
        setImages(data.map((item) => item));
      })
      .catch((error) => {
        if (error instanceof ValueError) {
          console.error('ValueError:', error);
        } else {
          console.error('Error:', error);
        }
      });
  }, []);

  function deleteClothes(id) {
    if (editMode) {
      fetch(`/api/clothes/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((r) => r.json())
        .then((data) => {
          handleDeleteImage(id);
        });
    }
  }  
  
  const handleDeleteImage = (id) => {
    const updatedImages = images.filter((image) => image.id !== id);
    setImages(updatedImages);
  };


  const handleUpdate = () => {
    const data = {
      username: formData.username,
      password: formData.password,
    };

    fetch(`/api/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        setUser(responseData);
        console.log('Updated user data:', responseData);
      })
      .catch((error) => {
        console.error('Error updating user data', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
  };

  const boxMe = {
    borderRadius: '50%',
    border: '15px solid #000',
    width: '700px',
    height: '700px',
    padding: '10px',
    marginTop: '-800px',
    position: 'relative',
    marginLeft: '40vh',
  };

  const meStyle = {
    fontWeight: 'bold',
    fontSize: '90px',
    color: 'black',
  };

  const contentContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '40vh',
  };

  const buttonContainer = {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
  };

  const textFieldStyle = {
    height: '75px',
    width: '100%',
    margin: '20px 0',
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <div id="mebox" style={boxMe}>
            <div style={contentContainer}>
              <span style={meStyle}>Me</span>
              <hr />
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Username"
                  variant="outlined"
                  sx={textFieldStyle}
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <TextField
                  label="*********"
                  type="password"
                  variant="outlined"
                  sx={textFieldStyle}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <div style={buttonContainer}>
                  <Button type="submit" variant="contained" color="primary">
                    Update Username and Password
                  </Button>
                </div>
                <div style={buttonContainer}>
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={() => setEditMode(!editMode)}
                  >
                    {editMode ? 'Done Editing' : 'Edit Photos'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <Card style={{ 
            backgroundColor: 'black',
            width: "400px",
            display: 'flex',
            margin: '2px',
            marginLeft: '1500px',
            marginTop: '-600px',
            borderRadius: '10px', // You can adjust the radius value as needed
          }}>
            <div id="cards">
              {images.map((image, index) => (
                <ImageCard
                  key={index}
                  image={image.image}
                  id={image.id}
                  isEditing={editMode}
                  deleteClothes={deleteClothes}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MePage;