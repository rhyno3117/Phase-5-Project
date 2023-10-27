import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StarterPage from './components/StarterPage';
import Login from './components/Login';
import Signup from './components/Signup';
import MainPage from './components/MainPage';
import UploadCloset from './components/UploadCloset';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StarterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/UploadCloset" element={<UploadCloset/>} />
        <Route path="/MainPage" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
