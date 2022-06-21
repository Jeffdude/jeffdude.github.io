import React, { useLayoutEffect, useReducer } from 'react';

import { useGetHistory } from '../modules/history-context';

type ScrollRestorerProps = {
  disabled?: boolean;
}
type ScrollLocation = {
  pathname: string,
  location: [x: number, y: number],
}
type ScrollRestorerState = {
  currentPathname: string,
  scrollLocations: ScrollLocation[],
}

const ScrollRestorer: React.FC<ScrollRestorerProps> = ({disabled = false}: ScrollRestorerProps = {}): JSX.Element => {
  const scrollReducer = (state: ScrollRestorerState, {pathname, location}: ScrollLocation): ScrollRestorerState => {
    if(pathname === state.currentPathname) return state;
    const previousLocation: ScrollLocation = {
      pathname: state.currentPathname,
      location,
    }
    const foundIndex: number = state.scrollLocations.findIndex(
      (searchLocation: ScrollLocation) => searchLocation.pathname === state.currentPathname
    )
    if(foundIndex > -1){
      return {
        currentPathname: pathname,
        scrollLocations: [
          previousLocation,
          ...state.scrollLocations.splice(foundIndex, 1)
        ],
      }
    }
    return {
      currentPathname: pathname,
      scrollLocations: [...state.scrollLocations, previousLocation]
    }
  }

  const [scrollState, dispatch]: [ScrollRestorerState, (l: ScrollLocation) => void] = useReducer(
    scrollReducer,
    {currentPathname: '/', scrollLocations: [{pathname: '/', location: [0,0]}]},
  )

  const lookupLocation = React.useCallback(
    (pathname: string): [x: number, y: number] => {
      const foundLocation = scrollState.scrollLocations.find(
        (searchLocation: ScrollLocation) => searchLocation.pathname === pathname
      )
      if(foundLocation){
        return foundLocation.location
      } else {
        return [0,0]
      }
    },
    [scrollState]
  )

  const history = useGetHistory();
  useLayoutEffect(() => {
    return history.listen(
      ({location}) => {
        const pathname = location.pathname;
        dispatch({pathname, location: [window.scrollX, window.scrollY]});
        if(!disabled) setTimeout(() => window.scrollTo(...lookupLocation(pathname)), 2);
      }
    );
  }, [history, disabled, lookupLocation])
  return <div/>
}

export default ScrollRestorer;