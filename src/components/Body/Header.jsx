import React, {useState} from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import profile from '../imgrsr/profile.png'

function Header() {
    
    const [active, setActive] = useState(false);
    let userData = localStorage.getItem('CurrentLogin');
    const [users, setUsers] = useState( userData ? JSON.parse(userData) : []);
    
    let name = users.map(user =>{
        return <h6>{user.firstname} {user.lastname}</h6>
    })

    function toggle(){
        if(name == ''){
        }else{
            setActive(!active);
        }
    }

    

    function logout(){
        const logoutConfirm = confirm("Are you sure you wan't to logout?");
        if(logoutConfirm){
                localStorage.removeItem('CurrentLogin');
                window.location = './login'
            
        } 
    }
    

    

    return (
        <header className='header-nav'>
            {/* Logo */}
            <div id='logo-header'>
                <h1><a href='/'>Logo</a></h1>
            </div>
            {/* Nav-Links */}
            <div>
                <ul>
                    <li><a href="#title1-mission">Our Mission</a></li><span>|</span>
                    <li><a href="/">Services</a></li><span>|</span>
                    <li><a href="/">Developers</a></li><span>|</span>
                    <li><a href="/">Contact</a></li>
                    <li><Link to='/Login'>Login</Link></li>
                    <li><img src={profile} alt="Profile" onClick={toggle} />
                    <div style={{display: active ? 'flex' : 'none' }} className="profile-dropdown">
                        <h6>{name}</h6>
                        <Link onClick={toggle} to='/Settings'>Settings</Link>
                        <a onClick={logout} href="#">Logout</a>
                    </div>
                    </li>
                    
                </ul>
            </div>
        </header>
    )
}

export default Header;