import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme, useMediaQuery, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  NavContainer,
  StyledNavButton,
  StyledMenuButton,
  StyledMenu,
  StyledMenuItem
} from './NavbarStyles';

const NavigationBar = ({ sections, onNavClick, activeSection, isMobileMenu }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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

  if (isMobileMenu) {
    return (
      <>
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
              active={activeSection === section}
            >
              {section}
            </MenuItem>
          ))}
        </StyledMenu>
      </>
    );
  }

  return (
    <NavContainer>
      {sections.map((section, index) => (
        <StyledNavButton
          key={index}
          onClick={() => onNavClick(section)}
          disableElevation
          active={activeSection === section}
        >
          {section}
        </StyledNavButton>
      ))}
    </NavContainer>
  );
};

NavigationBar.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  onNavClick: PropTypes.func.isRequired,
  activeSection: PropTypes.string,
  isMobileMenu: PropTypes.bool,
};

NavigationBar.defaultProps = {
  activeSection: null,
  isMobileMenu: false,
};

export default NavigationBar;