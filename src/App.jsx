import React from 'react';
import './App.css';
import mainContext from './context/mainContext';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/NavBar';
import RegisterPage from './pages/RegisterPage';
import {LoginPage} from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ReservationsPage from './pages/ReservationsPage';



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/reservations' element={<ReservationsPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;


