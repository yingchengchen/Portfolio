// SkillsStyle.js
import { styled } from "@mui/material/styles";
import { Typography, Avatar, Grid } from "@mui/material";

const BASE = {
  spacing: {
    lg: 1,
    md: 0.85,
    sm: 0.7,
    xs: 0.6,
  },
  HEIGHT:550, //px
  mobileHEIGHT: 700, //px
};

export const SkillsWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - var(--navbar-height))",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  '@media (max-width: 480px)': {
    minHeight: "auto",
    padding: theme.spacing(2, 1),
  }
}));

export const SkillsRoot = styled(Grid)(({ theme }) => ({
  width: "100%",
  maxWidth: "1403px",
  margin: "0 auto",
  height: `${BASE.HEIGHT}px`,
  padding: theme.spacing(4), // Outer padding for border position
  display: "flex",
  flexDirection: "row",
  position: "relative",
  backgroundColor: "none",

  // Border styles
  "&::after": {
    content: '""',
    position: "absolute",
    top: theme.spacing(4),
    right: theme.spacing(4),
    bottom: theme.spacing(4),
    left: theme.spacing(4),
    border: `1px solid ${theme.palette.custom.accent1}`,
    borderRadius: theme.spacing(2),
    pointerEvents: "none",
  },

  // Inner container for content
  "& > *": {
    padding: theme.spacing(2), // Add inner padding for content
  },

  [theme.breakpoints.down("lg")]: {
    height: `${BASE.HEIGHT * BASE.spacing.lg}px`,
    padding: theme.spacing(3),
    "& > *": {
      padding: theme.spacing(1.5),
    },
    "&::after": {
      top: theme.spacing(3),
      right: theme.spacing(3),
      bottom: theme.spacing(3),
      left: theme.spacing(3),
    },
  },

  [theme.breakpoints.down("md")]: {
    height: `${BASE.mobileHEIGHT}px`,
    flexDirection: "column",
    padding: theme.spacing(3),
    "& > *": {
      padding: theme.spacing(1.5),
    },
    "&::after": {
      top: theme.spacing(3),
      right: theme.spacing(3),
      bottom: theme.spacing(3),
      left: theme.spacing(3),
    },
  },

  [theme.breakpoints.down("sm")]: {
    height: `${BASE.mobileHEIGHT}px`,
    flexDirection: "column",
    padding: theme.spacing(2.5),
    "& > *": {
      padding: theme.spacing(1.25),
    },
    "&::after": {
      top: theme.spacing(2.5),
      right: theme.spacing(2.5),
      bottom: theme.spacing(2.5),
      left: theme.spacing(2.5),
    },
  },

  '@media (max-width: 480px)': {
    // height: "auto",
    // minHeight: "100vh",
    // minheight:`${BASE.mobileHEIGHT}px`,
    height: `${BASE.mobileHEIGHT}px`,
    padding: theme.spacing(2),
    flexDirection: "column",
    gap: theme.spacing(1),
    
    "& > *": {
      padding: theme.spacing(1),
    },
    "&::after": {
      top: theme.spacing(2),
      right: theme.spacing(2),
      bottom: theme.spacing(2),
      left: theme.spacing(2),
    }
  }
}));

export const SkillsVisualSection = styled(Grid)(({ theme }) => ({
  flex: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  height: "100%", 


  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    "& svg": {
      transformOrigin: "center center",
    },
  },

  '@media (max-width: 480px)': {
    padding: theme.spacing(1),
    "& svg": {
      maxWidth: "100%",
      height: "auto",
    }
  }
}));

// Base dimensions for content - matching About's scale
const CONTENT_BASE = {
  avatarSize: 4, // rem
  introMaxWidth: 23, // rem
  fontSize: 1.0, // rem
  gap: 2, // rem
};

// Scale multipliers - matching About's scale
const SCALE_MULTIPLIERS = {
  lg: 0.75,
  md: 0.7,
  sm: 0.55,
  xs: 0.45,
};

export const ContentWrapper = styled(Grid)(({ theme }) => ({
  flex: 3,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: `${CONTENT_BASE.gap}rem`,
  width: "50%",
  height: "100%",
  transition: "all 0.3s ease",

  [theme.breakpoints.down("lg")]: {
    gap: `${CONTENT_BASE.gap * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
  },
}));

export const ContentInnerGroup = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: `${CONTENT_BASE.gap}rem`,
  maxWidth: `${
    CONTENT_BASE.introMaxWidth + CONTENT_BASE.avatarSize + CONTENT_BASE.gap
  }rem`,
  width: "100%",
  [theme.breakpoints.down("lg")]:{
    maxWidth: `${
      CONTENT_BASE.introMaxWidth * SCALE_MULTIPLIERS.lg +
      CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.lg +
      CONTENT_BASE.gap * SCALE_MULTIPLIERS.lg
    }rem`,
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  '@media (max-width: 480px)': {
    flexDirection: "column",
    maxWidth: `${
      CONTENT_BASE.introMaxWidth * SCALE_MULTIPLIERS.xs +
      CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.xs +
      CONTENT_BASE.gap * SCALE_MULTIPLIERS.xs
    }rem`,
    gap: `${CONTENT_BASE.gap * SCALE_MULTIPLIERS.xs}rem`,
  }
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: `${CONTENT_BASE.avatarSize}rem`,
  height: `${CONTENT_BASE.avatarSize}rem`,
  flexShrink: 0,
  transition: "all 0.3s ease",

  [theme.breakpoints.down("lg")]: {
    width: `${CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.lg}rem`,
    height: `${CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
    width: `${CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.md}rem`,
    height: `${CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.md}rem`,
  },
  [theme.breakpoints.down("sm")]: {
    width: `${CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.sm}rem`,
    height: `${CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.sm}rem`,
  },
}));

export const IntroContainer = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  textAlign:"justify",
  maxWidth: `${CONTENT_BASE.introMaxWidth}rem`,
  transition: "all 0.3s ease",

  [theme.breakpoints.down("lg")]: {
    maxWidth: `${CONTENT_BASE.introMaxWidth * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: `${CONTENT_BASE.introMaxWidth}rem`,
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: `${CONTENT_BASE.introMaxWidth}rem`,
  },
}));

export const StyledTyped = styled("div")(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  fontStyle: "italic",
  letterSpacing: ".10em",
  fontSize: `${CONTENT_BASE.fontSize}rem`,
  transition: "all 0.3s ease",
  "& .typed-cursor": {
    color: "#697478",
  },

  [theme.breakpoints.down("lg")]: {
    fontSize: `${CONTENT_BASE.fontSize * SCALE_MULTIPLIERS.lg}rem`,
  },
}));
