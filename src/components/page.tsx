import React from 'react';

import ContactMeFooter from './contact-me-footer'

type Props = {
  children: React.ReactNode;
}

function Page({ children }: Props){
  return (
    <div className='App-page'>
      {children}
      <ContactMeFooter/>
    </div>
  )
}

export default Page;