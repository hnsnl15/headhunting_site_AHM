import React from 'react'

function OurServices() {
  return (
    <section className='our-services'>
        <h1>Our Services</h1>
        
        <figure className='our-services-fig-1'>
            <img src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg" alt="A man smiling" />

            <figcaption>
                <h2>FIND THE FUTURE TALENTS</h2>
                <p>Our job is to respond to your challenges of tomorrow thanks to our sourcing model which offers a return within 48 hours to your request, and to delegate your research to our specialists, saving you time at all stages of the process.</p>
                
                <a href='https://google.com'>Contact Us</a>
            </figcaption>
        </figure>

        <figure className='our-services-fig-2'>
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="A man smiling" />

            <figcaption>
                <h2>INTERNATIONAL MOBILITY</h2>
                <p>As a consultant, you may be called upon to work on international assignments, even abroad. We have more than 20 years' of experience in providing support to consultants all over the world to facilitate their secondment or expatriation.</p>
                <a href='https://google.com'>Contact Us</a>
            </figcaption>
        </figure>

    </section>
  )
}

export default OurServices