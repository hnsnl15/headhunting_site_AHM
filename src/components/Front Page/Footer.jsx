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
           <div className='social-logos'>
                <h4>FOLLOW US</h4>
                <span>
                    <a href="#">
                        <i class="fa-brands fa-instagram" id='ig'></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-facebook" id='fb'></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-twitter-square" id='twitter'></i>
                    </a>
                </span>
           </div>

           <div className='company-contact-info'>
                <h4>CALL US</h4>
                <p>+123-5678-0956</p>
           </div>
        </div>
    </footer>
  )
}

export default Footer