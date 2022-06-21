import React from 'react';
import svg1 from '../imgrsr/svg1.svg'

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
              <img src={svg1} alt="A man standing" /> {/* nice one fafa adonis */}
            </div>
        </section>
    </div>
  )
}

export default MainPageBanner;