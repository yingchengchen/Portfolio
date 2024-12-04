// About.js
import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { ReactTyped } from "react-typed";
import {
  AboutRoot,
  ContentWrapper,
  StyledAvatar,
  IntroContainer,
  StyledTyped,
  CardContainer,
  RoleCard,
} from './AboutStyle';
import AvatarImage from '../images/myAvatar.png';

const About = ({ id }) => {
  const [startTyping, setStartTyping] = useState(false);
  const introText = "Hi, I'm Ying-Cheng Chen (Jessica) Chen, welcome to my portfolio. On the right hand side are the chapter of the different roles which shape my journey at the intersection of Data and Design.";

  useEffect(() => {
    // Start typing immediately for About section since it's the first section
    setStartTyping(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
        }
      },
      {
        threshold: 0.3
      }
    );

    const section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [id]);

  return (
    <AboutRoot id={id}>
      <ContentWrapper>
        <StyledAvatar alt="Avatar" src={AvatarImage} />
        <IntroContainer>
          <StyledTyped>
            {startTyping && (
              <ReactTyped
                strings={[introText]}
                typeSpeed={40}
                cursorChar="|"
                showCursor={true}
              />
            )}
          </StyledTyped>
        </IntroContainer>
      </ContentWrapper>

      <CardContainer>
        <RoleCard cardType="developer"><span>UI/UX and Frontend Web Developer</span></RoleCard>
        <RoleCard cardType="researcher"><span>Visual Analytics Researcher</span></RoleCard>
        <RoleCard cardType="engineer"><span>Data Visualization Engineer</span></RoleCard>
      </CardContainer>
    </AboutRoot>
  );
};

export default About;