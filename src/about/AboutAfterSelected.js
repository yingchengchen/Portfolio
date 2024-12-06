// AboutAfterSelected.js
import React from "react";
import { styled } from "@mui/material/styles";
import { ReactTyped } from "react-typed";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { StyledAvatar, IntroContainer, StyledTyped } from "./AboutStyle";

const BackButton = styled("button")({
  position: "absolute",
  top: "5rem",
  left: "5rem",
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  color: "#697478",
  fontSize: "1rem",
  padding: "0.5rem",
  transition: "all 0.3s ease",

  "&:hover": {
    transform: "translateX(-5px)",
  },
});
// Container for the entire selected view
const SelectedContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  gap: "2rem",
  transition: "all 0.5s ease",
}));

// Left side container for selected card
const LeftSection = styled("div")(({ theme }) => ({
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Right side container
const RightSection = styled("div")(({ theme }) => ({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  //   gap: '2rem',
}));

// Container for unselected cards
const UnselectedCards = styled("div")(({ theme }) => ({
  flex: "1", // Takes 40% of the right section
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
}));

const ContentSection = styled("div")(({ theme }) => ({
  flex: "1", // Takes 60% of the right section
  display: "flex",
  alignItems: "center", // Center vertically
  justifyContent: "center", // Center horizontally
  flexDirection: "row",
  gap: "2rem",
  width: "100%",
  position: "relative",
}));

// // New wrapper for grouping avatar and text
// const ContentGroup = styled('div')(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',     // Center items vertically within the group
//     justifyContent: 'center', // Center the group horizontally
//     gap: '2rem',
//     maxWidth: '80%',         // Prevent the content from stretching too wide

//     position: 'relative',    // Add this for proper positioning
//     top: '-10%',              // Move the content down by 50%
//   }));

// New Selected Card Component
const SelectedCard = styled("div")(({ theme, cardType }) => {
  const colors = {
    engineer: "#EAD0D1",
    researcher: "#E0E5DF",
    developer: "#C1CBDC",
  };

  return {
    width: "34.5rem", // 23rem * 1.5
    height: "27rem", // 18rem * 1.5
    backgroundColor: colors[cardType],
    borderRadius: theme.shape.borderRadius,
    border: "0.156rem solid #697478",
    padding: "2.25rem", // 1.5rem * 1.5
    cursor: "pointer",
    color: "#697478",
    fontWeight: 500,
    fontSize: "2.25rem", // 1.5rem * 1.5
    display: "flex",
    transition: "all 0.5s ease",
    position: "relative",

    "& > span": {
      width: "50%",
      wordWrap: "break-word",
      wordBreak: "break-word",
      hyphens: "auto",
      overflow: "hidden",
      display: "block",
      boxSizing: "border-box",
    },

    "&:hover": {
      boxShadow: "0 0.625rem 1.25rem rgba(0,0,0,0.1)",
    },
  };
});

// New Unselected Card Component
const UnselectedCard = styled("div")(({ theme, cardType }) => {
  const colors = {
    engineer: "#EAD0D1",
    researcher: "#E0E5DF",
    developer: "#C1CBDC",
  };

  return {
    width: "13.8rem", // 23rem * 0.6
    height: "10.8rem", // 18rem * 0.6
    backgroundColor: colors[cardType],
    borderRadius: theme.shape.borderRadius,
    border: "0.156rem solid #697478",
    padding: "0.9rem", // 1.5rem * 0.6
    cursor: "pointer",
    color: "#697478",
    fontWeight: 500,
    fontSize: "0.9rem", // 1.5rem * 0.6
    display: "flex",
    transition: "all 0.5s ease",
    position: "relative",
    top: "1.5rem",

    "& > span": {
      width: "50%",
      wordWrap: "break-word",
      wordBreak: "break-word",
      hyphens: "auto",
      overflow: "hidden",
      display: "block",
      boxSizing: "border-box",
    },

    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0.625rem 1.25rem rgba(0,0,0,0.1)",
    },
  };
});

const AboutAfterSelected = ({
  selectedRole,
  roles,
  onCardClick,
  roleDescriptions,
  AvatarImage,
  onBack,
}) => {
  const getUnselectedRoles = () =>
    roles.filter((role) => role.type !== selectedRole);

  return (
    <SelectedContainer>
      <BackButton onClick={onBack}>
        <ArrowBackIcon />
        <span>Back</span>
      </BackButton>
      <LeftSection>
        <SelectedCard
          cardType={selectedRole}
          onClick={() => onCardClick(selectedRole)}
        >
          <span>{roles.find((r) => r.type === selectedRole)?.title}</span>
        </SelectedCard>
      </LeftSection>

      <RightSection>
        <UnselectedCards>
          {getUnselectedRoles().map((role) => (
            <UnselectedCard
              key={role.type}
              cardType={role.type}
              onClick={() => onCardClick(role.type)}
            >
              <span>{role.title}</span>
            </UnselectedCard>
          ))}
        </UnselectedCards>

        <ContentSection>
          {/* <ContentGroup> */}
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
          {/* </ContentGroup> */}
        </ContentSection>
      </RightSection>
    </SelectedContainer>
  );
};

export default AboutAfterSelected;
