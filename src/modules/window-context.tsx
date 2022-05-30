import React from 'react';

import { headerHeight } from '../constants';

type WindowSize = [Number, Number] 

function useWindowSize(): WindowSize {
  const [size, setSize] = React.useState<WindowSize>([0, 0]);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const WindowSizeContext = React.createContext<WindowSize>([0, 0]);
WindowSizeContext.displayName = "WindowSizeContext";

type Props = {
  children : React.ReactNode
}

function WindowSizeProvider({ children } : Props){
  const size = useWindowSize();
  return <WindowSizeContext.Provider value={size}>
    {children}
  </WindowSizeContext.Provider>
}

export function useGetBodyHeight() {
   const [, windowHeight] = React.useContext(WindowSizeContext);
   return 'calc(' + windowHeight + 'px - ' + headerHeight + 'px)'
}

export default WindowSizeProvider;