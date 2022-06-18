import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <iframe src="https://www.youtube.com/embed/fcZXfoB2f70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <Footer/>
    </div>
  )
}

export default App
