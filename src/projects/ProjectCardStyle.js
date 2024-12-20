import { styled } from "@mui/material/styles";
import { Card, Dialog, Chip, Fab } from "@mui/material";

const MOBILE_BREAKPOINT = "@media (max-width: 480px)";

export const ThumbnailCard = styled(Card)(({ theme }) => ({
  position: "relative",
  width: "100%",
  aspectRatio: "4/5",
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "@media (hover: hover)": {
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    },
  },

  [theme.breakpoints.down("md")]: {
    aspectRatio: "3/4",
  },
  [theme.breakpoints.down("sm")]: {
    aspectRatio: "4/5",
  },
  [MOBILE_BREAKPOINT]: {
    aspectRatio: "3/4",
  },
}));

export const ThumbnailImage = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  paddingTop: "65%",
  backgroundColor: theme.palette.background.default,
  overflow: "hidden",

  [MOBILE_BREAKPOINT]: {
    paddingTop: "60%",
  },

  "& img": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export const DetailDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    maxWidth: "800px",
    width: "90vw",
    maxHeight: "90vh",
    margin: theme.spacing(2),
    [MOBILE_BREAKPOINT]: {
      margin: theme.spacing(1),
      width: "95vw",
    },
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3),
    [MOBILE_BREAKPOINT]: {
      padding: theme.spacing(2),
    },
  },
}));

export const DialogHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  padding: theme.spacing(1),
}));

export const FabButton = styled(Fab)(({ theme }) => ({
  zIndex: 1,
  "&.MuiFab-root": {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
  },

  [MOBILE_BREAKPOINT]: {
    transform: "scale(0.9)",
    "&.MuiFab-root": {
      width: 32,
      height: 32,
      minHeight: 32,
      "& .MuiSvgIcon-root": {
        fontSize: "1.2rem",
      },
    },
  },
}));

export const CarouselSection = styled("div")(({ theme }) => ({
  width: "100%",
  position: "relative",
  marginBottom: theme.spacing(3),

  [MOBILE_BREAKPOINT]: {
    marginBottom: theme.spacing(2),
  },
}));

export const CarouselContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
}));

export const CarouselSlide = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const CarouselImage = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  backgroundColor: "#f5f5f5",
});

export const ProjectContent = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  flexGrow: 1,
  position: "relative",

  [MOBILE_BREAKPOINT]: {
    padding: theme.spacing(1.5),
    gap: theme.spacing(1),
  },
}));

export const ProjectHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),

  [MOBILE_BREAKPOINT]: {
    gap: theme.spacing(1.5),
    marginBottom: theme.spacing(2),
  },
}));

export const ProjectLink = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(0.55, 1.0),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  backgroundColor: "transparent",
  transition: "all 0.3s ease",
  textDecoration: "none",
  fontSize: "0.85rem",
  fontWeight: 500,

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
    padding: theme.spacing(0.5, 0.75),
  },
  "@media (hover: hover)": {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    },
    "&:hover .MuiSvgIcon-root": {
      transform: "scale(1.1)",
    },
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.2rem",
    transition: "transform 0.3s ease",
  },
}));

export const ChipContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(0.5),
  marginTop: theme.spacing(1),

  [MOBILE_BREAKPOINT]: {
    gap: theme.spacing(0.25),
    "& .MuiChip-root": {
      height: 20,
      fontSize: "0.7rem",
      "& .MuiChip-label": {
        padding: "0 8px",
      },
    },
  },
}));

export const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "chipType",
})(({ theme, chipType }) => ({
  height: 24,
  fontSize: "0.75rem",
  backgroundColor:
    chipType === "primary"
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
  color:
    chipType === "primary"
      ? theme.palette.primary.contrastText
      : theme.palette.secondary.contrastText,
}));

export const BulletList = styled("ul")(({ theme, isSubList }) => ({
  margin: isSubList ? `${theme.spacing(1.5)}px 0 0 ${theme.spacing(2)}px` : 0,
  padding: isSubList ? 0 : `0 0 0 ${theme.spacing(2)}px`,
  listStyle: "none", // Remove default bullets
  "& li": {
    position: "relative",
    paddingLeft: theme.spacing(2.5),
    marginBottom: isSubList ? theme.spacing(1) : theme.spacing(2),
    "&:last-child": {
      marginBottom: 0,
    },
    // Custom bullet point styling
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: isSubList ? "0.5em" : "0.6em",
      width: isSubList ? 4 : 6,
      height: isSubList ? 4 : 6,
      backgroundColor: isSubList
        ? theme.palette.primary.light
        : theme.palette.primary.main,
      borderRadius: "50%",
      transform: "translateY(-50%)",
    },
    // Add connecting line for sub-items
    ...(isSubList && {
      "&::after": {
        content: '""',
        position: "absolute",
        left: -theme.spacing(1.5),
        top: 0,
        width: "1px",
        height: "100%",
        backgroundColor: `${theme.palette.primary.main}20`,
      },
    }),
  },
  "& .MuiTypography-root": {
    color: theme.palette.text.primary,
    lineHeight: 1.6,
    ...(isSubList && {
      fontSize: "0.9rem",
      color: theme.palette.text.secondary,
    }),
  },
  // Add fade-in animation for sub-items
  ...(isSubList && {
    "& li": {
      opacity: 0,
      animation: "fadeIn 0.3s ease forwards",
    },
    "@keyframes fadeIn": {
      from: {
        opacity: 0,
        transform: "translateX(-10px)",
      },
      to: {
        opacity: 1,
        transform: "translateX(0)",
      },
    },
  }),
}));
