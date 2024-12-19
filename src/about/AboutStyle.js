// AboutStyle.js
import { styled } from "@mui/material/styles";
import { Avatar } from "@mui/material";
import { max } from "d3";

// Base dimensions for layout
const BASE_ROOT = {
  padding: 2, // rem
  gap: 2, // rem
};
// Base dimensions for content
const CONTENT_BASE = {
  avatarSize: 4, // rem
  introMaxWidth: 30, // rem
  fontSize: 1.0, // rem
  gap: 2, // rem
};

// Base dimensions for cards
const BASE_DIMENSIONS = {
  HEIGHT: 638, // px
  mobileHEIGHT: 700, // px
  cardWidth: 23, // rem
  cardHeight: 15, // rem
  baseFontSize: 1.5, // rem

  spacing: {
    first: 3,
    second: 10,
    third: 14,
  },

  offset: {
    first: 0,
    second: 10,
    third: 22,
  },
};

// Scale multipliers
export const SCALE_MULTIPLIERS = {
  lg: 0.75,
  md: 0.7,
  sm: 0.55, // smallest website
  xs: 0.45, // mobile
};

// Calculate container dimensions
const getContainerDimensions = (multiplier = 1) => ({
  width:
    (BASE_DIMENSIONS.cardWidth + BASE_DIMENSIONS.offset.third) * multiplier,
  height:
    (BASE_DIMENSIONS.cardHeight + BASE_DIMENSIONS.spacing.third) * multiplier,
});

// Generate card styles with scaling
const generateCardStyles = (multiplier = 1) => {
  const scaledWidth = BASE_DIMENSIONS.cardWidth * multiplier;
  const scaledHeight = BASE_DIMENSIONS.cardHeight * multiplier;
  const scaledFontSize = BASE_DIMENSIONS.baseFontSize * multiplier;

  return {
    developer: {
      backgroundColor: "#C1CBDC",
      top: `${BASE_DIMENSIONS.spacing.third * multiplier}rem`,
      left: `${BASE_DIMENSIONS.offset.third * multiplier}rem`,
      width: `${scaledWidth}rem`,
      height: `${scaledHeight}rem`,
      fontSize: `${scaledFontSize}rem`,
      zIndex: 3,
    },
    researcher: {
      backgroundColor: "#E0E5DF",
      top: `${BASE_DIMENSIONS.spacing.second * multiplier}rem`,
      left: `${BASE_DIMENSIONS.offset.second * multiplier}rem`,
      width: `${scaledWidth}rem`,
      height: `${scaledHeight}rem`,
      fontSize: `${scaledFontSize}rem`,
      zIndex: 2,
    },
    engineer: {
      backgroundColor: "#EAD0D1",
      top: `${BASE_DIMENSIONS.spacing.first * multiplier}rem`,
      left: `${BASE_DIMENSIONS.offset.first * multiplier}rem`,
      width: `${scaledWidth}rem`,
      height: `${scaledHeight}rem`,
      fontSize: `${scaledFontSize}rem`,
      zIndex: 1,
    },
  };
};
export const AboutContainer = styled("div")(({ theme }) => ({
  "#about": {
    minHeight: `${BASE_DIMENSIONS.HEIGHT}px`,
    height: `${BASE_DIMENSIONS.HEIGHT}px`,
    marginTop: `max(0px, calc((100vh - var(--navbar-height) - ${BASE_DIMENSIONS.HEIGHT}px) / 2))`,
    marginBottom: `max(0px, calc((100vh - var(--navbar-height) - ${BASE_DIMENSIONS.HEIGHT}px) / 2))`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("lg")]: {
      height: `${BASE_DIMENSIONS.HEIGHT * SCALE_MULTIPLIERS.lg}px`,
    },

    [theme.breakpoints.down("md")]: {
      height: `${BASE_DIMENSIONS.mobileHEIGHT}px`,
      marginTop: 0,
      marginBottom: 0,
    },

    [theme.breakpoints.down("sm")]: {
      height: `${BASE_DIMENSIONS.mobileHEIGHT}px`,
      marginTop: 0,
      marginBottom: 0,
    },

    "@media (max-width: 480px)": {
      // height:"auto",
      // minheight: `${BASE_DIMENSIONS.mobileHEIGHT}px`,
      height: `${BASE_DIMENSIONS.mobileHEIGHT}px`,
      marginTop: 0,
      marginBottom: 0,
    },
  },
}));

export const AboutRoot = styled("div")(({ theme }) => ({
  height: `${BASE_DIMENSIONS.HEIGHT}px`,
  width: "100%",
  maxWidth: "1403px",
  margin: "0 0",
  padding: `${BASE_ROOT.padding}rem`,
  display: "flex",
  alignItems: "center",
  gap: `${BASE_ROOT.gap}rem`,
  overflow: "auto",
  position: "relative",

  [theme.breakpoints.down("lg")]: {
    height: `${BASE_DIMENSIONS.HEIGHT * SCALE_MULTIPLIERS.lg}px`,
    padding: `${BASE_ROOT.padding * SCALE_MULTIPLIERS.lg}rem`,
    gap: `${BASE_ROOT.gap * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
    height: `${BASE_DIMENSIONS.mobileHEIGHT}px`,
    flexDirection: "column",
    padding: `${BASE_ROOT.padding * SCALE_MULTIPLIERS.md}rem`,
    gap: `${BASE_ROOT.gap * SCALE_MULTIPLIERS.md}rem`,
  },
  [theme.breakpoints.down("sm")]: {
    height: `${BASE_DIMENSIONS.mobileHEIGHT}px`,
    flexDirection: "column",
    padding: `${BASE_ROOT.padding * SCALE_MULTIPLIERS.sm}rem`,
    gap: `${BASE_ROOT.gap * SCALE_MULTIPLIERS.sm}rem`,
  },
  "@media (max-width: 480px)": {
    height: "auto",
    minheight: `${BASE_DIMENSIONS.mobileHEIGHT}px`,
    flexDirection: "column",
    padding: `${BASE_ROOT.padding * SCALE_MULTIPLIERS.xs}rem`,
    gap: `${BASE_ROOT.gap * SCALE_MULTIPLIERS.xs}rem`,
  },
}));

export const ContentWrapper = styled("div")(({ theme }) => ({
  flex: "1",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: `${CONTENT_BASE.gap}rem`,
  width: "100%",
  height: "100%",
  transition: "all 0.3s ease",

  [theme.breakpoints.down("lg")]: {
    gap: `${CONTENT_BASE.gap * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  "@media (max-width: 480px)": {
    flex: "1",
    flexDirection: "column",
  },
}));

// Create a new wrapper for the avatar and intro container
export const ContentInnerGroup = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: `${CONTENT_BASE.gap}rem`,
  maxWidth: `${
    CONTENT_BASE.introMaxWidth + CONTENT_BASE.avatarSize + CONTENT_BASE.gap
  }rem`, // Combined max-width
  width: "100%",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  "@media (max-width: 480px)": {
    flexDirection: "column",
  },
}));

// StyledAvatar - Keep fixed size but align to the left
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

// IntroContainer - Take remaining width
export const IntroContainer = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  maxWidth: `${CONTENT_BASE.introMaxWidth}rem`,
  transition: "all 0.3s ease",

  [theme.breakpoints.down("lg")]: {
    maxWidth: `${CONTENT_BASE.introMaxWidth * SCALE_MULTIPLIERS.lg}rem`,
  },
  [theme.breakpoints.down("md")]: {
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: `${CONTENT_BASE.introMaxWidth * SCALE_MULTIPLIERS.sm}rem`,
  },
}));

// Typed text styling
export const StyledTyped = styled("div")(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  fontStyle: "italic",
  textAlign: "justify",
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

// Card container
export const CardContainer = styled("div")(({ theme }) => ({
  flex: "2",
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    flex: "1",
    width: "100%",
    padding: "0 1rem",
  },
  "@media (max-width: 480px)": {
    alignItems: "flex-start",
    flex: "1",
    width: "100%",
    padding: "0 1rem",
  },
}));

// Cards group
export const CardsGroup = styled("div")(({ theme }) => {
  const baseDimensions = getContainerDimensions(1);

  return {
    position: "relative",
    width: `${baseDimensions.width}rem`,
    height: `${baseDimensions.height}rem`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",

    [theme.breakpoints.down("lg")]: {
      width: `${getContainerDimensions(SCALE_MULTIPLIERS.lg).width}rem`,
      height: `${getContainerDimensions(SCALE_MULTIPLIERS.lg).height}rem`,
    },
    [theme.breakpoints.down("md")]: {
      width: `${getContainerDimensions(SCALE_MULTIPLIERS.md).width}rem`,
      height: `${getContainerDimensions(SCALE_MULTIPLIERS.md).height}rem`,
    },
    [theme.breakpoints.down("sm")]: {
      width: `${getContainerDimensions(SCALE_MULTIPLIERS.sm).width}rem`,
      height: `${getContainerDimensions(SCALE_MULTIPLIERS.sm).height}rem`,
    },
    "@media (max-width: 480px)": {
      width: `${getContainerDimensions(SCALE_MULTIPLIERS.xs).width}rem`,
      height: `${getContainerDimensions(SCALE_MULTIPLIERS.xs).height}rem`,
    },
  };
});

export const RoleCard = styled("div")(
  ({ theme, cardType = "developer", bounce }) => {
    const baseStyles = generateCardStyles(1)[cardType];

    return {
      padding: "1.5rem",
      borderRadius: theme.shape.borderRadius,
      border: "0.156rem solid #697478",
      position: "absolute",
      cursor: "pointer",
      color: "#697478",
      fontWeight: 500,
      fontFamily: "God",
      transition: "all 0.3s ease",
      display: "flex",
      animation: bounce ? "bounce 0.5s ease" : "none",

      "@keyframes bounce": {
        "0%, 100%": {
          transform: "translateY(0)",
        },
        "50%": {
          transform: "translateY(-10px)",
        },
      },

      ...baseStyles,

      "& > span": {
        width: "60%",
        wordWrap: "break-word",
        wordBreak: "break-word",
        hyphens: "auto",
        overflow: "hidden",
        display: "block",
        boxSizing: "border-box",
      },

      "&:hover": {
        transform: "translateX(0.625rem) scale(1.05)",
        boxShadow: "0 0.625rem 1.25rem rgba(0,0,0,0.1)",
      },

      [theme.breakpoints.down("lg")]: {
        ...generateCardStyles(SCALE_MULTIPLIERS.lg)[cardType],
        padding: `${1.5 * SCALE_MULTIPLIERS.lg}rem`,
      },
      [theme.breakpoints.down("md")]: {
        ...generateCardStyles(SCALE_MULTIPLIERS.md)[cardType],
        padding: `${1.5 * SCALE_MULTIPLIERS.md}rem`,
      },
      [theme.breakpoints.down("sm")]: {
        ...generateCardStyles(SCALE_MULTIPLIERS.sm)[cardType],
        padding: `${1.5 * SCALE_MULTIPLIERS.sm}rem`,
      },
      "@media (max-width: 480px)": {
        // Direct media query for mobile
        ...generateCardStyles(SCALE_MULTIPLIERS.xs)[cardType],
        padding: `${1.5 * SCALE_MULTIPLIERS.xs}rem`,
      },
    };
  }
);
