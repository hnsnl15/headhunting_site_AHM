import React, {useState} from 'react'
import { useEffect } from 'react';
import '../../../css/settings.css';
import profile from '../imgrsr/profile.png'

export default function Settings({currUser}) {

const [toggleActive, setToggleActive] = useState(false);
const [id, setId] = useState(currUser.id);
const [email, setEmail] = useState(currUser.email);
const [firstname, setFirstName] = useState(currUser.firstname);
const [lastname, setLastName] = useState(currUser.lastname);
const [password, setPassword] = useState(currUser.password);
const [age, setAge] = useState(currUser.age);
const [address, setAddress] = useState(currUser.address);
const [position, setPosition] = useState(currUser.position);
const [languages, setLanguages] = useState(currUser.languages);
const [bio, setBio] = useState(currUser.bio);


function toggle(){
    setToggleActive(!toggleActive);
    if (toggleActive){
        document.getElementById('fname').disabled = true;
        document.getElementById('lname').disabled = true;
        document.getElementById('age').disabled = true;
        document.getElementById('address').disabled = true;
        document.getElementById('position').disabled = true;
        document.getElementById('btnSubmit').disabled = true;
        document.getElementById('bio').disabled = true;
    }
    else{
        document.getElementById('fname').disabled = false;
        document.getElementById('lname').disabled = false;
        document.getElementById('age').disabled = false;
        document.getElementById('address').disabled = false;
        document.getElementById('position').disabled = false;
        document.getElementById('btnSubmit').disabled = false;
        document.getElementById('bio').disabled = false;
    }
}


function handleFirstname(e){
    return setFirstName(e.target.value);
}
function handleLastName(e){
    return setLastName(e.target.value);
}
function handleAge(e){
    return setAge(e.target.value);
}

function handleAddress(e){
    return setAddress(e.target.value);
}

function handlePosition(e){
    return setPosition(e.target.value);
}
function handleBio(e){
    return setBio(e.target.value);
}

function handleSubmit(e){
    e.preventDefault();

        let users = JSON.parse(localStorage.getItem('users'));
        let old_users =[...users].filter(user =>{return user.id !== id});
    
        const data = {
            id,
            firstname,
            email,
            lastname,
            password,
            age,
            address,
            bio,
            languages,
            position
        };
        localStorage.setItem('CurrentUser', JSON.stringify(data));
        localStorage.setItem('users', JSON.stringify([...old_users, data]));
    alert('Successfully Updated');
    toggle();
}

  return (
    <form action="" disabled className='settings' onSubmit={handleSubmit}>
        <div className="container">
           <div className='settings-header row py-5'>
                <img className='img img-thumbnail img-fluid col-sm-2' src={profile} alt="Profile" />
                <div className='col-sm-6 name'>
                    <div className='d-flex align-items-center'>
                        <label className='text-right'>Name :</label>
                        <input disabled='true' className='fullname' id='fname' type="text" value={firstname} onChange={handleFirstname} placeholder='First Name' />
                        <input disabled='true' className='fullname' id='lname' type="text" value={lastname}  onChange={handleLastName} placeholder='Last Name' />
                    </div>
                    <div className='d-flex align-items-center'>
                        <label>Age:</label> 
                        <input disabled='true' id='age' type="number" value={age} onChange={handleAge} />
                    </div>
                    <div className='d-flex align-items-center'>
                        <label>Address : </label>.
                        <input disabled='true' id='address' type="text" value={address} onChange={handleAddress} />
                    </div>
                </div>
                <div className='col-sm-4 d-flex justify-content-center align-items-center px-2 toggle'>
                    <div className='d-flex justify-content-start align-items-center' >
                        <label htmlFor="" className='text-dark px-2'>Edit</label>
                            <a className='toggleButton' onClick={toggle}><span className='ms-2 me-1'>ON</span><span>OFF</span>
                                <span style={{transform: toggleActive ? 'translate(100%)' : 'translate(0)',
                                background: toggleActive ? '#f8ec03' : 'white'    }} className='spanToggle'></span>
                            </a>
                    </div>
                   <h4>Profile Settings</h4>
                </div>
           </div>

           <div className='settings-body py-3'>
            <div className='row p-2'>
                    <h3 className='text-dark col-sm-2'>Bio :</h3> 
                    <input disabled='true' id='bio' className='w-sm-75 px-2 py-1 col-sm-10' value={bio} onChange={handleBio} type="text" />
            </div>
            <div className='row p-2'>
                    <h3 className='text-dark col-sm-2'>Position :</h3> 
                    <input disabled='true' id='position' className='w-sm-75 px-2 py-1 col-sm-10' value={position} onChange={handlePosition} type="text" />
            </div>

            <div className='row p-2'>
                    <input id='btnSubmit' disabled='true' type="submit" className='btn btn-primary w-100' value={'Submit'} />
            </div>
            </div>

        </div>
    </form>
  )
}
