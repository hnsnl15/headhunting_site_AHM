import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Contact from './components/Front Page/Contact';
import Header from './components/Body/Header';
import Footer from './components/Body/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import FrontPage from './components/Front Page/FrontPage';
import Settings from './components/SettingsFolder/Settings';
import Developers from './components/Developers/Developers';

function App() {
  let currUserLocal = localStorage.getItem('CurrentUser');
  const [currUser, setCurrUser] = useState( currUserLocal
                                            ? JSON.parse(currUserLocal)
                                            : null );

  return (
  <Router>
    <Header />

    <Routes>
      <Route path='/' element={<FrontPage />} />
      <Route path='/developers' element={
        <Developers 
          currUser = {currUser}  
        />
      } />
      <Route path='/login' element={
        <Login 
          setCurrUser = {setCurrUser} 
        />
      } />
      <Route path='/register' element={<Register />} />
      <Route path='/settings' element={
        <Settings 
          currUser = {currUser}
        />
      } />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </Router>
  )
}

export default App
