// EducationAndCareerStyle.js
import { styled } from "@mui/material/styles";
import { Paper, Avatar, Grid } from "@mui/material";

const BASE = {
  spacing: {
    lg: 1,
    md: 0.85,
    sm: 0.7,
    xs: 0.6,
  },
  card: {
    maxWidth: 200, // base max width in pixels
    minWidth: 100, // base min width in pixels
  },
  HEIGHT: 638, //px
};

export const EduCaWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - var(--navbar-height))",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const EducationCareerRoot = styled(Grid)(({ theme }) => ({
  width: "100%",
  maxWidth: "1403px",
  margin: "0 auto",
  height: `${BASE.HEIGHT}px`,
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  position: "relative",
  backgroundColor: "none",

  [theme.breakpoints.down("lg")]: {
    height: `${BASE.HEIGHT * BASE.spacing.lg}px`,
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down("md")]: {
    height: `750px`,
  },
  [theme.breakpoints.down("sm")]: {
    height: `750px`,
    // padding: theme.spacing(2),
  },
}));

export const HeaderTitle = styled("h3")(({ theme }) => ({
  color: "var(--accent1-color)",
  margin: 0,
  padding: theme.spacing(2),
  fontSize: "1.6rem",
  fontFamily: "Techno",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  lineHeight: 1.2,
  alignSelf: "flex-start",

  [theme.breakpoints.down("lg")]: {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    padding: theme.spacing(1.5),
  },
}));

export const ContentContainer = styled(Grid)(({ theme }) => ({
  flex: 1,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
}));

export const TimelineContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "100%",
  // padding: theme.spacing(4),
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.down("lg")]: {
    height: `${500 * BASE.spacing.lg}px`,
    // padding: theme.spacing(3),
  },
  [theme.breakpoints.down("md")]: {
    height: "600px",
    flexDirection: "column",
    padding: `${theme.spacing(4)} 0`,
    gap: theme.spacing(2), // Space between items
  },
  [theme.breakpoints.down("sm")]: {
    height: "600px",
    flexDirection: "column",
    padding: `${theme.spacing(5)} 0`,
    gap: theme.spacing(1), // Space between items
  },
}));

export const TimelineItem = styled(Grid)(({ theme, totalItems }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: `${100 / totalItems}%`,
  maxWidth: `${BASE.card.maxWidth}px`, // Base maxWidth
  height: "100%",
  justifyContent: "center",
  "&:not(:first-of-type)": {
    marginLeft: theme.spacing(3), // 32px spacing between items
  },

  [theme.breakpoints.down("lg")]: {
    maxWidth: `${BASE.card.maxWidth * BASE.spacing.lg}px`,
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing(2), // 24px spacing
    },
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    maxWidth: "none",
    height: "auto",
    flexDirection: "row",
    marginLeft: "0 !important",
    marginTop: theme.spacing(7),
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "none",
    height: "auto",
    flexDirection: "row",
    marginLeft: "0 !important",
    marginTop: theme.spacing(8),
  },
}));

export const TimelineContentCard = styled(Paper)(
  ({ theme, type, index, showHopping }) => ({
    padding: theme.spacing(2),
    backgroundColor: "#ffffff",
    borderRadius: theme.spacing(1),
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    border: `1px solid ${theme.palette.primary.main}`,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    width: "100%", // Make it 100% of parent TimelineItem
    minWidth: `${BASE.card.minWidth}px`,
    maxWidth: `${BASE.card.maxWidth}px`,
    margin: "0 auto",
    whiteSpace: "normal",
    wordWrap: "break-word",
    animation: showHopping ? `hopAnimation 0.8s ease ${index * 0.5}s` : "none",

    "@keyframes hopAnimation": {
      "0%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(-10px)",
      },
      "100%": {
        transform: "translateY(0)",
      },
    },
    "@media (hover: hover)": {
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
      },
    },

    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(1.5),
      minWidth: `${BASE.card.minWidth * BASE.spacing.lg}px`,
      maxWidth: `${BASE.card.maxWidth * BASE.spacing.lg}px`,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      maxWidth: "200px",
      minWidth: "150px",
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "150px",
      minWidth: "100px",
      margin: 0,
    },
  })
);

// Keep the original layout styles for TimelineLine, TimelineDot, and TimelineContent
export const TimelineLine = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "2%",
  width: "98%",
  height: 2,
  backgroundColor: theme.palette.primary.main,
  transform: "translateY(-50%)",
  zIndex: 1,

  "&::after": {
    content: '""',
    position: "absolute",
    right: -1,
    top: "50%",
    transform: "translateY(-50%)",
    width: 0,
    height: 0,
    borderTop: "6px solid transparent",
    borderBottom: "6px solid transparent",
    borderLeft: `12px solid ${theme.palette.primary.main}`,
  },
  [theme.breakpoints.down("md")]: {
    top: "10%",
    left: "50%",
    width: 2,
    height: "100%",
    transform: "translateX(-50%)",

    "&::after": {
      right: "50%",
      top: "auto",
      bottom: -1,
      transform: "translateX(50%)",
      borderLeft: "6px solid transparent",
      borderRight: "6px solid transparent",
      borderTop: `12px solid ${theme.palette.primary.main}`,
      borderBottom: "none",
    },
  },
  [theme.breakpoints.down("sm")]: {
    top: "10%",
    left: "50%",
    width: 2,
    height: "100%",
    transform: "translateX(-50%)",

    "&::after": {
      right: "50%",
      top: "auto",
      bottom: -1,
      transform: "translateX(50%)",
      borderLeft: "6px solid transparent",
      borderRight: "6px solid transparent",
      borderTop: `12px solid ${theme.palette.primary.main}`,
      borderBottom: "none",
    },
  },
}));

export const TimelineDot = styled("div")(({ theme, type }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  backgroundColor:
    type === "education"
      ? theme.palette.text.secondary
      : theme.palette.custom.accent1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",

  "& svg": {
    color: "#fff",
    fontSize: "1.2rem",
  },

  [theme.breakpoints.down("lg")]: {
    width: 35,
    height: 35,
  },
  [theme.breakpoints.down("md")]: {
    width: 30,
    height: 30,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    "& svg": {
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: 25,
    height: 25,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    "& svg": {
      fontSize: "0.9rem",
    },
  },
}));

export const TimelineContent = styled("div")(({ theme, type }) => ({
  width: "100%",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  ...(type === "education"
    ? {
        bottom: "55%",
      }
    : {
        top: "55%",
      }),
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    width: "200px",
    height: "auto",
    top: "unset",
    bottom: "unset",
    ...(type === "education"
      ? {
          right: "60%",
          left: "unset", // Clear left position
          transform: "translate(0px, 0%)",
        }
      : {
          left: "60%",
          right: "unset", // Clear right position
          transform: "translate(0px, 0%)",
        }),
  },
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    width: "150px",
    height: "auto",
    top: "unset",
    bottom: "unset",
    ...(type === "education"
      ? {
          right: "60%",
          left: "unset", // Clear left position
          transform: "translate(0px, 0%)",
        }
      : {
          left: "60%",
          right: "unset", // Clear right position
          transform: "translate(0px, 0%)",
        }),
  },
}));

// Update text styles for better scaling
export const TimelinePeriod = styled("div")(({ theme }) => ({
  fontSize: "0.7rem",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(0.5),

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.65rem",
  },
}));

export const TimelineTitle = styled("h4")(({ theme }) => ({
  margin: "0 0 4px 0",
  fontSize: "1.1rem",
  fontWeight: 600,
  color: theme.palette.text.primary,

  [theme.breakpoints.down("lg")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

export const TimelineSubtitle = styled("div")(({ theme }) => ({
  padding: theme.spacing(0.2, 0),
  fontWeight: 600,
  fontSize: "0.8rem",
  borderRadius: theme.spacing(1),

  "#NTNU&": {
    backgroundColor: "#862633",
    color: "#FFFFFF",
  },

  "#UCDavis&": {
    backgroundColor: "#FFBF00",
    color: "#022851",
  },

  [theme.breakpoints.down("lg")]: {
    fontSize: "0.75rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.7rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.65rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "0.6rem",
  },
}));

export const CustomAvatar = styled(Avatar)(({ theme }) => ({
  width: 35,
  height: 35,
  position: "absolute",
  top: "50%",
  left: "1%",
  transform: "translateY(-50%)",
  zIndex: 2,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",

  [theme.breakpoints.down("lg")]: {
    width: 30,
    height: 30,
  },
  [theme.breakpoints.down("md")]: {
    width: 25,
    height: 25,
    top: "8%",
    left: "50%",
    transform: "translate(-50%, -100%)",
  },
  [theme.breakpoints.down("sm")]: {
    width: 20,
    height: 20,
    top: "8%",
    left: "50%",
    transform: "translate(-50%, -100%)",
  },
}));

export const PopoverContent = styled("div")(({ theme }) => {
  // Base font sizes
  const fontSizes = {
    location: "0.85rem",
    description: "0.9rem",
    chip: "0.75rem",
  };

  // Scale factors for different breakpoints
  const scales = {
    lg: 0.95,
    md: 0.9,
    sm: 0.85,
    xs: 0.8,
  };

  return {
    padding: theme.spacing(3),
    maxWidth: 300,
    minWidth: 200,

    // Content styles
    "& .location": {
      display: "flex",
      alignItems: "center",
      color: theme.palette.text.secondary,
      fontSize: fontSizes.location,
      padding: theme.spacing(0.5, 1),
      marginBottom: theme.spacing(2),
      "& svg": {
        fontSize: "1rem",
        marginRight: theme.spacing(0.5),
      },
    },

    "& .description": {
      color: theme.palette.text.secondary,
      fontSize: fontSizes.description,
      lineHeight: 1.6,
      marginBottom: theme.spacing(2),
      textAlign: "justify",
      padding: theme.spacing(0, 1),
    },

    "& .chips-container": {
      display: "flex",
      flexWrap: "wrap",
      gap: theme.spacing(0.5),
      padding: theme.spacing(0, 1),
    },

    "& .chip": {
      padding: theme.spacing(0.2, 1),
      borderRadius: 10,
      fontSize: fontSizes.chip,
      fontWeight: 500,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,

      "&.secondary": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
      },
    },

    // Breakpoint scaling
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(2.5),
      maxWidth: 300 * scales.lg,
      minWidth: 200 * scales.lg,
      "& .location": { fontSize: `calc(${fontSizes.location} * ${scales.lg})` },
      "& .description": {
        fontSize: `calc(${fontSizes.description} * ${scales.lg})`,
      },
      "& .chip": { fontSize: `calc(${fontSizes.chip} * ${scales.lg})` },
    },

    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
      maxWidth: 300 * scales.md,
      minWidth: 200 * scales.md,
      "& .location": { fontSize: `calc(${fontSizes.location} * ${scales.md})` },
      "& .description": {
        fontSize: `calc(${fontSizes.description} * ${scales.md})`,
      },
      "& .chip": { fontSize: `calc(${fontSizes.chip} * ${scales.md})` },
    },

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1.5),
      maxWidth: 300 * scales.sm,
      minWidth: 200 * scales.sm,
      "& .location": { fontSize: `calc(${fontSizes.location} * ${scales.sm})` },
      "& .description": {
        fontSize: `calc(${fontSizes.description} * ${scales.sm})`,
      },
      "& .chip": { fontSize: `calc(${fontSizes.chip} * ${scales.sm})` },
    },

    "@media (max-width: 480px)": {
      padding: theme.spacing(1.25),
      maxWidth: 300 * scales.xs,
      minWidth: 200 * scales.xs,
      "& .location": { fontSize: `calc(${fontSizes.location} * ${scales.xs})` },
      "& .description": {
        fontSize: `calc(${fontSizes.description} * ${scales.xs})`,
      },
      "& .chip": {
        fontSize: `calc(${fontSizes.chip} * ${scales.xs})`,
        borderRadius: 12,
        padding: theme.spacing(0.3, 1),
      },
    },
  };
});
