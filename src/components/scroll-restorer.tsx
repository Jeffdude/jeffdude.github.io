import React, { useEffect, useReducer, useRef } from 'react';
import { useMatch, useResolvePath } from '@tanstack/react-location';

type ScrollRestorerProps = {
  disabled?: boolean;
}

type ScrollLocation = {
  path: string,
  location: [x: number, y: number],
}

type ScrollRestorerState = {
  currentPathname: string,
  scrollLocations: ScrollLocation[],
}


const ScrollRestorer: React.FC<ScrollRestorerProps> = ({disabled = false}: ScrollRestorerProps = {}): JSX.Element => {
  const scrollReducer = (state: ScrollRestorerState, pathname: string): ScrollRestorerState => {
    if(pathname === state.currentPathname) return state;
    const previousLocation: ScrollLocation = {
      path: state.currentPathname,
      location: [window.scrollX, window.scrollY],
    }
    const foundIndex: number = state.scrollLocations.findIndex(
      (searchLocation: ScrollLocation) => searchLocation.path === pathname
    )
    if(foundIndex > -1){
      return {
        currentPathname: pathname,
        scrollLocations: state.scrollLocations.filter(({path}) => path !== pathname),
      }
    }
    return {
      currentPathname: pathname,
      scrollLocations: [...state.scrollLocations, previousLocation]
    }
  }

  const [scrollState, dispatch]: [ScrollRestorerState, (pathname: string) => void] = useReducer(
    scrollReducer,
    {currentPathname: '', scrollLocations: []},
  )
  /*
  const resolvePath = useResolvePath();
  const pathname = resolvePath(".")
  */
  const pathname = window.location.pathname;
  console.log({pathname})
  useEffect(() => {
    console.log({pathname, scrollState, disabled})
    const lookupLocation = (): [x: number, y: number] => {
      const foundLocation = scrollState.scrollLocations.find(
        (searchLocation: ScrollLocation) => searchLocation.path === pathname
      )
      if(foundLocation){
        return foundLocation.location
      } else {
        return [0,0]
      }
    }
    dispatch(pathname);
    if(!disabled) window.scrollTo(...lookupLocation());
  }, [pathname, scrollState, disabled])
  return <div/>
}

export default ScrollRestorer;