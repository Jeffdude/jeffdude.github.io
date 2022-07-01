import React from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import { GrMail } from 'react-icons/gr';
import { IoDocumentText } from 'react-icons/io5'

import AtomLogo from '../assets/atom.svg';

function Header(){
  return (
    <div className="App-header">
      <div className='App-inner-header'>
        <div className="Header-title">
          <object data={AtomLogo} aria-label="logo"/>
          <div>
            <h2 id="row">
              <div style={{fontStyle: "normal", paddingRight: "0.1em"}}>
                👋
              </div>
              Hi, I'm Jeff!
            </h2>
            <p>Jeffrey Milling · Full Stack Developer</p>
            <div id="hline" style={{width: "100%"}}/>
          </div>
        </div>
        <div className="Header-icons">
          <div id="cornerbordercontent">
            <a href="https://www.linkedin.com/in/jeffrey-milling"><FaLinkedin title="My LinkedIn"/></a>
            <a href="https://github.com/Jeffdude"><FaGithub title="My Github"/></a>
            <a href={process.env.PUBLIC_URL + "/jeffrey-milling-resume.pdf"}><IoDocumentText title="My Resume"/></a>
            <a href="mailto:jeffmilling@gmail.com"><GrMail title="Email Me"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;