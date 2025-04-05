import React from 'react';

import Page from '../components/page';
import ProjectList from '../components/project-list';
import FAQ from '../components/faq';
import { Link } from '@tanstack/react-location';

function HomePage(){
  return <Page>
    <div className="bio">
      <div className="selfie">
        <img src="/bio-selfie.jpeg" className='selfie' alt="Jeff Milling selfie"/>
        <p className="caption">
          A selfie from middle-of-nowhere Idaho during a cross-country road trip circa 2020
        </p>
      </div>
      <p className="summary">
        I am a highly driven goal-oriented software engineer with a variety of technical
        experience aquired through self-teaching, industry experience, and formal education.
        After over five years experience in dynamic large-scale system architecture and
        administration from my time at Meta and ViaSat, I dove headfirst into the world
        of Javascript and React. Since then, I've handled scaling bottlenecks,
        tech debt re-architectures, and set up several greenfield public sites. 
        <br/><br/>
        At JMKRIDE, I dove into the deep end of Javascript and the React
        framework by creating four bespoke websites from scratch, two of which
        include 
        {' '}<Link to={'/project/backend'}>custom JWT-based secure user authentication</Link>
        {' '} and are still in use by JMKRide's employees and customers today.
        After that I briefly joined on my old classmate's startup GoSchoolBox,
        who's website I enabled for 2factor authentication, and helped recover
        from a steep dive of scaling difficulties and cloud server costs.
        <br/><br/>
        Nowadays, I am working for Trellisware, which is a government contractor so I can't 
        share much details. But, I have helped re-architect and future-proof a
        large legacy React codebase. In the past year I have lead our teams'
        transition to Typescript, and full internationalization. I also upgraded
        and re-architected a medium-sized React-Native android application.
        <br/><br/>
        This brings us to today! I am interested in obtaining a part-time remote
        contract work so that I can continue to tackle interesting challenges,
        bring my unique perspective to new tech ecosystems, and grow my
        experience and career to everyone's benefit.
      </p>
    </div>
    <ProjectList/>
    {/* <FAQ/> */}
  </Page>
}
export default HomePage;