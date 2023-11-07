import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import useNavigate
import StarterPage from './components/StarterPage';
import Login from './components/Login';
import Signup from './components/Signup';
import MainPage from './components/MainPage';
import UploadCloset from './components/UploadCloset';
import MePage from './components/MePage';
import Navbar from './components/Navbar';


function App() {
  const [clothes,setClothes] = useState([])
  const [clothesData,setClothesData] = useState([])
  const [user, setUser] = useState('');

//////////////////////////////////////////////////////////////////////////////////////////////////////////

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

  useEffect(()=>{
    fetch('/api/clothes')
    .then(response => response.json())
    .then(data => {setClothes(data),setClothesData(data)})
  },[])

  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<StarterPage/>} />
        <Route path="/NavBar" element={<Navbar setUser={setUser} />} />
        <Route path="/Login" element={<Login setUser={setUser} />} />
        <Route path="/Signup" element={<Signup setUser={setUser} />} />
        <Route path="/UploadCloset" element={<UploadCloset user={user}/>} />
        <Route path="/MainPage" element={<MainPage setUser={setUser} clothes={clothes} setClothes={setClothes} setClothesData={setClothesData} user={user} clothesData={clothesData}/>} />
        <Route path="/MePage" element={<MePage setUser={setUser} user={user} clothes={clothes} setClothes={setClothes} setClothesData={setClothesData} clothesData={clothesData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
