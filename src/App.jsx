import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Body/Header';
import Login from './components/Login';
import Register from './components/Register';
import MainPageBanner from './components/Body/MainPageBanner';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<MainPageBanner />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
