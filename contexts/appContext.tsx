import { createContext } from 'react';

const AppContext = createContext({
  toggleMode: () => {},
  mode: '',
});

export default AppContext;
