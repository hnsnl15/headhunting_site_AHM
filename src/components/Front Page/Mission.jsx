import React from 'react'
import SolutionSvg from '../imgrsr/SolutionSvg';

function Mission() {
  return (
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
  )
}

export default Mission;