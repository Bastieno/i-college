import React, { useState, useContext } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import AppContext from '../contexts/appContext';

const getTheme = (mode:string) => ({
  ...theme,
  colors: theme.colors.modes[mode] || theme.colors
});

const modes: string[] = ['light', 'dark'];

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [mode, setMode] = useState(modes[0]);
  const theme = getTheme(mode);
  const toggleMode = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length;
    setMode(modes[i]);
  }

  return (
    <AppContext.Provider value={{ toggleMode, mode }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default MyApp;
