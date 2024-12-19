import React from "react";
import { styled } from "@mui/material/styles";
import { Link as MuiLink, Typography } from "@mui/material";

const FooterContainer = styled('footer')(({ theme }) => ({
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
}));

const Divider = styled('span')(({ theme }) => ({
  margin: theme.spacing(0, 1),
  color: theme.palette.text.disabled,
}));

const StyledLink = styled(MuiLink)({
  '&:hover': {
    textDecoration: 'underline',
  },
});

function Footer() {
  return (
    <FooterContainer>
      <Typography variant="caption">
        <StyledLink href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">
          Create React App
        </StyledLink>
        <Divider>|</Divider>
        <StyledLink
          href="https://www.flaticon.com/free-icons/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio icons created by Freepik - Flaticon
        </StyledLink>
        <Divider>|</Divider>
        <StyledLink
          href="https://www.cartoonize.net/avatar-maker/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Avatar created by Cartoonize
        </StyledLink>
      </Typography>
    </FooterContainer>
  );
}

export default Footer;