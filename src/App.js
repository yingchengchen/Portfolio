import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';  // Updated import
import CssBaseline from '@mui/material/CssBaseline';  // Updated import
import Banner from './banner/Banner';
import Body from './body/Body';
import Footer from './Footer';
import theme from './theme';

function App() {
  const [activeSection, setActiveSection] = useState('Education');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App-root">
        <Banner onNavClick={handleNavClick} activeSection={activeSection} />
        <div className="content-container">
          <Body activeSection={activeSection} />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;