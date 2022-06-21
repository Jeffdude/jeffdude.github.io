import React from 'react';

import { BrowserHistory, createBrowserHistory } from 'history';

let history = createBrowserHistory();
const HistoryContext = React.createContext<BrowserHistory>(history);

export function useGetHistory() {
  return React.useContext(HistoryContext);
}

type ProviderProps = {
  children: React.ReactNode;
}
const HistoryProvider: React.FC<ProviderProps> = ({children}: ProviderProps): JSX.Element => {
  return <HistoryContext.Provider value={history}>
    {children}
  </HistoryContext.Provider>
}

export default HistoryProvider;