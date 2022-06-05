import React from 'react';

import { useGetBodyHeight } from '../modules/window-context';

type Props = {
  children: React.ReactNode;
}

function Page({ children }: Props){
  const bodyHeight = useGetBodyHeight();
  return <div className='App-page' style={{ minHeight: bodyHeight }}>{children}</div>
}

export default Page;