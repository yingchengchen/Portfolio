import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 'var(--banner-height)',
    backgroundColor: `#F0EFFC`,
    padding: theme.spacing(4),
    borderRadius: 0,
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[1],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 1000,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(6), // Add extra padding for menu button
    },
  },
  contentWrapper: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
      marginTop: theme.spacing(2), // Add space below menu button
    },
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(2),
    border: `4px solid ${theme.palette.background.paper}`,
    boxShadow: theme.shadows[2],
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(16), // Smaller avatar for mobile
      height: theme.spacing(16),
      margin: theme.spacing(1),
      border: `3px solid ${theme.palette.background.paper}`,
    },
  },
  intro: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    "& h3": {
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      "& h3": {
        fontSize: "1.75rem", // Smaller title for mobile
        marginBottom: theme.spacing(0.5),
      },
    },
  },
  subheader: {
    color: theme.palette.secondary.main,
    fontWeight: 500,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem", // Smaller subheader for mobile
      marginBottom: theme.spacing(1),
    },
  },
  headerDesc: {
    color: theme.palette.text.secondary,
    fontSize: "1.1rem",
    marginBottom: theme.spacing(3),
    lineHeight: 1.6,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem", // Smaller description for mobile
      marginBottom: theme.spacing(2),
      lineHeight: 1.4,
    },
  },
  buttons: {
    display: "flex",
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      gap: theme.spacing(1), // Reduced gap for mobile
      "& .MuiButton-root": {
        padding: "6px 12px", // Smaller padding for buttons
        fontSize: "0.875rem", // Smaller font for buttons
      },
    },
  },
  buttonLinkedIn: {
    backgroundColor: "transparent",
    color: theme.palette.custom.linkedIn,
    border: `1px solid ${theme.palette.custom.linkedIn}`,
    "&:hover": {
      backgroundColor: theme.palette.custom.linkedIn,
      color: "#fff",
      border: `1px solid ${theme.palette.custom.linkedIn}`,
    },
    "& .MuiButton-startIcon svg": {
      fill: theme.palette.custom.linkedIn,
    },
    "&:hover .MuiButton-startIcon svg": {
      fill: "#fff",
    },
    transition: "all 0.3s ease",
  },
  buttonGitHub: {
    backgroundColor: "transparent",
    color: theme.palette.custom.github,
    border: `1px solid ${theme.palette.custom.github}`,
    "&:hover": {
      backgroundColor: theme.palette.custom.github,
      color: "#fff",
      border: `1px solid ${theme.palette.custom.github}`,
    },
    "& .MuiButton-startIcon svg": {
      fill: theme.palette.custom.github,
    },
    "&:hover .MuiButton-startIcon svg": {
      fill: "#fff",
    },
    transition: "all 0.3s ease",
  },
}));

export default styles;
