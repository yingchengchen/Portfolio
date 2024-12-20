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
import theme from "theme";

const roleData = {
  engineer: {
    title: "Data Visualization Engineer",
    skills: [
      "Preprocessing data with Machine Learning",
      <span style={{ display: "flex", alignItems: "center" }}>
        Visualization libraries
        <img
          src={`${process.env.PUBLIC_URL}/icons/python.svg`}
          alt="Python"
          style={{
            width: "1.5em",
            height: "1.5em",
            marginLeft: "0.3em",
            marginRight: "0.3em",
          }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/icons/javascript.svg`}
          alt="Python"
          style={{
            width: "1.5em",
            height: "1.5em",
            marginLeft: "0.3em",
            marginRight: "0.3em",
          }}
        />
      </span>,
      "Interactive dashboards",
      <>Clear, easy understanding, and actionable insights</>,
    ],
  },
  researcher: {
    title: "Visual Analytics Researcher",
    skills: [
      <span style={{ display: "flex", alignItems: "center" }}>
        Manage larger dataset
        <img
          src={`${process.env.PUBLIC_URL}/icons/amazon.svg`}
          alt="Python"
          style={{
            width: "1.5em",
            height: "1.5em",
            marginLeft: "0.3em",
            marginRight: "0.3em",
          }}
        />
      </span>,
      <>Large Language Model Data Analysis</>,
      <>User Study</>,
      <span style={{ display: "flex", alignItems: "center" }}>
        Web Development
        <img
          src={`${process.env.PUBLIC_URL}/icons/react.svg`}
          alt="Python"
          style={{
            width: "1.5em",
            height: "1.5em",
            marginLeft: "0.3em",
            marginRight: "0.3em",
          }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/icons/vue-js.svg`}
          alt="Python"
          style={{
            width: "1.5em",
            height: "1.5em",
            marginLeft: "0.3em",
            marginRight: "0.3em",
          }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/icons/svelte.svg`}
          alt="Python"
          style={{
            width: "1.5em",
            height: "1.5em",
            marginLeft: "0.3em",
            marginRight: "0.3em",
          }}
        />
      </span>,
      "Solve real-world problems",
    ],
  },
  developer: {
    title: "UI/UX and Frontend Web Developer",
    skills: [
      <span style={{ display: "flex", alignItems: "center" }}>
        Database management
        <img
          src={`${process.env.PUBLIC_URL}/icons/postgresql.svg`}
          alt="Python"
          style={{
            width: "1.5em",
            height: "1.5em",
            marginLeft: "0.3em",
            marginRight: "0.3em",
          }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/icons/mysql.svg`}
          alt="Python"
          style={{
            width: "2em",
            height: "2em",
            marginLeft: "0.3em",
            marginRight: "0.3em",
          }}
        />
      </span>,
      <span style={{ display: "flex", alignItems: "center" }}>
        API and server integration
        <img
          src={`${process.env.PUBLIC_URL}/icons/node-js.svg`}
          alt="Python"
          style={{
            width: "1.5em",
            height: "1.5em",
            marginLeft: "0.3em",
            marginRight: "0.3em",
          }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/icons/flask.svg`}
          alt="Python"
          style={{
            width: "1.5em",
            height: "1.5em",
            marginLeft: "0.3em",
            marginRight: "0.3em",
          }}
        />
      </span>,
      <span style={{ display: "flex", alignItems: "center" }}>
        User-Centered Design
        <img
          src={`${process.env.PUBLIC_URL}/icons/figma.svg`}
          alt="Python"
          style={{
            width: "1.5em",
            height: "1.5em",
            marginLeft: "0.3em",
            marginRight: "0.3em",
          }}
        />
      </span>,
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
    width: 33, // rem (23 * 1.5)
    height: 27, // rem (18 * 1.5)
    titleFontSize: 1.8, // rem (1.5 * 1.5)
    itemFontSize: 1.3, // rem (1 * 1.5)
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
    height: 30, // rem (same as selected card)
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
  transition: "all 0.5s ease",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
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

  "& svg": {
    width: `${SELECTED_BASE.backButtonSize.fontSize * 1.2}rem`,
    height: `${SELECTED_BASE.backButtonSize.fontSize * 1.2}rem`,
    transition: "all 0.3s ease",
  },
  "@media (hover: hover)": {
    "&:hover": {
      transform: "translateX(-5px)",
      textDecoration: "underline",
    },
  },

  [theme.breakpoints.down("lg")]: {
    fontSize: `${
      SELECTED_BASE.backButtonSize.fontSize * SCALE_MULTIPLIERS.lg
    }rem`,
    padding: `${
      SELECTED_BASE.backButtonSize.padding * SCALE_MULTIPLIERS.lg
    }rem`,
    gap: `${SELECTED_BASE.backButtonSize.gap * SCALE_MULTIPLIERS.lg}rem`,
    "& svg": {
      width: `${
        SELECTED_BASE.backButtonSize.fontSize * 1.2 * SCALE_MULTIPLIERS.lg
      }rem`,
      height: `${
        SELECTED_BASE.backButtonSize.fontSize * 1.2 * SCALE_MULTIPLIERS.lg
      }rem`,
    },
  },
  [theme.breakpoints.down("md")]: {
    fontSize: `${
      SELECTED_BASE.backButtonSize.fontSize * SCALE_MULTIPLIERS.md
    }rem`,
    padding: `${
      SELECTED_BASE.backButtonSize.padding * SCALE_MULTIPLIERS.md
    }rem`,
    gap: `${SELECTED_BASE.backButtonSize.gap * SCALE_MULTIPLIERS.md}rem`,
    "& svg": {
      width: `${
        SELECTED_BASE.backButtonSize.fontSize * 1.2 * SCALE_MULTIPLIERS.md
      }rem`,
      height: `${
        SELECTED_BASE.backButtonSize.fontSize * 1.2 * SCALE_MULTIPLIERS.md
      }rem`,
    },
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: `${
      SELECTED_BASE.backButtonSize.fontSize * SCALE_MULTIPLIERS.sm
    }rem`,
    padding: `${
      SELECTED_BASE.backButtonSize.padding * SCALE_MULTIPLIERS.sm
    }rem`,
    gap: `${SELECTED_BASE.backButtonSize.gap * SCALE_MULTIPLIERS.sm}rem`,
    "& svg": {
      width: `${
        SELECTED_BASE.backButtonSize.fontSize * 1.2 * SCALE_MULTIPLIERS.sm
      }rem`,
      height: `${
        SELECTED_BASE.backButtonSize.fontSize * 1.2 * SCALE_MULTIPLIERS.sm
      }rem`,
    },
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
  height: `${SELECTED_BASE.contentGroup.height}rem`,
  padding: `${SELECTED_BASE.padding}rem`,
  gap: `${SELECTED_BASE.contentGroup.gap}rem`,
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("lg")]: {
    height: `${SELECTED_BASE.contentGroup.height * SCALE_MULTIPLIERS.lg}rem`,
    padding: `${SELECTED_BASE.padding * SCALE_MULTIPLIERS.lg}rem`,
    gap: `${SELECTED_BASE.contentGroup.gap * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
    height: `${
      SELECTED_BASE.contentGroup.height * 0.7 * SCALE_MULTIPLIERS.md
    }rem`,
    padding: `${SELECTED_BASE.padding * SCALE_MULTIPLIERS.md}rem`,
    gap: `${SELECTED_BASE.contentGroup.gap * SCALE_MULTIPLIERS.md}rem`,
  },
  [theme.breakpoints.down("sm")]: {
    height: `${SELECTED_BASE.contentGroup.height * SCALE_MULTIPLIERS.sm}rem`,
    gap: `${SELECTED_BASE.contentGroup.gap * SCALE_MULTIPLIERS.sm}rem`,
  },
}));

const UnselectedCardsWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: `${SELECTED_BASE.unselectedCard.gap}rem`,
  // flex: 1,
  width: "100%",
});

const UnselectedCards = styled("div")(({ theme }) => ({
  display: "flex",
  flex: 1,
}));
const ContentSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: `${SELECTED_BASE.gap}rem`,
  width: "100%",
  flex: 1,

  [theme.breakpoints.down("lg")]: {
    gap: `${SELECTED_BASE.gap * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
    flex: 4,
    gap: `${SELECTED_BASE.gap * SCALE_MULTIPLIERS.md}rem`,
  },
  [theme.breakpoints.down("sm")]: {
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
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  transition: "all 0.5s ease",

  [theme.breakpoints.down("lg")]: {
    width: `${SELECTED_BASE.selectedCard.width * SCALE_MULTIPLIERS.lg}rem`,
    height: `${SELECTED_BASE.selectedCard.height * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
    width: `${SELECTED_BASE.selectedCard.width * SCALE_MULTIPLIERS.md}rem`,
    height: `${SELECTED_BASE.selectedCard.height * SCALE_MULTIPLIERS.md}rem`,
  },
  [theme.breakpoints.down("sm")]: {
    width: `${SELECTED_BASE.selectedCard.width * SCALE_MULTIPLIERS.sm}rem`,
    height: `${
      SELECTED_BASE.selectedCard.height * 1.2 * SCALE_MULTIPLIERS.sm
    }rem`,
  },
}));

const CheckIcon = styled("div")(({ checked, theme }) => ({
  width: `${SELECTED_BASE.selectedCard.itemFontSize * 1.2}rem`,
  height: `${SELECTED_BASE.selectedCard.itemFontSize * 1.2}rem`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  transition: "all 0.5s ease",
  color: checked ? "#00CDC1" : "#697478",

  "& svg": {
    width: "100%",
    height: "100%",
  },

  [theme.breakpoints.down("lg")]: {
    width: `${
      SELECTED_BASE.selectedCard.itemFontSize * 1.2 * SCALE_MULTIPLIERS.lg
    }rem`,
    height: `${
      SELECTED_BASE.selectedCard.itemFontSize * 1.2 * SCALE_MULTIPLIERS.lg
    }rem`,
  },
  [theme.breakpoints.down("md")]: {
    width: `${
      SELECTED_BASE.selectedCard.itemFontSize * 1.2 * SCALE_MULTIPLIERS.md
    }rem`,
    height: `${
      SELECTED_BASE.selectedCard.itemFontSize * 1.2 * SCALE_MULTIPLIERS.md
    }rem`,
  },
  [theme.breakpoints.down("sm")]: {
    width: `${
      SELECTED_BASE.selectedCard.itemFontSize * 1.2 * SCALE_MULTIPLIERS.sm
    }rem`,
    height: `${
      SELECTED_BASE.selectedCard.itemFontSize * 1.2 * SCALE_MULTIPLIERS.sm
    }rem`,
  },
}));

const SkillList = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
}));

const TitleItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: `${SELECTED_BASE.selectedCard.titleFontSize}rem`,
  fontFamily: "God",

  "& span": {
    wordWrap: "break-word",
    wordBreak: "break-word",
    hyphens: "auto",
    overflow: "hidden",
    display: "block",
    boxSizing: "border-box",
  },

  [theme.breakpoints.down("lg")]: {
    fontSize: `${
      SELECTED_BASE.selectedCard.titleFontSize * SCALE_MULTIPLIERS.lg
    }rem`,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: `${
      SELECTED_BASE.selectedCard.titleFontSize * SCALE_MULTIPLIERS.md
    }rem`,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: `${
      SELECTED_BASE.selectedCard.titleFontSize * SCALE_MULTIPLIERS.sm
    }rem`,
  },
  "@media (max-width: 480px)": {
    fontSize: `${
      SELECTED_BASE.selectedCard.titleFontSize * SCALE_MULTIPLIERS.xs
    }rem`,
  },
}));

const SkillItem = styled("div")(({ visible }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  fontSize: `${SELECTED_BASE.selectedCard.itemFontSize}rem`,
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(20px)",
  transition: "all 0.5s ease",

  "& > span:first-of-type": {
    flex: 1,
    minHeight: `${SELECTED_BASE.selectedCard.itemFontSize * 1.2}rem`,
  },

  [theme.breakpoints.down("lg")]: {
    fontSize: `${
      SELECTED_BASE.selectedCard.itemFontSize * SCALE_MULTIPLIERS.lg
    }rem`,
    "& > span:first-of-type": {
      minHeight: `${
        SELECTED_BASE.selectedCard.itemFontSize * 1.2 * SCALE_MULTIPLIERS.lg
      }rem`,
    },
  },
  [theme.breakpoints.down("md")]: {
    fontSize: `${
      SELECTED_BASE.selectedCard.itemFontSize * SCALE_MULTIPLIERS.md
    }rem`,
    "& > span:first-of-type": {
      minHeight: `${
        SELECTED_BASE.selectedCard.itemFontSize * 1.2 * SCALE_MULTIPLIERS.md
      }rem`,
    },
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: `${
      SELECTED_BASE.selectedCard.itemFontSize * SCALE_MULTIPLIERS.sm
    }rem`,
    "& > span:first-of-type": {
      minHeight: `${
        SELECTED_BASE.selectedCard.itemFontSize * 1.2 * SCALE_MULTIPLIERS.sm
      }rem`,
    },
  },
}));

const UnselectedCard = styled("div")(({ theme, cardType }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  cursor: "pointer",
  transition: "transform 0.3s ease",
  width: `${SELECTED_BASE.selectedCard.width * 0.8}rem`,

  "& .title": {
    padding: theme.spacing(0.8, 1.2),
    fontWeight: 600,
    fontSize: "0.8rem",
    borderRadius: theme.spacing(1),
    backgroundColor: CARD_COLORS[cardType],
    color: "#697478",
    textAlign: "center",
    minWidth: "120px",
  },

  "& .click-text": {
    fontSize: "0.7rem",
    fontWeight: 500,
    textAlign: "center",
    color: "#697478",
    fontStyle: "italic",
    opacity: 0.8,
  },
  "@media (hover: hover)": {
    "&:hover": {
      transform: "translateY(-2px)",

      "& .click-text": {
        opacity: 1,
      },
    },
  },

  // Responsive styles
  [theme.breakpoints.down("lg")]: {
    width: `${
      SELECTED_BASE.selectedCard.width * 0.8 * SCALE_MULTIPLIERS.lg
    }rem`,
    "& .title": {
      fontSize: "0.75rem",
      padding: theme.spacing(0.7, 1.1),
    },
    "& .click-text": {
      fontSize: "0.65rem",
    },
  },
  [theme.breakpoints.down("md")]: {
    width: `${
      SELECTED_BASE.selectedCard.width * 0.8 * SCALE_MULTIPLIERS.md
    }rem`,
    "& .title": {
      fontSize: "0.7rem",
      padding: theme.spacing(0.6, 1),
      minWidth: "100px",
    },
    "& .click-text": {
      fontSize: "0.6rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: `${SELECTED_BASE.selectedCard.width * SCALE_MULTIPLIERS.sm}rem`,
    "& .title": {
      fontSize: "0.65rem",
      padding: theme.spacing(0.5, 0.9),
      minWidth: "90px",
    },
    "& .click-text": {
      fontSize: "0.55rem",
    },
  },
  "@media (max-width: 480px)": {
    width: `${SELECTED_BASE.selectedCard.width * SCALE_MULTIPLIERS.xs}rem`,
    "& .title": {
      fontSize: "0.6rem",
      padding: theme.spacing(0.4, 0.8),
      minWidth: "80px",
    },
    "& .click-text": {
      fontSize: "0.5rem",
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
            <SkillList>
              <TitleItem>
                <span>{roleData[selectedRole].title}</span>
              </TitleItem>
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
            <UnselectedCardsWrapper>
              {getUnselectedRoles().map((role) => (
                <UnselectedCard
                  key={role.type}
                  cardType={role.type}
                  onClick={() => onCardClick(role.type)}
                >
                  <span className="title">
                    {role.title}{" "}
                    <span className="click-text">(click to view)</span>
                  </span>
                </UnselectedCard>
              ))}
            </UnselectedCardsWrapper>
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
