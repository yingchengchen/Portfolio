import React from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { Button, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  BannerRoot,
  ContentWrapper,
  StyledAvatar,
  IntroSection,
  SubheaderText,
  HeaderDescription,
  ButtonContainer,
  LinkedInButton,
  GitHubButton
} from './bannerStyles';
import data from 'data/data';
import AvatarImage from 'images/myAvatar.png';
import NavigationBar from 'navbar/Navbar';

const SocialButton = ({ type, link }) => {
  const buttonProps = {
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

  switch (type) {
    case "linkedin":
      return (
        <LinkedInButton
          {...buttonProps}
          startIcon={<LinkedInIcon />}
        >
          LinkedIn
        </LinkedInButton>
      );
    case "github":
      return (
        <GitHubButton
          {...buttonProps}
          startIcon={<GitHubIcon />}
        >
          GitHub
        </GitHubButton>
      );
    default:
      return null;
  }
};

const Banner = ({ onNavClick, activeSection }) => {
  const { info: infoData, buttons: buttonData } = data.banner;

  return (
    <BannerRoot>
      <ContentWrapper>
        <StyledAvatar
          alt="Avatar"
          src={AvatarImage}
        />
        <IntroSection>
          <Typography variant={isMobile ? "h5" : "h3"}>
            {infoData.name}
          </Typography>
          <SubheaderText variant={isMobile ? "subtitle1" : "h6"}>
            {infoData.profession}
          </SubheaderText>
          <HeaderDescription
            variant={isMobile ? "caption" : "body2"}
          >
            {infoData.intro}
          </HeaderDescription>
          <ButtonContainer>
            {buttonData.map((btn, i) => (
              <SocialButton
                key={i}
                type={btn.type}
                link={btn.link}
              />
            ))}
          </ButtonContainer>
        </IntroSection>
      </ContentWrapper>
      {!isMobile && !isTablet && (
        <NavigationBar
          sections={['Education', 'Work Experience', 'Project Experience']}
          onNavClick={onNavClick}
          activeSection={activeSection}
        />
      )}
      {(isMobile || isTablet) && (
        <NavigationBar
          sections={['Education', 'Work Experience', 'Project Experience']}
          onNavClick={onNavClick}
          activeSection={activeSection}
          isMobileMenu
        />
      )}
    </BannerRoot>
  );
};

export default Banner;