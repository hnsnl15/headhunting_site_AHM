import React from 'react'
import '../../../css/settings.css';
import profile from '../imgrsr/profile.png'

export default function Settings() {


  return (
    <form action="" className='settings py-1'>
        <div className="container">
           
           <div className='settings-header p-2 row'>
            
                <img className='img img-thumbnail img-fluid col-sm-2' src={profile} alt="Profile" />
                <div className='col-sm-6 name'>
                    <div>
                        <label className='text-right'>Name : </label><input type="text" value={'Adonis'} />
                    </div>
                    <div>
                        <label>Age:</label> <input type="text" value={'25'} />
                    </div>
                    <div>
                        <label>Address : </label><input type="text" value={'Agusan del Sur, Philippines'} />
                    </div>
                </div>
                <div className='col-sm-4 d-flex justify-content-center align-items-center px-2'>
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
                    <input type="button" className='px-2 py-1 col-sm-2 mx-1 btn btn-primary' value={'Add'} />
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
                            </tr>
                            <tr>
                                <td className='text-dark p-2'>CSS</td>
                            </tr>
                            <tr>
                                <td className='text-dark p-2'>Java Script</td>
                            </tr>
                            <tr>
                                <td className='text-dark p-2'>Its A trap</td>
                            </tr>
                            <tr>
                                <td className='text-dark p-2'>React JS</td>
                            </tr>
                                
                        </tbody>
                    </table>
            </div>
            <div className='row p-2'>
                    <input type="button" className='btn btn-success' value={'Submit'} />
            </div>
            </div>

        </div>
        </form>
  )
}
