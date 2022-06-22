import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Body/Header';
import Login from './components/Login';
import Register from './components/Register';
import FrontPage from './components/Body/FrontPage';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
