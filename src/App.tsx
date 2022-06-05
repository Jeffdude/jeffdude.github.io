import React from 'react';

import {
  Outlet,
  ReactLocation,
  Router,
} from "@tanstack/react-location";

import './App.css';

import Header from './components/header';
import TabBar from './components/tabbar';

import { pages } from './constants';

const location = new ReactLocation();

function App() {
  return (
    <Router
      location={location}
      routes={pages.map(({path, element}) => ({path, element}))}
    >
      <div className='App'>
        <Header/>
        <TabBar/>
        <Outlet/>
      </div>
    </Router>
  );
}

export default App;
