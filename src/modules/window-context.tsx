import React from 'react';

import { topToolbarHeight } from '../constants';

type WindowSize = {
  innerWidth: number,
  innerHeight: number,
  scrollbarWidth: number,
} 

const DEFAULT_WINDOW_SIZE = {innerWidth: 0, innerHeight: 0, scrollbarWidth: 0};

function useWindowSize(): WindowSize {
  const [size, setSize] = React.useState<WindowSize>(DEFAULT_WINDOW_SIZE);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize({
        innerWidth: window.innerWidth, 
        innerHeight: window.innerHeight,
        scrollbarWidth: window.innerWidth - document.body.clientWidth,
      });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const WindowSizeContext = React.createContext<WindowSize>(DEFAULT_WINDOW_SIZE);
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
   const { innerHeight } = React.useContext(WindowSizeContext);
   return 'calc(' + innerHeight + 'px - ' + topToolbarHeight + 'px)'
}

export function useGetViewPortWidth() {
  const { scrollbarWidth } = React.useContext(WindowSizeContext);
  return 'calc( 100vw - ' + scrollbarWidth + 'px)';
}

export default WindowSizeProvider;