// Skills.js
import React, { useState, useEffect } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography } from "@mui/material";
import { ReactTyped } from "react-typed";
import {
  SkillsRoot,
  SkillsWrapper,
  SkillsVisualSection,
  ContentWrapper,
  ContentInnerGroup,
  StyledAvatar,
  IntroContainer,
  StyledTyped,
} from "./SkillsStyle";
import AvatarImage from "../images/myAvatar.png";
import { Radar } from "./Radar";
import { data } from "./data";
import { DIMENSIONS } from "./scaleUtils";

const Skills = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery('(max-width:480px)');

  // Get dimensions based on screen size
  const dimensions = isMobile ? DIMENSIONS.xs 
    : isSm ? DIMENSIONS.sm 
    : isMd ? DIMENSIONS.md 
    : isLg ? DIMENSIONS.lg 
    : DIMENSIONS.lg;

    const { 
      width, 
      height, 
      margin, 
      innerRadius, 
      labelPadding, 
      textWidth, 
      fontSize, 
      dotRadius 
    } = dimensions;

  const skillText =
    "Through each role, I've developed a diverse skill set spanning various tools - click each area to discover my technical expertise.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setStartTyping(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
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

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === `#${id}`) {
        setStartTyping(true);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [id]);

  return (
    <SkillsWrapper id={id}>
      <SkillsRoot container>
        <SkillsVisualSection>
        <Radar
            data={data}
            width={width}
            height={height}
            margin={margin}
            innerRadius={innerRadius}
            labelPadding={labelPadding}
            textWidth={textWidth}
            fontSize={fontSize}
            dotRadius={dotRadius}
            axisConfig={[
              { name: "Programming Languages", max: 100 },
              { name: "Data Analysis & Storage", max: 100 },
              { name: "Compiler & Architecture", max: 100 },
              { name: "Software", max: 100 },
              { name: "Machine Learning", max: 100 },
              { name: "Visualizations & Graphics", max: 100 },
            ]}
          />
        </SkillsVisualSection>
        <ContentWrapper>
          <ContentInnerGroup>
            <StyledAvatar alt="Avatar" src={AvatarImage} />
            <IntroContainer>
              <StyledTyped>
                {startTyping && (
                  <ReactTyped
                    strings={[skillText]}
                    typeSpeed={40}
                    cursorChar="|"
                    showCursor={true}
                  />
                )}
              </StyledTyped>
            </IntroContainer>
          </ContentInnerGroup>
        </ContentWrapper>
      </SkillsRoot>
    </SkillsWrapper>
  );
};

export default Skills;