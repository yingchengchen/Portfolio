import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Banner from './banner/Banner';
import NavigationBar from './navbar/Navbar';
import Body from './body/Body';
import Footer from './Footer';
import theme from './theme';

function App() {
  const [activeSection, setActiveSection] = useState('Education');
  const [showBanner, setShowBanner] = useState(true);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const handleAvatarClick = () => {
    setShowBanner(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App-root">
        <NavigationBar
          sections={['Education', 'Work Experience', 'Project Experience']}
          onNavClick={handleNavClick}
          activeSection={activeSection}
          onAvatarClick={handleAvatarClick}
          showBanner={showBanner}
        />
        <div className="main-content">
          <Banner show={showBanner} />
          <div className={`content-container ${!showBanner ? 'no-banner' : ''}`}>
            <Body activeSection={activeSection} />
            <Footer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;