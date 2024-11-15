// GithubRepo.js
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button
} from '@material-ui/core';
import styles from './githubRepoStyles';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

function GithubRepo(props) {
  const classes = styles(props);
  
  return (
    <Button
      className={classes.root}
      component="a"
      href={props.link}
      target="_blank"  // Add this to open in new tab
      rel="noopener noreferrer"  // Add this for security
      startIcon={<GitHubIcon />}
      endIcon={<OpenInNewIcon  className={classes.openIcon}/>}
      variant="outlined"  // You can use "contained" or "outlined" if you prefer
      fullWidth
    >
      {props.name}
    </Button>
  );
}

GithubRepo.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default GithubRepo;