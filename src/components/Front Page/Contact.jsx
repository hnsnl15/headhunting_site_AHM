import React from 'react'
import '../../../css/contact.css';

export default function Contact() {
  return (
    <form className='contact' action="">
        <h3 className='text-center mt-1'>Contact Us</h3>
        <div className='container row d-flex justify-content-between'>
            <div className="form-design col-sm-6 ms-5">
              <div className='d-flex'>
                  <span>
                    <svg className='bg-light text-dark p-2 rounded-circle' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                  </span>
                  <span className='ms-2' >
                      <p className='text-primary'><h5>Address</h5></p>
                      <p>Manila, Philippines</p>
                  </span>
              </div>
              <div className='d-flex'>
                  <span>
                    <svg className='bg-light text-dark p-2 rounded-circle' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                  </span>
                  <span className='ms-2' >
                      <p className='text-primary'><h5>Phone</h5></p>
                      <p>+63 912-179-3542</p>
                  </span>
              </div>
              <div className='d-flex'>
                  <span>
                    <svg className='bg-light text-dark p-2 rounded-circle' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg>
                    
                  </span>
                  <span className='ms-2' >
                      <p className='text-primary'><h5>Email Address</h5></p>
                      <p>lambanog_info@gmail.com</p>
                  </span>
              </div>
                
            </div>
            <div className="form-input col-sm-5 text-dark p-5">
                <h5>Send message</h5>
                <div className='row d-flex align-items-center'>
                  <input className='col-sm-12' type="text" name='firstname' placeholder='Full Name' />
                </div>
                <div className='row d-flex align-items-center'>
                 <input className='col-sm-12' type="text" name='email' placeholder='Email Address' />
                </div>
                <div className='row d-flex align-items-center'>
                  <textarea name="message" id="message" cols="30" rows="5" placeholder='Message'></textarea>
                </div>
                <input type="submit" className='btn btn-secondary rounded-0' value={'SEND'} />
            </div>
        </div>
    </form>
  )
}
