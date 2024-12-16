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
};

export const SkillsWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - var(--navbar-height))",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const SkillsRoot = styled(Grid)(({ theme }) => ({
  width: "100%",
  maxWidth: "1403px",
  margin: "0 auto",
  height: "638px",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "row",
  position: "relative",
  backgroundColor: "none",

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

  [theme.breakpoints.down("lg")]: {
    height: `${638 * BASE.spacing.lg}px`,
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down("md")]: {
    height: "844px",
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
    height: "844px",
    flexDirection: "column",
  },
}));

export const SkillsVisualSection = styled(Grid)(({ theme }) => ({
  flex: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  minHeight: "550px", // Accommodating the large chart size

  [theme.breakpoints.down("lg")]: {
    minHeight: "550px", // Maintaining the same size
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    flex: 1,
    // height: "66.67vh",
    minHeight: "400px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    flex: 1,
    minHeight: "400px",
    "& svg": {
      // transform: "scale(0.9)", // Further scale down if needed
      transformOrigin: "center center",
    },
  },
}));

// Base dimensions for content - matching About's scale
const CONTENT_BASE = {
  avatarSize: 4, // rem
  introMaxWidth: 18, // rem
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
    alignItems: "center",
    // textAlign: 'center',
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    // textAlign: 'center',
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
    // flexDirection: "column",
    alignItems: "center",
    maxWidth: `${
      CONTENT_BASE.introMaxWidth * SCALE_MULTIPLIERS.lg +
      CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.lg +
      CONTENT_BASE.gap * SCALE_MULTIPLIERS.lg
    }rem`,
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
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
    alignItems: "center",
    maxWidth: `${CONTENT_BASE.introMaxWidth * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    maxWidth: `${CONTENT_BASE.introMaxWidth}rem`,
  },
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
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
  [theme.breakpoints.down("md")]: {
    // textAlign: 'center',
  },
  [theme.breakpoints.down("sm")]: {
    // textAlign: 'center',
  },
}));
