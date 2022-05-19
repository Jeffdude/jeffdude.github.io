import React from 'react';

import {
  Outlet,
  ReactLocation,
  Router,
} from "@tanstack/react-location";

import './App.css';

import { ReactComponent as AtomLogo } from './atom.svg';

import HomePage from './pages/home'

const location = new ReactLocation();

function App() {
  return (
    <Router
      location={location}
      routes={[
        {path: "/", element: <HomePage/>},
      ]}
    >
      <div className="App">
        <header className="App-header">
          <div style={{width: "800px"}}>
            <AtomLogo/>
          </div>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>
          <Outlet/>
        </body>
      </div>
    </Router>
  );
}

export default App;
