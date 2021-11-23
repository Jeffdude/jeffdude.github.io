import React from 'react';
import styled from 'styled-components';


import AtomSvgData from './assets/atom.svg';
import './App.css';

const AtomLogo = styled.div`
  width: 800px;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AtomLogo>
          <object data={AtomSvgData} aria-label="atom-logo"/>
        </AtomLogo>
        <p>
            Hello World!
        </p>
      </header>
    </div>
  );
}

export default App;
