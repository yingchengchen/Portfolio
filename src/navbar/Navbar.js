import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme, useMediaQuery, MenuItem, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  NavContainer,
  StyledNavButton,
  StyledMenuButton,
  StyledMenu,
  StyledMenuItem,
  NavAvatarButton,
  NavbarContent,
  NavButtons,
  MobileNavControl
} from './NavbarStyles';
import AvatarImage from '../images/myAvatar.png';

const NavigationBar = ({ 
  sections, 
  onNavClick, 
  activeSection, 
  onAvatarClick,
  showBanner 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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
        <NavAvatarButton onClick={onAvatarClick} active={showBanner}>
          <Avatar
            src={AvatarImage}
            alt="Profile"
            sx={{ width: 32, height: 32 }}
          />
        </NavAvatarButton>

        {/* Desktop Navigation */}
        <NavButtons>
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
                active={activeSection === section}
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
  onAvatarClick: PropTypes.func.isRequired,
  showBanner: PropTypes.bool.isRequired,
};

NavigationBar.defaultProps = {
  activeSection: null,
};

export default NavigationBar;