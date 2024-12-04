// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import About from './about/About'; 
import Skills from './skills/Skills'; 
import NavigationBar from './navbar/Navbar';
import Body from './body/Body';
import Footer from './Footer';
import theme from './theme';

function App() {
  const sections = ['About', 'Skills', 'Projects', 'Work Experience', 'Education'];
  const [activeSection, setActiveSection] = useState("About");
  const [scrollTriggerPoint, setScrollTriggerPoint] = useState(100); // Add this state

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const offset = scrollTriggerPoint; // Use the trigger point

      if (scrollPosition + windowHeight >= documentHeight - offset) {
        setActiveSection('Education');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase().replace(/\s+/g, '-'));
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= offset && bottom >= offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, scrollTriggerPoint]);

  const handleNavClick = (section) => {
    const element = document.getElementById(section.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App-root">
        <NavigationBar
          sections={sections}
          onNavClick={handleNavClick}
          activeSection={activeSection}
        />
        <div className="main-content">
          <About id="about" activeSection={activeSection} />
          <Skills id="skills" activeSection={activeSection} />
          <div className="content-container">
            <Body activeSection={activeSection} />
            <Footer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;