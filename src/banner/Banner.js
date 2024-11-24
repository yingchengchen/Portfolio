import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import {
  Avatar,
  Button,
  Typography
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
// Internal imports
import styles from './bannerStyles';
import data from 'data/data';
import AvatarImage from 'images/myAvatar.png';
import NavigationBar from 'navbar/Navbar';

const SocialButton = ({ type, link, className }) => {
  const buttonProps = {
    className: `${className} ${isMobile ? 'button-mobile' : ''}`,
    variant: "contained",
    component: "a",
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    disableElevation: true,
    disableRipple: true,
    disableFocusRipple: true,
    size: isMobile ? "small" : "medium"
  };

  switch(type) {
    case "linkedin":
      return (
        <Button
          {...buttonProps}
          startIcon={<LinkedInIcon />}
        >
          LinkedIn
        </Button>
      );
    case "github":
      return (
        <Button
          {...buttonProps}
          startIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
      );
    default:
      return null;
  }
};

const Banner = (props) => {
  const classes = styles(props);
  const { info: infoData, buttons: buttonData } = data.banner;
  const [activeSection, setActiveSection] = useState(null);

  const sections = ['Education', 'Work Experience', 'Project Experience'];

  // Function to update active section - will be called from BodySection
  const updateActiveSection = (section) => {
    setActiveSection(section);
  };

  // Make the update function available globally
  useEffect(() => {
    window.updateActiveNavSection = updateActiveSection;
    
    return () => {
      window.updateActiveNavSection = undefined;
    };
  }, []);

  const scrollToSection = (sectionName) => {
    const sectionId = sectionName.toLowerCase().replace(/\s+/g, '-');
    const targetSection = document.getElementById(sectionId);
    const contentContainer = document.querySelector('.content-container');
    
    if (targetSection && contentContainer) {
      // Toggle section state first
      if (window.toggleSection) {
        if (activeSection === sectionName) {
          // If clicking the same section, just toggle it
          window.toggleSection(sectionName);
          setActiveSection(null); // Clear active state when collapsing
        } else {
          // If clicking a new section, collapse all and expand the new one
          window.collapseAllSections();
          setTimeout(() => {
            window.toggleSection(sectionName);
            setActiveSection(sectionName);
          }, 100);
        }
      }

      // Calculate scroll position to show section header at top
      const headerOffset = 0;
      const sectionTop = targetSection.offsetTop - headerOffset;
      
      // Scroll the content container
      contentContainer.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.contentWrapper}>
        <Avatar
          className={`${classes.avatar} ${isMobile ? classes.avatarMobile : ''}`}
          alt="Avatar"
          src={AvatarImage}
        />
        <div className={`${classes.intro} ${isMobile ? classes.introMobile : ''}`}>
          <Typography variant={isMobile ? "h5" : "h3"}>
            {infoData.name}
          </Typography>
          <Typography variant={isMobile ? "subtitle1" : "h6"} className={classes.subheader}>
            {infoData.profession}
          </Typography>
          <Typography 
            variant={isMobile ? "caption" : "body2"} 
            className={`${classes.headerDesc} ${isMobile ? classes.headerDescMobile : ''}`}
          >
            {infoData.intro}
          </Typography>
          <div className={`${classes.buttons} ${isMobile ? classes.buttonsMobile : ''}`}>
            {buttonData.map((btn, i) => (
              <SocialButton
                key={i}
                type={btn.type}
                link={btn.link}
                className={
                  btn.type === 'linkedin' 
                    ? classes.buttonLinkedIn 
                    : classes.buttonGitHub
                }
              />
            ))}
          </div>
        </div>
      </div>
      <NavigationBar 
        sections={sections} 
        onNavClick={scrollToSection}
        activeSection={activeSection}
      />
    </div>
  );
};

export default Banner;