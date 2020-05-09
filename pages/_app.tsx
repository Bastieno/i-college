import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyles';
import { getTheme } from '../utils';
import AppContext from '../contexts/appContext';
import 'antd/dist/antd.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const modes: string[] = ['light', 'dark'];
  const [mode, setMode] = useState(modes[0]);
  const theme = getTheme(mode);

  const toggleMode = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length;
    setMode(modes[i]);
  };

  return (
    <AppContext.Provider value={{ toggleMode, mode }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default MyApp;
