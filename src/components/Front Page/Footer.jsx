import React from 'react'

function Footer() {
  return (
    <footer className='footer-navigation'>

        <div className='footer-logo-container'>
            <a href="#" id='footer-logo'>
                <h1>KodeKo</h1>
            </a>
            <p>Your best partner with your scaling.</p>
        </div>

        <div className='footer-contact-container'>
            <p>A PROFESSIONAL DEVELOPER TO HAVE A SUCCESSFUL BUSINESS RIGHT IN FRONT OF YOUR INBOX.</p>
            <form action="#" id='sub-form'>
                <input type="email" placeholder='YOUR E-MAIL' />
                <button id='sub-btn'><span>Subscribe</span></button>
            </form>
        </div>

        <div className='footer-social-container'>
           
        </div>
    </footer>
  )
}

export default Footer