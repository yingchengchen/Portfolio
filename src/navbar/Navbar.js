// NavigationBar.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme, useMediaQuery, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  NavContainer,
  StyledNavButton,
  StyledMenuButton,
  StyledMenu,
  StyledMenuItem,
  NavbarContent,
  NavButtons,
  MobileNavControl,
  SocialLinks // Renamed from AvatarWrapper
} from './NavbarStyle';

const NavigationBar = ({ sections, onNavClick, activeSection = null }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSectionClick = (section) => {
    onNavClick(section);
    handleMenuClose();
  };

  return (
    <NavContainer>
      <NavbarContent>
        <SocialLinks>
          <a 
            href="https://www.linkedin.com/in/ying-cheng-chen/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon sx={{ fontSize: 30 }} />
          </a>
          <a 
            href="https://github.com/yingchengchen" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <GitHubIcon sx={{ fontSize: 30 }} />
          </a>
        </SocialLinks>

        {/* Desktop Navigation */}
        <NavButtons>
          {sections.map((section, index) => (
            <StyledNavButton
              key={index}
              onClick={() => onNavClick(section)}
              disableElevation
              active={activeSection === section ? "true" : undefined}
            >
              {section}
            </StyledNavButton>
          ))}
        </NavButtons>

        {/* Mobile Navigation */}
        <MobileNavControl>
          <StyledMenuButton
            onClick={handleMenuClick}
            aria-label="menu"
            aria-controls="mobile-menu"
            aria-haspopup="true"
          >
            <MenuIcon />
          </StyledMenuButton>
          <StyledMenu
            id="mobile-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {sections.map((section, index) => (
              <MenuItem
                key={index}
                onClick={() => handleSectionClick(section)}
                component={StyledMenuItem}
                active={activeSection === section ? "true" : undefined}
              >
                {section}
              </MenuItem>
            ))}
          </StyledMenu>
        </MobileNavControl>
      </NavbarContent>
    </NavContainer>
  );
};

NavigationBar.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  onNavClick: PropTypes.func.isRequired,
  activeSection: PropTypes.string,
};

export default NavigationBar;