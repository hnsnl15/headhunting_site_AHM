import React from 'react';
import Svg1 from '../imgrsr/Svg1';

function MainPageBanner() {
  return (
    <div className='main-banner'>
        <section className='main-banner-section-1'>
            <h1>
              We are the global<br />services provider for your<br />
              external workforce.
            </h1>
            
        </section>
        <section className='main-banner-section-2'>
            <div>
              <Svg1 width={700}/> 
            </div>
        </section>
    </div>
  )
}

export default MainPageBanner;