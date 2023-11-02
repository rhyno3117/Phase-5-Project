import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import useNavigate

import StarterPage from './components/StarterPage';
import Login from './components/Login';
import Signup from './components/Signup';
import MainPage from './components/MainPage';
import UploadCloset from './components/UploadCloset';
import MePage from './components/MePage';

function App() {

  const [user, setUser] = useState('');

  useEffect(() => {
    fetch('/api/check_session')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.user) {
          setUser(data)
        }
      })
  }, [])

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StarterPage/>} />
        <Route path="/Login" element={<Login setUser={setUser} />} />
        <Route path="/Signup" element={<Signup setUser={setUser} />} />
        <Route path="/UploadCloset" element={<UploadCloset />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/MePage" element={<MePage setUser={setUser} user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
