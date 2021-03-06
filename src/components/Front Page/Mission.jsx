import React from 'react'
import SolutionSvg from '../imgrsr/SolutionSvg';
import {motion} from 'framer-motion';

function Mission() {
  return (
    <section className='mission-section'>
      <section className='our-mission'>
        <figure className='our-mission-figure-1'>
            <SolutionSvg />
        </figure>

        <section className='our-mission-text'>
            <h1 id='title1-mission'>Our Mission</h1>
            <h1 id='title2-mission'>#WEARECHANGEMAKERS</h1>
            <p>
            KodeKo aims to create a space where developers can show off their skills and attract potential employers that are looking for developers. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, molestias recusandae? Reprehenderit quos alias assumenda dignissimos dolorum. Hic, minus tempore.
            </p>
        </section>
      </section>

      <section className='mission-cards'>

        <motion.div whileHover={{scale: 1.1}} className='div-mission-1'>
          <div>
            <h2><span>People</span> Management</h2>
              <p>We help companies to build their community of external talents and these talents to integrate into teams. Our goals is to break down barriers between internal talent and external talent.</p>
          </div>
            <figure>
              <img src='https://raw.githubusercontent.com/hnsnl15/headhunting_site_AHM/master/src/components/imgrsr/Peoplemanagemnt.svg' alt="" />
            </figure>
        </motion.div>

        <motion.div whileHover={{scale: 1.1}} className='div-mission-2'>
          <div>
              <h2><span>Project</span> Management</h2>
              <p>We follow up on all projects carried out by external talents. We rely on out innovative digital solutions. We are committed to delivering.</p>
          </div>

          <figure>
            <img src='https://raw.githubusercontent.com/hnsnl15/headhunting_site_AHM/master/src/components/imgrsr/Projectmanagement.svg' alt="" />
          </figure>
        </motion.div>
  
        <motion.div whileHover={{scale: 1.1}} className='div-mission-3'>
          <div>
            <h2><span>Payment</span> Management</h2>
            <p>We develop innovative and secure supplier invoicing, umbrella employment and payroll management solutions for our key account cutomenrs and for our freelance partners. We ensure fair remuneration for external talents.</p>
          </div>
        
          <figure>
            <img src='https://raw.githubusercontent.com/hnsnl15/headhunting_site_AHM/master/src/components/imgrsr/Payment.svg' alt="" />
          </figure>
        </motion.div>
  
      </section>
    </section>
  )
}

export default Mission;