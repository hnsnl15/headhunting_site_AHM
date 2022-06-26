import React from 'react'
import MainPageBanner from './MainPageBanner';
import Mission from './Mission';
import OurServices from './OurServices';
import Brands from './Brands';
import Footer from './Footer';

function FrontPage() {
  return (
    <>
    <MainPageBanner/>
    <hr/>
    <br/>
    <br/>
    <Mission/>
    <br/>
    <br/>
    <hr/>
    <br/>
    <br/>
    <OurServices/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <hr/>
    <Brands/>
    <hr/>
    <br/>
    <Footer/>
    </>
  )
}

export default FrontPage;