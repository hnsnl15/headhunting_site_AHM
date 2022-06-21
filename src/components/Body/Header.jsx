import React from 'react';
import {Link} from 'react-router-dom';

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
                    <li><Link to='/Login'>Login</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;