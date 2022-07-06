import React from 'react';

import { Link as RLLink } from '@tanstack/react-location';

type LinkProps = {
  children?: React.ReactNode | string,
  to: string,
  [x:string]: any,
}

function Link({children, to, ...props}: LinkProps) {
  const internal = ['/', '.'].includes(to[0]);
  if(internal){
    return <RLLink to={to} {...props}>{children}</RLLink>
  }
  return <a
    href={ to }
    target="_blank" rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
}

export default Link;