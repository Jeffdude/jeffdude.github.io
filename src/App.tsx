import React from 'react';

import {
  Outlet,
  ReactLocation,
  Router,
} from "@tanstack/react-location";

import './App.css';

import Header from './components/header';
import HomePage from './pages/home';

const location = new ReactLocation();

function App() {
  return (
    <Router
      location={location}
      routes={[
        {path: "/", element: <HomePage/>},
      ]}
    >
      <div className='App'>
        <Header/>
        <Outlet/>
      </div>
    </Router>
  );
}

export default App;
