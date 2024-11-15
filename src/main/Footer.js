// src/components/Footer.js
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    padding: theme.spacing(2.5),
    marginTop: theme.spacing(5),
    color: theme.palette.text.secondary,
    "& a": {
      color: theme.palette.text.secondary,
      textDecoration: "none",
      margin: theme.spacing(0, 0.5),
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  divider: {
    margin: theme.spacing(0, 1),
    color: theme.palette.text.disabled,
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="caption">
        References:
        <Link
          href="https://github.com/VaidasTheDev/personal-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio Example
        </Link>
        <span className={classes.divider}>|</span>
        <Link
          href="https://www.flaticon.com/free-icons/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio icons created by Freepik - Flaticon
        </Link>
        <span className={classes.divider}>|</span>
        <Link href="your_third_link" target="_blank" rel="noopener noreferrer">
          Third Reference
        </Link>
      </Typography>
    </footer>
  );
}

export default Footer;
