// AboutAfterSelected.js
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { ReactTyped } from "react-typed";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  StyledAvatar,
  IntroContainer,
  StyledTyped,
  SCALE_MULTIPLIERS,
} from "./AboutStyle";

const roleData = {
  engineer: {
    title: "Data Visualization Engineer",
    skills: [
      "Preprocessing data with Machine Learning",
      <>
        Visualization libraries (
        <span style={{ fontStyle: "italic" }}>Python</span>,
        <span style={{ fontStyle: "italic" }}>JavaScript</span>)
      </>,
      "Interactive dashboards",
      <>Clear, easy understanding, and actionable insights</>,
    ],
  },
  researcher: {
    title: "Visual Analytics Researcher",
    skills: [
      <>
        Manage larger dataset (<span style={{ fontStyle: "italic" }}>AWS</span>)
      </>,
      <>Large Language Model Data Analysis</>,
      <>
        Web Development & User Study (
        <span style={{ fontStyle: "italic" }}>React</span>,
        <span style={{ fontStyle: "italic" }}>Vue</span>,
        <span style={{ fontStyle: "italic" }}>Svelte</span>)
      </>,
      "Solve real-world problems",
    ],
  },
  developer: {
    title: "UI/UX and Frontend Web Developer",
    skills: [
      <>
        Database management (<span style={{ fontStyle: "italic" }}>SQL</span>)
      </>,
      <>
        API and server integration (
        <span style={{ fontStyle: "italic" }}>Node.js</span>,
        <span style={{ fontStyle: "italic" }}>Flask</span>)
      </>,
      <>
        User-Centered Design (<span style={{ fontStyle: "italic" }}>Figma</span>
        )
      </>,
      "Practical web application",
    ],
  },
};

// Base dimensions for the selected view
const SELECTED_BASE = {
  containerGap: 2, // rem
  padding: 2.25, // rem
  gap: 2, // rem
  backButtonSize: {
    fontSize: 1, // rem
    padding: 0.5, // rem
    gap: 0.5, // rem
  },
  selectedCard: {
    width: 34.5, // rem (23 * 1.5)
    height: 27, // rem (18 * 1.5)
    fontSize: 2.25, // rem (1.5 * 1.5)
    padding: 2.25, // rem (1.5 * 1.5)
  },
  unselectedCard: {
    width: 13.8, // rem (23 * 0.6)
    height: 10.8, // rem (18 * 0.6)
    fontSize: 1.2, // rem (1.5 * 0.6)
    padding: 0.9, // rem (1.5 * 0.6)
    gap: 1, // rem
  },
  contentGroup: {
    height: 27, // rem (same as selected card)
    gap: 2, // rem
  },
};

// Color mapping for cards
const CARD_COLORS = {
  engineer: "#EAD0D1",
  researcher: "#E0E5DF",
  developer: "#C1CBDC",
};

const SelectedContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  gap: `${SELECTED_BASE.containerGap}rem`,
  transition: "all 0.5s ease",

  [theme.breakpoints.down("lg")]: {
    gap: `${SELECTED_BASE.containerGap * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
    gap: `${SELECTED_BASE.containerGap * SCALE_MULTIPLIERS.md}rem`,
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
    gap: `${SELECTED_BASE.containerGap * SCALE_MULTIPLIERS.sm}rem`,
    flexDirection: "column",
  },
}));

const CardGroup = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: `${SELECTED_BASE.gap}rem`,
  padding: `${SELECTED_BASE.padding}rem`,

  [theme.breakpoints.down("lg")]: {
    gap: `${SELECTED_BASE.gap * SCALE_MULTIPLIERS.lg}rem`,
    padding: `${SELECTED_BASE.padding * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
    gap: `${SELECTED_BASE.gap * SCALE_MULTIPLIERS.md}rem`,
    padding: `${SELECTED_BASE.padding * SCALE_MULTIPLIERS.md}rem`,
  },
  [theme.breakpoints.down("sm")]: {
    gap: `${SELECTED_BASE.gap * SCALE_MULTIPLIERS.sm}rem`,
    padding: `${SELECTED_BASE.padding * SCALE_MULTIPLIERS.sm}rem`,
  },
}));

const BackButton = styled("button")(({ theme }) => ({
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: `${SELECTED_BASE.backButtonSize.gap}rem`,
  color: "#697478",
  fontSize: `${SELECTED_BASE.backButtonSize.fontSize}rem`,
  padding: `${SELECTED_BASE.backButtonSize.padding}rem`,
  alignSelf: "flex-start",
  transition: "all 0.3s ease",

  "&:hover": {
    transform: "translateX(-5px)",
  },

  [theme.breakpoints.down("lg")]: {
    fontSize: `${
      SELECTED_BASE.backButtonSize.fontSize * SCALE_MULTIPLIERS.lg
    }rem`,
    padding: `${
      SELECTED_BASE.backButtonSize.padding * SCALE_MULTIPLIERS.lg
    }rem`,
    gap: `${SELECTED_BASE.backButtonSize.gap * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: `${
      SELECTED_BASE.backButtonSize.fontSize * SCALE_MULTIPLIERS.md
    }rem`,
    padding: `${
      SELECTED_BASE.backButtonSize.padding * SCALE_MULTIPLIERS.md
    }rem`,
    gap: `${SELECTED_BASE.backButtonSize.gap * SCALE_MULTIPLIERS.md}rem`,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: `${
      SELECTED_BASE.backButtonSize.fontSize * SCALE_MULTIPLIERS.sm
    }rem`,
    padding: `${
      SELECTED_BASE.backButtonSize.padding * SCALE_MULTIPLIERS.sm
    }rem`,
    gap: `${SELECTED_BASE.backButtonSize.gap * SCALE_MULTIPLIERS.sm}rem`,
  },
}));

const LeftSection = styled("div")(({ theme }) => ({
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const RightSection = styled("div")(({ theme }) => ({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
}));

const ContentGroup = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: `${SELECTED_BASE.contentGroup.height}rem`,
  gap: `${SELECTED_BASE.contentGroup.gap}rem`,
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("lg")]: {
    height: `${SELECTED_BASE.contentGroup.height * SCALE_MULTIPLIERS.lg}rem`,
    gap: `${SELECTED_BASE.contentGroup.gap * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
    height: `${SELECTED_BASE.contentGroup.height * SCALE_MULTIPLIERS.md}rem`,
    gap: `${SELECTED_BASE.contentGroup.gap * SCALE_MULTIPLIERS.md}rem`,
  },
  [theme.breakpoints.down("sm")]: {
    height: `${SELECTED_BASE.contentGroup.height * SCALE_MULTIPLIERS.sm}rem`,
    gap: `${SELECTED_BASE.contentGroup.gap * SCALE_MULTIPLIERS.sm}rem`,
  },
}));

const UnselectedCards = styled("div")(({ theme }) => ({
  height: `calc((${SELECTED_BASE.contentGroup.height}rem - ${SELECTED_BASE.contentGroup.gap}rem) / 2)`,
  display: "flex",
  gap: `${SELECTED_BASE.unselectedCard.gap}rem`,
  justifyContent: "center",
  alignItems: "center",
  width: "100%",

  [theme.breakpoints.down("lg")]: {
    height: `calc((${
      SELECTED_BASE.contentGroup.height * SCALE_MULTIPLIERS.lg
    }rem - ${SELECTED_BASE.contentGroup.gap * SCALE_MULTIPLIERS.lg}rem) / 2)`,
    gap: `${SELECTED_BASE.unselectedCard.gap * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
    height: `calc((${
      SELECTED_BASE.contentGroup.height * SCALE_MULTIPLIERS.md
    }rem - ${SELECTED_BASE.contentGroup.gap * SCALE_MULTIPLIERS.md}rem) / 2)`,
    gap: `${SELECTED_BASE.unselectedCard.gap * SCALE_MULTIPLIERS.md}rem`,
  },
  [theme.breakpoints.down("sm")]: {
    height: `calc((${
      SELECTED_BASE.contentGroup.height * SCALE_MULTIPLIERS.sm
    }rem - ${SELECTED_BASE.contentGroup.gap * SCALE_MULTIPLIERS.sm}rem) / 2)`,
    gap: `${SELECTED_BASE.unselectedCard.gap * SCALE_MULTIPLIERS.sm}rem`,
  },
}));

const ContentSection = styled("div")(({ theme }) => ({
  height: `calc((${SELECTED_BASE.contentGroup.height}rem - ${SELECTED_BASE.contentGroup.gap}rem) / 2)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: `${SELECTED_BASE.gap}rem`,
  width: "100%",

  [theme.breakpoints.down("lg")]: {
    height: `calc((${
      SELECTED_BASE.contentGroup.height * SCALE_MULTIPLIERS.lg
    }rem - ${SELECTED_BASE.contentGroup.gap * SCALE_MULTIPLIERS.lg}rem) / 2)`,
    gap: `${SELECTED_BASE.gap * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
    height: `calc((${
      SELECTED_BASE.contentGroup.height * SCALE_MULTIPLIERS.md
    }rem - ${SELECTED_BASE.contentGroup.gap * SCALE_MULTIPLIERS.md}rem) / 2)`,
    gap: `${SELECTED_BASE.gap * SCALE_MULTIPLIERS.md}rem`,
  },
  [theme.breakpoints.down("sm")]: {
    height: `calc((${
      SELECTED_BASE.contentGroup.height * SCALE_MULTIPLIERS.sm
    }rem - ${SELECTED_BASE.contentGroup.gap * SCALE_MULTIPLIERS.sm}rem) / 2)`,
    gap: `${SELECTED_BASE.gap * SCALE_MULTIPLIERS.sm}rem`,
  },
}));

const SelectedCard = styled("div")(({ theme, cardType }) => ({
  width: `${SELECTED_BASE.selectedCard.width}rem`,
  height: `${SELECTED_BASE.selectedCard.height}rem`,
  backgroundColor: CARD_COLORS[cardType],
  borderRadius: theme.shape.borderRadius,
  border: "0.156rem solid #697478",
  padding: `${SELECTED_BASE.selectedCard.padding}rem`,
  color: "#697478",
  fontWeight: 500,
  fontSize: `${SELECTED_BASE.selectedCard.fontSize}rem`,
  display: "flex",
  flexDirection: "column",
  transition: "all 0.5s ease",

  "& > span": {
    wordWrap: "break-word",
    wordBreak: "break-word",
    hyphens: "auto",
    overflow: "hidden",
    display: "block",
    boxSizing: "border-box",
  },
  "& > span.title": {
    fontFamily: "God",
  },

  [theme.breakpoints.down("lg")]: {
    width: `${SELECTED_BASE.selectedCard.width * SCALE_MULTIPLIERS.lg}rem`,
    height: `${SELECTED_BASE.selectedCard.height * SCALE_MULTIPLIERS.lg}rem`,
    fontSize: `${
      SELECTED_BASE.selectedCard.fontSize * SCALE_MULTIPLIERS.lg
    }rem`,
  },
  [theme.breakpoints.down("md")]: {
    width: `${SELECTED_BASE.selectedCard.width * SCALE_MULTIPLIERS.md}rem`,
    height: `${SELECTED_BASE.selectedCard.height * SCALE_MULTIPLIERS.md}rem`,
    fontSize: `${
      SELECTED_BASE.selectedCard.fontSize * SCALE_MULTIPLIERS.md
    }rem`,
  },
  [theme.breakpoints.down("sm")]: {
    width: `${SELECTED_BASE.selectedCard.width * SCALE_MULTIPLIERS.sm}rem`,
    height: `${SELECTED_BASE.selectedCard.height * SCALE_MULTIPLIERS.sm}rem`,
    fontSize: `${
      SELECTED_BASE.selectedCard.fontSize * SCALE_MULTIPLIERS.sm
    }rem`,
  },
}));

const CheckIcon = styled("div")(({ checked, theme }) => ({
  width: "1.2rem",
  height: "1.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.5s ease",
  color: checked ? "#00CDC1" : "#697478",

  "& svg": {
    width: "100%",
    height: "100%",
  },
}));

const SkillList = styled("div")(({ theme }) => ({
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
}));

const SkillItem = styled("div")(({ visible }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  fontSize: "0.5em",
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(20px)",
  transition: "all 0.5s ease",
}));

// New Unselected Card Component
const UnselectedCard = styled("div")(({ theme, cardType }) => ({
  width: `${SELECTED_BASE.unselectedCard.width}rem`,
  height: `${SELECTED_BASE.unselectedCard.height}rem`,
  backgroundColor: CARD_COLORS[cardType],
  borderRadius: theme.shape.borderRadius,
  border: "0.156rem solid #697478",
  padding: `${SELECTED_BASE.unselectedCard.padding}rem`,
  boxShadow: "0 0.625rem 1.25rem rgba(0,0,0,0.1)",
  cursor: "pointer",
  color: "#697478",
  fontWeight: 500,
  fontSize: `${SELECTED_BASE.unselectedCard.fontSize}rem`,
  display: "flex",
  flexDirection: "column",
  transition: "all 0.5s ease",
  position: "relative",

  "& > span.title": {
    // Add specific class for title
    width: "70%",
    wordWrap: "break-word",
    wordBreak: "break-word",
    hyphens: "auto",
    overflow: "hidden",
    display: "block",
    boxSizing: "border-box",
  },

  "& > span.click-text": {
    // New style for click text
    position: "absolute",
    bottom: "1rem",
    left: "50%",
    transform: "translateX(-50%)", // Center horizontally
    fontSize: "0.7em", // Smaller than the title
    fontStyle: "italic",
    opacity: 0.8,
    letterSpacing: "0.05em",
  },

  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0.625rem 1.25rem rgba(0,0,0,0.2)",

    "& > span.click-text": {
      opacity: 1, // Make more visible on hover
    },
  },

  [theme.breakpoints.down("lg")]: {
    width: `${SELECTED_BASE.unselectedCard.width * SCALE_MULTIPLIERS.lg}rem`,
    height: `${SELECTED_BASE.unselectedCard.height * SCALE_MULTIPLIERS.lg}rem`,
    fontSize: `${
      SELECTED_BASE.unselectedCard.fontSize * SCALE_MULTIPLIERS.lg
    }rem`,
    padding: `${
      SELECTED_BASE.unselectedCard.padding * SCALE_MULTIPLIERS.lg
    }rem`,
    "& > span.click-text": {
      fontSize: `${0.7 * SCALE_MULTIPLIERS.lg}em`,
    },
  },
  [theme.breakpoints.down("md")]: {
    width: `${SELECTED_BASE.unselectedCard.width * SCALE_MULTIPLIERS.md}rem`,
    height: `${SELECTED_BASE.unselectedCard.height * SCALE_MULTIPLIERS.md}rem`,
    fontSize: `${
      SELECTED_BASE.unselectedCard.fontSize * SCALE_MULTIPLIERS.md
    }rem`,
    padding: `${
      SELECTED_BASE.unselectedCard.padding * SCALE_MULTIPLIERS.md
    }rem`,
    "& > span.click-text": {
      fontSize: `${0.7 * SCALE_MULTIPLIERS.md}em`,
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: `${SELECTED_BASE.unselectedCard.width * SCALE_MULTIPLIERS.sm}rem`,
    height: `${SELECTED_BASE.unselectedCard.height * SCALE_MULTIPLIERS.sm}rem`,
    fontSize: `${
      SELECTED_BASE.unselectedCard.fontSize * SCALE_MULTIPLIERS.sm
    }rem`,
    padding: `${
      SELECTED_BASE.unselectedCard.padding * SCALE_MULTIPLIERS.sm
    }rem`,
    "& > span.click-text": {
      fontSize: `${0.7 * SCALE_MULTIPLIERS.sm}em`,
    },
  },
}));

const AboutAfterSelected = ({
  selectedRole,
  roles,
  onCardClick,
  roleDescriptions,
  AvatarImage,
  onBack,
}) => {
  const [visibleItems, setVisibleItems] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [animatingRole, setAnimatingRole] = useState(null);

  useEffect(() => {
    if (selectedRole) {
      // Reset all states when switching roles
      setVisibleItems({});
      setCheckedItems({});
      setAnimatingRole(selectedRole);

      // Animate each item in sequence
      roleData[selectedRole].skills.forEach((_, index) => {
        // Show item animation
        setTimeout(() => {
          setVisibleItems((prev) => ({
            ...prev,
            [selectedRole + index]: true,
          }));

          // Change check color after item is shown
          setTimeout(() => {
            setCheckedItems((prev) => ({
              ...prev,
              [selectedRole + index]: true,
            }));
          }, 500); // Wait 0.5s after item appears before changing color
        }, index * 2500); // 1.5s total for each item (1s for showing, 0.5s for color change)
      });
    }
  }, [selectedRole]);

  const getUnselectedRoles = () =>
    roles.filter((role) => role.type !== selectedRole);

  return (
    <SelectedContainer>
      <LeftSection>
        <CardGroup>
          <BackButton onClick={onBack}>
            <ArrowBackIcon />
            <span>Back</span>
          </BackButton>
          <SelectedCard cardType={selectedRole}>
            <span className="title">{roleData[selectedRole].title}</span>
            <SkillList>
              {roleData[selectedRole].skills.map((skill, index) => (
                <SkillItem
                  key={index}
                  visible={visibleItems[selectedRole + index]}
                >
                  <span>{skill}</span>
                  <CheckIcon checked={checkedItems[selectedRole + index]}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </CheckIcon>
                </SkillItem>
              ))}
            </SkillList>
          </SelectedCard>
        </CardGroup>
      </LeftSection>

      <RightSection>
        <ContentGroup>
          <UnselectedCards>
            {getUnselectedRoles().map((role) => (
              <UnselectedCard
                key={role.type}
                cardType={role.type}
                onClick={() => onCardClick(role.type)}
              >
                <span className="title">{role.title}</span>
                <span className="click-text">(click to view)</span>
              </UnselectedCard>
            ))}
          </UnselectedCards>

          <ContentSection>
            <StyledAvatar alt="Avatar" src={AvatarImage} />
            <IntroContainer>
              <StyledTyped>
                <ReactTyped
                  strings={[roleDescriptions[selectedRole]]}
                  typeSpeed={40}
                  cursorChar="|"
                  showCursor={true}
                />
              </StyledTyped>
            </IntroContainer>
          </ContentSection>
        </ContentGroup>
      </RightSection>
    </SelectedContainer>
  );
};

export default AboutAfterSelected;
