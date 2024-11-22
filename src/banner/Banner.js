import React from 'react';
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
          className={className}
          startIcon={<LinkedInIcon style={{ color: '#0077b5' }}/>}
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

  return (
    <div className={`${classes.root} ${isMobile ? classes.rootMobile : ''}`}>
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
        <Typography variant={isMobile ? "caption" : "body2"} 
          className={`${classes.headerDesc} ${isMobile ? classes.headerDescMobile : ''}`}>
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
  );
};

export default Banner;