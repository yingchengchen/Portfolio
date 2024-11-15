import React from 'react';
import {
  Avatar,
  Button,
  Typography
} from '@material-ui/core';
import { ReactSVG } from 'react-svg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
// Internal imports
import styles from './bannerStyles';
import data from 'main/data/data';
import AvatarImage from 'images/myAvatar.png';
function Banner(props) {
  const classes = styles(props);
  const infoData = data.banner.info;
  const buttonData = data.banner.buttons;
  // Should generalise
  function getButton(btnData, index) {
    switch(btnData.type) {
      case "linkedin": return (
        <Button
          key={index}
          className={classes.buttonLinkedIn}
          startIcon={<LinkedInIcon style={{ color: '#0077b5' }}/>}
          variant="contained"
          component="a"
          href={btnData.link}
          target="_blank"  // Add this to open in new tab
          rel="noopener noreferrer"  // Add this for security
          disableElevation
          disableRipple
          disableFocusRipple
        >
          LinkedIn
        </Button>
      );
      case "github": return (
        <Button
          key={index}
          className={classes.buttonGitHub}
          startIcon={<GitHubIcon />}
          variant="contained"
          component="a"
          href={btnData.link}
          target="_blank"  // Add this to open in new tab
          rel="noopener noreferrer"  // Add this for security
          disableElevation
          disableRipple
          disableFocusRipple
        >
          GitHub
        </Button>
      );
      default: return null;
    }
  }
  return (
    <div className={classes.root}>
      <Avatar
        className={classes.avatar}
        alt="Avatar"
        src={AvatarImage}
      />
      <div className={classes.intro}>
        <Typography variant="h3">
          {infoData.name}
        </Typography>
        <Typography variant="h6" className={classes.subheader}>
          {infoData.profession}
        </Typography>
        <Typography variant="caption" className={classes.headerDesc}>
          {infoData.intro}
        </Typography>
        <div className={classes.buttons}>
          {buttonData.map((btn, i) => getButton(btn, i))}
        </div>
      </div>
    </div>
  );
}
export default Banner;