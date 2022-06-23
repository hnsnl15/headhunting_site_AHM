import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import App from './App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import FrontPage from './components/Front Page/FrontPage';
import Settings from './components/SettingsFolder/Settings';
import Developers from './components/Developers/Developers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='' element={<FrontPage />} />
        <Route path='developers' element={<Developers />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Routes>
  </Router>
)
