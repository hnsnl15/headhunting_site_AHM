import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            {/* Logo */}
            <div id='logo-header'>
                <h1>Logo</h1>
            </div>
            {/* Nav-Links */}
            <div>
                <ul>
                    <li><a href="#">Our Mission</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;