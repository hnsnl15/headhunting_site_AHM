import React from 'react';

function Header() {
    return (
        <header className='header-nav'>
            {/* Logo */}
            <div id='logo-header'>
                <h1><a href='/'>Logo</a></h1>
            </div>
            {/* Nav-Links */}
            <div>
                <ul>
                    <li><a href="/">Our Mission</a></li><span>|</span>
                    <li><a href="/">Services</a></li><span>|</span>
                    <li><a href="/">Developers</a></li><span>|</span>
                    <li><a href="/">Contact</a></li>
                    <li><a href='../components/Login.jsx'>Log In</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;