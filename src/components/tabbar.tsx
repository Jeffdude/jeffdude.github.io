import React from 'react';

import { useMatchRoute, useNavigate } from '@tanstack/react-location';

import {Page, pages} from '../constants';

type Props = {
  title: string;
  path: string;
  index: number;
}

function Tab({title, path, index} : Props){
  const navigate = useNavigate();
  const matchRoute = useMatchRoute();
  const selected : boolean = !!matchRoute({to: path});

  return <button 
    onClick={() => {if(!selected) navigate({to: path})}}
    className={'tabbar-tab ' + (selected ? "selected" : "unselected")}
  >
    <h4 className={"tabbar-tab-text " + (selected ? "selected" : "unselected")}>
      {title}
    </h4>
  </button>
}

function TabBar() {
  const tabPages : Page[] = pages.filter(({intabbar}) => intabbar)
  return <div className="tabbar-container">
    <div className="tabbar-margin left"/>
    {
      tabPages.map(({title, path}, index) => (
        <Tab key={index} {...{title, path, index}}/>
      ))
    }
    <div className="tabbar-margin right"/>
  </div>
}

export default TabBar;