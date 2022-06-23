import React, {useState} from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        const logoutConfirm = confirm("Are you sure you want to logout?");
        if(logoutConfirm){
            localStorage.removeItem('CurrentLogin');
            window.location = '/'
        } 
    }
    
    function isLoggedIn() {
        if ( users.length === 0 ) {
            return <li><Link to='/login'>Login</Link></li>                        
        } else {
             return <li><img src={profile} alt="Profile" onClick={toggle} />
                <div style={{display: active ? 'flex' : 'none' }} className="profile-dropdown">
                    <h6>{name}</h6>
                    <Link onClick={toggle} to='/settings'>Settings</Link>
                    <a onClick={logout} href="#">Logout</a>
                </div>
            </li>
        }
    }
    

    return (
        <header className='header-nav'>
            {/* Logo */}
            <div id='logo-header'>
                <h1><Link to='/'>Logo</Link></h1>
            </div>
            {/* Nav-Links */}
            <div>
                <ul>
                    <li><a href="#title1-mission">Our Mission</a></li><span>|</span>
                    <li><a href="/">Services</a></li><span>|</span>
                    <li><Link to='/developers'>Developers</Link></li><span>|</span>
                    <li><Link to="/">Contact</Link></li><span>|</span>
                    {isLoggedIn()}
                    
                </ul>
            </div>
        </header>
    )
}

export default Header;