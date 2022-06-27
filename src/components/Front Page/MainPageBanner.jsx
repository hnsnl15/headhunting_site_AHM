import React from 'react';
import Svg1 from '../imgrsr/Svg1';
import {motion} from 'framer-motion'

function MainPageBanner() {

  
  return (
    <div className='main-banner'>
        <section className='main-banner-section-1'>
            <h1>
            KodeKo is the site to share your coding journey. Showcase your projects. Engage with the community and build relationships within the industry. Join now and help your future employer find you!
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