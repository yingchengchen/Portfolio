import { styled } from "@mui/material/styles";
import { Card, IconButton, Dialog, Button, Chip, Fab } from "@mui/material";

export const ThumbnailCard = styled(Card)(({ theme }) => ({
  position: "relative",
  height: "100%",
  minHeight: "350px", // Add minimum height
  maxHeight: "400px", // Add maximum height
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
  },
}));

export const ThumbnailImage = styled("img")({
  width: "100%",
  height: "200px",
  objectFit: "cover",
});

export const DetailDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    maxWidth: "800px", // Adjusted for vertical layout
    width: "90vw",
    maxHeight: "90vh",
    margin: theme.spacing(2),
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
    },
  },
}));

export const DialogHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  padding: theme.spacing(1),
}));

export const FabButton = styled(Fab)(({ theme }) => ({
  zIndex: 1, // Lower z-index than navbar
  "&.MuiFab-root": {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
  },
}));
export const CarouselContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "420px", // Fixed height for consistency
  position: "relative",
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    height: "300px",
  },
  "& .MuiIconButton-root": {
    opacity: 0,
    transition: "opacity 0.2s ease",
  },
  "&:hover .MuiIconButton-root": {
    opacity: 1,
  },
}));

export const CarouselSlide = styled("div")({
  width: "100%",
  height: "auto",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const CarouselImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  objectPosition: "center",
  backgroundColor: "#f5f5f5", // Light background for images
});

export const CarouselNavButton = styled(IconButton)(({ theme, direction }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  color: theme.palette.common.white,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  ...(direction === "prev" ? { left: 8 } : { right: 8 }),
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  "&.MuiIconButton-root": {
    padding: 8,
  },
}));

export const ProjectContent = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.5),
  },
}));

export const ProjectHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
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
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    transform: "translateY(-2px)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.2rem",
    transition: "transform 0.3s ease",
  },
  "&:hover .MuiSvgIcon-root": {
    transform: "scale(1.1)",
  },
}));

export const ShowMoreButton = styled(Button)(({ theme }) => ({
  alignSelf: "flex-start",
  minWidth: "unset",
  padding: theme.spacing(0.5, 0),
  fontSize: "0.875rem",
  color: theme.palette.primary.light,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
  "&.MuiButton-root": {
    padding: theme.spacing(0),
    marginTop: theme.spacing(1),
  },
}));

export const ChipContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(0.5),
  marginTop: theme.spacing(1),
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
  "&:hover": {
    backgroundColor:
      chipType === "primary"
        ? theme.palette.primary.dark
        : theme.palette.secondary.dark,
  },
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
