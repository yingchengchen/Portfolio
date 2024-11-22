import React from 'react';
import { isMobile } from 'react-device-detect';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Banner from './banner/Banner';
import Body from './body/Body';
import Footer from './Footer';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={"App-root ${isMoblie ? 'App-root-mobile':''}"}>
        <Banner />
        <Body />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
