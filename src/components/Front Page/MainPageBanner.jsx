import React from 'react';
import Svg1 from '../imgrsr/Svg1';
import {motion} from 'framer-motion'

function MainPageBanner() {

  
  return (
    <div className='main-banner'>
        <section className='main-banner-section-1'>
            <h1>
              We are the global services provider for your external workforce.
            </h1>
            
        </section>
        <section className='main-banner-section-2'>
            <motion.div whileHover={{scale: 1.1}}>
              <Svg1/> 
            </motion.div>
        </section>
    </div>
  )
}

export default MainPageBanner;