import React, {useState} from 'react'
import '../../../css/settings.css';
import profile from '../imgrsr/profile.png'

export default function Settings({currUser}) {

const [toggleActive, setToggleActive] = useState(false);
const [id, setId] = useState(currUser.id);
const [fname, setFname] = useState(currUser.firstname);
const [lname, setLname] = useState(currUser.lastname);
const [address, setAddress] = useState();


function toggle(){
    setToggleActive(!toggleActive);

    if (toggleActive){
        document.getElementById('fname').disabled = true;
        document.getElementById('lname').disabled = true;
        document.getElementById('age').disabled = true;
        document.getElementById('address').disabled = true;
    }
    else{
        document.getElementById('fname').disabled = false;
        document.getElementById('lname').disabled = false;
        document.getElementById('age').disabled = false;
        document.getElementById('address').disabled = false;
    }
}

function handleFname(e){
    return setFname(e.target.value);
}
function handleLname(e){
    return setLname(e.target.value);
}

function handleAddress(e){
    return setAddress(e.target.value);
}
function disable(){
    
   
}
  return (
    <form action="" disabled className='settings'>
        <div className="container">
           <div className='settings-header p-2 row'>
                <img className='img img-thumbnail img-fluid col-sm-2' src={profile} alt="Profile" />
                <div className='col-sm-6 name'>
                    <div className='d-flex align-items-center'>
                        <label className='text-right'>Name :</label>
                        <input disabled='true' className='fullname' id='fname' type="text" value={fname} onChange={handleFname} placeholder='First Name' />
                        <input disabled='true' className='fullname' id='lname' type="text" value={lname}  onChange={handleLname} placeholder='Last Name' />
                    </div>
                    <div className='d-flex align-items-center'>
                        <label>Age:</label> 
                        <input disabled='true' id='age' type="number" value={'25'} />
                    </div>
                    <div className='d-flex align-items-center'>
                        <label>Address : </label>.
                        <input disabled='true' id='address' type="text" value={'Agusan del Sur, Philippines'} />
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


           <div className='settings-body'>
            <div className='row p-2'>
                    <h3 className='text-dark col-sm-2'>Position :</h3> 
                    <input className='w-75 px-2 py-1 col-sm-10' type="text" />
            </div>
            <div className='row p-2'>
                    <h4 className='text-dark col-sm-2'>Skills :</h4> 
                    <input className='px-2 py-1 col-sm-6' type="text" />
                    <input type="button" className='px-2 py-1 col-sm-2 mx-1 btn btn-info' value={'Add'} />
            </div>
            <div>
                    <table className='col-sm-8 bg-dark text-center offset-sm-2 striped'>
                        <thead >
                            <tr>
                                <td className='text-light p-2'><h5>Skills</h5></td>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            <tr>
                                <td className='text-dark p-1'>HTML</td>
                                <td><input type="button" className='btn btn-danger' value={'Remove'} /></td>
                            </tr>
                            <tr>
                                <td className='text-dark p-2'>CSS</td>
                                <td><input type="button" className='btn btn-danger' value={'Remove'} /></td>
                            </tr>
                            <tr>
                                <td className='text-dark p-2'>Java Script</td>
                                <td><input type="button" className='btn btn-danger' value={'Remove'} /></td>
                            </tr>
                            <tr>
                                <td className='text-dark p-2'>Its A trap</td>
                                <td><input type="button" className='btn btn-danger' value={'Remove'} /></td>
                            </tr>
                            <tr>
                                <td className='text-dark p-2'>React JS</td>
                                <td><input type="button" className='btn btn-danger' value={'Remove'} /></td>
                            </tr>
                                
                        </tbody>
                    </table>
            </div>
            <div className='row p-2'>
                    <input type="button" className='btn btn-primary' value={'Submit'} />
            </div>
            </div>

        </div>
    </form>
  )
}
