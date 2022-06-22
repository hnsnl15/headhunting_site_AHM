import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Body/Header';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import FrontPage from './components/Front Page/FrontPage';
import Settings from './components/SettingsFolder/Settings';

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
