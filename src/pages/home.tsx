import React from 'react';

import Page from '../components/page';
import ProjectList from '../components/project-list';
import SectionTitle from '../components/section-title';

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
        I am a highly driven goal-oriented software engineer with a variety of
        technical experience aquired through self-teaching, industry experience,
        and formal education.  After over five years experience in dynamic
        large-scale system architecture and administration from my time at
        Facebook and ViaSat Inc., I began pursuing my passion for entrepreneurship
        and project-based full stack development. <br/><br/>
        I am a co-owner and CTO of JMKRIDE USA. After two and a
        half years of technical and leadership work, I am in a position where I
        have satisfied the technical business needs at JMKRIDE. My projects
        have been operating successfully for several months at a minimum and are in
        low-commitment maintanance mode. Now, I am looking to continue my
        learning journey and implement exciting and useful projects for other
        businesses I am passionate about.
      </p>
    </div>
    <ProjectList/>
  </Page>
}
export default HomePage;