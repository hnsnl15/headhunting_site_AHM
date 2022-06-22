import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Body/Header';
import Login from './components/Login';
import Register from './components/Register';
<<<<<<< HEAD
import FrontPage from './components/Body/FrontPage';
=======
import MainPageBanner from './components/Body/MainPageBanner';
import Settings from './components/Settings';
>>>>>>> 3b374d7321347de84fbd9c2d87fc3830e0fb9471

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App
