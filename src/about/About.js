// About.js
import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import {
  AboutRoot,
  ContentWrapper,
  ContentInnerGroup,
  StyledAvatar,
  IntroContainer,
  StyledTyped,
  CardContainer,
  RoleCard,
  CardsGroup,
} from "./AboutStyle";
import AboutAfterSelected from "./AboutAfterSelected";
import AvatarImage from "../images/myAvatar.png";

const About = ({ id }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [startTyping, setStartTyping] = useState(false);

  const roles = [
    { type: "engineer", title: "Data Visualization Engineer" },
    { type: "researcher", title: "Visual Analytics Researcher" },
    { type: "developer", title: "UI/UX and Frontend Web Developer" },
  ];

  const introText =
    "Hi, I'm Ying-Cheng Chen (Jessica) Chen, welcome to my portfolio. On the right hand side are the chapter of the different roles which shape my journey at the intersection of Data and Design.";

  const roleDescriptions = {
    engineer:
      "My journey into data visualization began during my undergraduate years in Taiwan, sparked by a simple curiosity about how data could tell compelling stories.",
    researcher:
      "At UC Davis's VIDI lab, I created an interface for media bias assessment achieving over 80% effectiveness. Through this work, I discovered visual analytics is about building bridges between complex data and human intuition, enabling data-driven decisions.",
    developer:
      "Throughout my academic years participating in several projects, I've evolved from crafting simple interfaces to building comprehensive platforms that bridge frontend experiences with backend systems. ",
  };

  useEffect(() => {
    setStartTyping(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
        }
      },
      {
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

  const handleCardClick = (roleType) => {
    setSelectedRole(roleType);
    setStartTyping(true);
  };

  // New handler for going back
  const handleBack = () => {
    setSelectedRole(null);
    setStartTyping(true); // Reset typing animation
  };

  return (
    <div style={{ backgroundColor: '#F0EFFC', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <AboutRoot id={id}>
        {!selectedRole ? (
          // Initial layout
          <>
            <ContentWrapper>
              <ContentInnerGroup>
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
              </ContentInnerGroup>
            </ContentWrapper>

            <CardContainer>
              <CardsGroup>
                {roles.map((role) => (
                  <RoleCard
                    key={role.type}
                    cardType={role.type}
                    onClick={() => handleCardClick(role.type)}
                  >
                    <span>{role.title}</span>
                  </RoleCard>
                ))}
              </CardsGroup>
            </CardContainer>
          </>
        ) : (
          // Selected state layout
          <AboutAfterSelected
            selectedRole={selectedRole}
            roles={roles}
            onCardClick={handleCardClick}
            roleDescriptions={roleDescriptions}
            AvatarImage={AvatarImage}
            onBack={handleBack}
          />
        )}
      </AboutRoot>
    </div>
  );
};

export default About;
