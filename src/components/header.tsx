import React from 'react';

import AtomLogo from '../atom.svg';

function Header(){
  return (
    <div className="App-header">
      <div className="Header-title">
        <object data={AtomLogo} aria-label="logo"/>
        <div>
          <h2>Jeffrey Milling</h2>
          <p>Full Stack Developer</p>
        </div>
      </div>
      <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  )
}
export default Header;