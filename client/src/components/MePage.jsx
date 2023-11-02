import React, { useState } from 'react';
import Navbar from './Navbar';
import { TextField, Button } from '@mui/material';

function MePage({ setUser, user }) {
  const boxMe = {
    border: '10px solid #000',
    height: '35vh',
    width: '50vh',
    padding: '10px',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    marginTop: '50px',
  };

  const meStyle = {
    fontWeight: 'bold',
    fontSize: '60px',
    textAlign: 'center',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  };

  const lineStyle = {
    width: '100%',
    borderTop: '3px solid black',
    margin: '10px 0',
  };

  const buttonContainer = {
    display: 'flex',
    justifyContent: 'center',
  };

  const textFieldStyle = {
    width: '100%',
    margin: '20px 0',
  };

  const [formData, setFormData] = useState({
    username: user.user,
    password: '',
  });

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

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={boxMe}>
        <span style={meStyle}>Me</span>
        <hr style={lineStyle} />

        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            style={textFieldStyle}
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            style={textFieldStyle}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />

          <div style={buttonContainer}>
            <Button type="submit" variant="contained" color="primary">
              Update Username and Password
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MePage;
