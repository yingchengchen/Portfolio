import { styled } from "@mui/material/styles";
import { Button, IconButton, Menu } from "@mui/material";

export const NavContainer = styled("nav")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "var(--navbar-height)",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 4),
  backgroundColor: "rgba(240, 239, 252, 0.95)",
  backdropFilter: "blur(8px)",
  borderBottom: `1px solid ${theme.palette.divider}`,
  zIndex: 1000,
  boxShadow: theme.shadows[1],
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(0, 3),
  },

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 2.5),
  },

  [theme.breakpoints.down("sm")]: {
    height: "var(--mobile-navbar-height)",
    padding: theme.spacing(0, 2),
  },

  "@media (max-width: 480px)": {
    padding: theme.spacing(0, 1.5),
  },
}));

export const NavbarContent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  gap: "16px",
  height: "100%",

  [theme.breakpoints.down("lg")]: {
    maxWidth: "1000px",
    gap: "14px",
  },

  [theme.breakpoints.down("md")]: {
    maxWidth: "768px",
    gap: "12px",
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    gap: "10px",
  },
}));

// Replace AvatarWrapper with SocialLinks in NavbarStyles.js
export const SocialLinks = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),

  "& a": {
    color: theme.palette.text.secondary,
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    borderRadius: "50%",
  },
  "& svg": {
    fontSize: 30,

    [theme.breakpoints.down("lg")]: {
      fontSize: 28,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 26,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
    "@media (max-width: 480px)": {
      fontSize: 22,
    },
  },

  // LinkedIn-specific styling
  "& a:first-of-type": {
    color: theme.palette.custom.linkedIn,
    "@media (hover: hover)": {
      "&:hover": {
        color: theme.palette.custom.linkedIn,
        transform: "scale(1.1)",
      },
    },
  },

  // GitHub-specific styling
  "& a:last-of-type": {
    color: theme.palette.custom.github,
    "@media (hover: hover)": {
      "&:hover": {
        color: theme.palette.custom.github,
        transform: "scale(1.1)",
      },
    },
  },
}));

export const NavButtons = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
  [theme.breakpoints.down("lg")]: {
    gap: theme.spacing(1.25),
  },

  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(1),
  },

  [theme.breakpoints.down("sm")]: {
    display: "none", // Hide nav buttons and show hamburger instead
  },
}));

export const MobileNavControl = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    alignItems: "center",
  },
}));

export const StyledNavButton = styled(Button)(({ theme, active }) => ({
  backgroundColor: "transparent",
  color: theme.palette.text.secondary,
  padding: theme.spacing(0.75, 2),
  minWidth: "auto",
  border: "none",
  transition: "all 0.3s ease",
  fontWeight: 500,
  fontSize: "0.9rem",
  fontFamily: "Techno",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  position: "relative",
  whiteSpace: "nowrap",

  [theme.breakpoints.down("lg")]: {
    fontSize: "0.85rem",
    padding: theme.spacing(0.7, 1.75),
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
    padding: theme.spacing(0.65, 1.5),
  },
  "@media (hover: hover)": {
    "&:hover": {
      backgroundColor: "transparent",
      color: theme.palette.custom.accent1,
    },
  },

  ...(active === "true" && {
    backgroundColor: "transparent",
    color: theme.palette.custom.accent1,
    "@media (hover: hover)": {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -2,
      left: "50%",
      transform: "translateX(-50%)",
      width: "60%",
      height: "2px",
      backgroundColor: theme.palette.custom.accent1,
    },
  }),
}));

export const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(1),
  padding: theme.spacing(1),

  "& svg": {
    fontSize: 24,

    "@media (max-width: 480px)": {
      fontSize: 22,
    },
  },
  "@media (hover: hover)": {
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
}));

export const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: theme.spacing(1),
    width: "200px",
    maxWidth: "calc(100vw - 32px)",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    backgroundColor: "rgba(240, 239, 252, 0.98)",
    backdropFilter: "blur(8px)",
    border: `1px solid ${theme.palette.divider}`,

    "@media (max-width: 480px)": {
      width: "180px",
    },
  },
}));

export const StyledMenuItem = styled("div")(({ theme, active }) => ({
  padding: theme.spacing(1.5, 3),
  fontSize: "0.9rem",
  fontWeight: 600,
  color: theme.palette.text.secondary,
  transition: "all 0.2s ease",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.85rem",
    padding: theme.spacing(1.25, 2.5),
  },

  "@media (max-width: 480px)": {
    fontSize: "0.8rem",
    padding: theme.spacing(1, 2),
  },
  "@media (hover: hover)": {
    "&:hover": {
      backgroundColor: `${theme.palette.custom.accent1}10`,
      color: theme.palette.text.secondary,
    },
  },

  ...(active === "true" && {
    color: theme.palette.custom.accent1,
    // backgroundColor: `${theme.palette.custom.accent1}10`,
    "@media (hover: hover)": {
      "&:hover": {
        backgroundColor: `${theme.palette.custom.accent1}15`,
      },
    },
  }),
}));
