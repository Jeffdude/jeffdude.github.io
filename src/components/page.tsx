import React from 'react';

type Props = {
  children: React.ReactNode;
}

function Page({ children }: Props){
  return <div className='App-page'>{children}</div>
}

export default Page;