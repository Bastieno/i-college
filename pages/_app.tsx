import React, { useState } from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import NProgress from 'nprogress';
import { GlobalStyle } from '../styles/globalStyles';
import { getTheme } from '../utils';
import AppContext from '../contexts/appContext';
import { version } from '../package.json';
import 'antd/dist/antd.css';

const showProgressBar = (delay: number) => {
  const timer = setTimeout(() => NProgress.start(), delay);
  Router.events.on('routeChangeComplete', () => stopProgress(timer));
  Router.events.on('routeChangeError', () => stopProgress(timer));
};

const stopProgress = (timer: number) => {
  clearTimeout(timer);
  NProgress.done();
};

Router.events.on('routeChangeStart', () => showProgressBar(300));

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
        <Head>
          <title>{`iCollege v${version}`}</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default MyApp;
