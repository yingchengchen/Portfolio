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
  AboutContainer,
} from "./AboutStyle";
import AboutAfterSelected from "./AboutAfterSelected";
import AvatarImage from "../images/myAvatar.png";

const About = ({ id }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [startTyping, setStartTyping] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [bouncingCards, setBouncingCards] = useState(false);

  const roles = [
    { type: "engineer", title: "Data Visualization Engineer" },
    { type: "researcher", title: "Visual Analytics Researcher" },
    { type: "developer", title: "UI/UX and Frontend Web Developer" },
  ];

  const introText = `Hi, I'm Ying-Cheng (Jessica) Chen, welcome to my portfolio! These are the chapter of the different roles which shape my journey at the intersection of <span style="background-color: #FFEB3B">Data</span> and <span style="background-color: #FFEB3B">Design</span> <span style="font-weight: 600">- click on each card to learn more! </span>`;

  const roleDescriptions = {
    engineer: `My journey into data visualization began during my undergraduate years in Taiwan, sparked by a simple curiosity about <span style="background-color: #FFEB3B">how data could tell compelling stories</span>.`,
    researcher: `At <span style="background-color: #FFEB3B">UC Davis's VIDI lab</span>, I developed a media bias assessment interface with <span style="background-color: #FFEB3B">80%</span> effectiveness, bridging complex data with <span style="background-color: #FFEB3B">human intuition</span> for better decision-making.`,
    developer: `Throughout my academic years participating in several projects, I've built comprehensive platforms that bridge <span style="background-color: #FFEB3B">frontend experiences</span> with <span style="background-color: #FFEB3B">backend systems</span>. `,
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

  useEffect(() => {
    if (typingComplete) {
      roles.forEach((role, index) => {
        setTimeout(() => {
          setBouncingCards((prev) => ({
            ...prev,
            [role.type]: true,
          }));

          // Reset bounce after animation
          setTimeout(() => {
            setBouncingCards((prev) => ({
              ...prev,
              [role.type]: false,
            }));
          }, 500); // Match animation duration
        }, index * 600); // Slight delay between each card
      });
    }
  }, [typingComplete]);

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
    <AboutContainer>
      <div id={id}>
        <AboutRoot>
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
                          html={true}
                          onComplete={() => setTypingComplete(true)}
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
                      bounce={bouncingCards[role.type]}
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
    </AboutContainer>
  );
};

export default About;
