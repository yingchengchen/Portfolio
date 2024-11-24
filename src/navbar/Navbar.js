// Navbar.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  Button,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './NavbarStyles';
import clsx from 'clsx';

const NavigationBar = ({ sections, onNavClick, activeSection }) => {
  const classes = styles();
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

  if (isMobile) {
    return (
      <>
        <IconButton
          className={classes.menuButton}
          onClick={handleMenuClick}
          aria-label="menu"
          aria-controls="mobile-menu"
          aria-haspopup="true"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="mobile-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          classes={{
            paper: classes.menuPaper
          }}
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
              className={clsx(classes.menuItem, {
                [classes.activeMenuItem]: activeSection === section
              })}
            >
              {section}
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  }

  // Desktop navigation
  return (
    <nav className={classes.navContainer}>
      {sections.map((section, index) => (
        <Button
          key={index}
          className={clsx(
            classes.navButton,
            {
              'active': activeSection === section
            }
          )}
          onClick={() => onNavClick(section)}
          disableElevation
        >
          {section}
        </Button>
      ))}
    </nav>
  );
};

NavigationBar.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  onNavClick: PropTypes.func.isRequired,
  activeSection: PropTypes.string,
};

NavigationBar.defaultProps = {
  activeSection: null,
};

export default NavigationBar;