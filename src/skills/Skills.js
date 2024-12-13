// Skills.js
import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { Typography } from "@mui/material";
import { ReactTyped } from "react-typed";
import {
  SkillsRoot,
  SkillsWrapper,
  SkillsVisualSection,
  ContentWrapper,
  StyledAvatar,
  IntroContainer,
  StyledTyped,
} from "./SkillsStyle";
import AvatarImage from "../images/myAvatar.png";

const Skills = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const skillText =
    "Through each role, I've developed a diverse skill set spanning various programming languages and tools - click each area to discover my technical expertise.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility state based on intersection
        setIsVisible(entry.isIntersecting);
        // Start typing if section becomes visible
        if (entry.isIntersecting) {
          setStartTyping(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Adjust this value to control when the typing starts
      }
    );

    const section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }

    // Cleanup observer
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [id]);

  // Also start typing if section is clicked in navbar
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
      <SkillsRoot>
        <SkillsVisualSection>
          {/* Spider chart will be added later */}
        </SkillsVisualSection>
        <ContentWrapper>
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
        </ContentWrapper>
      </SkillsRoot>
    </SkillsWrapper>
  );
};

export default Skills;
