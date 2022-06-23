import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Body/Header';
import Footer from './components/Body/Footer';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default App
