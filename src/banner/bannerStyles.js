import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(2),
    border: `4px solid ${theme.palette.background.paper}`,
    boxShadow: theme.shadows[2],
  },
  intro: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    "& h3": {
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(1),
    },
  },
  subheader: {
    color: theme.palette.secondary.main,
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
  headerDesc: {
    color: theme.palette.text.secondary,
    fontSize: "1.1rem",
    marginBottom: theme.spacing(3),
    lineHeight: 1.6,
  },
  buttons: {
    display: "flex",
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
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
  buttonStackOverflow: {
    backgroundColor: theme.palette.custom.stackOverflow,
    color: "#fff",
    "&:hover": {
      backgroundColor: "#da6f1e",
    },
  },
}));

export default styles;
