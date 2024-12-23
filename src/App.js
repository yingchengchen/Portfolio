import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import About from "./about/About";
import Skills from "./skills/Skills";
import NavigationBar from "./navbar/Navbar";
import Projects from "./projects/Projects";
import EducationAndCareer from "./education_career/EducationAndCareer";
import Footer from "./Footer";
import theme from "./theme";

function App() {
  const sections = ["About", "Skills", "Education & Career", "Projects"];
  const [activeSection, setActiveSection] = useState("About");

  const getSectionId = (section) => {
    switch (section) {
      case "Education & Career":
        return "education";
      default:
        return section.toLowerCase().replace(/\s+/g, "-");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // const navbarHeight = 64;
      const triggerOffset = windowHeight * 0.15; // 15% of viewport height

      // Handle About section visibility
      if (scrollPosition <= windowHeight / 4) {
        setActiveSection("About");
        return;
      }

      // Handle other sections
      let currentSection = "About";
      for (const section of sections) {
        const element = document.getElementById(getSectionId(section));
        if (element) {
          const elementRect = element.getBoundingClientRect();
          if (elementRect.top <= triggerOffset) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleNavClick = (section) => {
    const element = document.getElementById(getSectionId(section));
    if (element) {
      if (section === "About") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const navbarHeight = 64;
        const elementRect = element.getBoundingClientRect();
        const offsetPosition = elementRect.top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
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
          <EducationAndCareer id="education" activeSection={activeSection} />
          <Projects id="projects" activeSection={activeSection} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
