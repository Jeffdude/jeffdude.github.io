import React from 'react';

import Footer from './footer'

type Props = {
  children: React.ReactNode;
  noFooterDivider?: boolean;
}

function Page({ children, noFooterDivider = false }: Props){
  return (
    <div className='App-page'>
      {children}
      <Footer noDivider={noFooterDivider}/>
    </div>
  )
}

export default Page;