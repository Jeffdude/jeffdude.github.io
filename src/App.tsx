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
import ScrollRestorer from './components/scroll-restorer';
import { useGetHistory } from './modules/history-context';


function App() {
  const history = useGetHistory();
  const location = new ReactLocation({history});
  return (
    <Router
      location={location}
      routes={pages.map(({path, element}) => ({path, element}))}
    >
      <ScrollRestorer/>
      <div className='App' id='App'>
        <Header/>
        <TabBar/>
        <Outlet/>
      </div>
    </Router>
  );
}

export default App;
