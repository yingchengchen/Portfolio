// Skills.js
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
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
import { data, skillsDetailData } from "./data";
import { DIMENSIONS } from "./scaleUtils";
import Chip from '@mui/material/Chip';

const RadarWrapper = (props) => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const theme = useTheme();

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill); // this is triggered on hover now
  };

  // Calculate heights - radar gets 95%, chip group gets 5%
  const totalHeight = props.height;
  const radarHeight = totalHeight * 0.95;
  const chipGroupHeight = totalHeight * 0.05;

  return (
    <div style={{ 
      position: 'relative', 
      width: props.width, 
      height: totalHeight,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Radar Chart - 95% of total height */}
      <div style={{ height: radarHeight, position: 'relative' }}>
        <Radar 
          {...props} 
          height={radarHeight}
          onSkillSelect={handleSkillSelect}
          selectedSkill={selectedSkill}
          showChips={false} // We'll handle chips externally now
        />
      </div>
      
      {/* Chip Group - 5% of total height */}
      <div style={{ 
        height: chipGroupHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4px 8px',
        minHeight: '32px' // Ensure minimum height for chips
      }}>
        {selectedSkill && skillsDetailData[selectedSkill] && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '100%',
            overflow: 'hidden'
          }}>
            {skillsDetailData[selectedSkill]?.map(({ name }) => (
              <Chip
                key={name}
                label={name}
                size="small"
                sx={{
                  fontSize: `${props.fontSize}px`,
                  fontWeight: '600',
                  height: '20px',
                  backgroundColor: `#E0E5DF`,
                  border: `1px solid ${theme.palette.primary.main}`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

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
    `Through each role, I've developed a diverse skill set spanning various tools <span style="font-weight: 600">- click each area to discover my technical expertise</span>.`;
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
        <RadarWrapper
            data={data}
            skillsData={skillsDetailData}
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
              { name: "Software Development", max: 100 },
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