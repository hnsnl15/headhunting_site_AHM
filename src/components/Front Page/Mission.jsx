import React from 'react'
import SolutionSvg from '../imgrsr/SolutionSvg';

function Mission() {
  return (
    <>
    <section className='our-mission'>
        <figure className='our-mission-figure-1'>
            <SolutionSvg/>
        </figure>

        <section className='our-mission-text'>
            <h1 id='title1-mission'>Our Mission</h1>
            <h1 id='title2-mission'>#WEAREALLCHANGEMAKERS</h1>
            <p>
                We help companies manage their tranformation by connecting them with the best freelance experts or highly specialized SMEs.<br />We manage their extended workforce from start to finish, from people to projects and billing.<br />
                Our goal is to bring together large organizations, pure-player SMEs, start-ups and freelancers and help them, to become change makers.
            </p>
        </section>

    </section>

      <section className='mission-cards'>

        <div className='div-mission-1'>
          <h2><span>People</span> Management</h2>
            <p>We help companies to build their community of external talents and these talents to integrate into teams. Our goals is to break down barriers between internal talent and external talent.</p>
        </div>

        <div className='div-mission-2'>
          <h2><span>Project</span> Management</h2>
          <p>We follow up on all projects carried out by external talents. We rely on out innovative digital solutions. We are committed to delivering.</p>
        </div>
  
        <div className='div-mission-3'>
          <h2><span>Payment</span> Management</h2>
          <p>We develop innovative and secure supplier invoicing, umbrella employment and payroll management solutions for our key account cutomenrs and for our freelance partners. We ensure fair remuneration for external talents.</p>
        </div>
  
      </section>
    </>
  )
}

export default Mission;