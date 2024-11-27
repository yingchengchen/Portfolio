import React from 'react';
import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { StyledGithubButton } from './githubRepoStyles';

function GithubRepo({ name, link }) {
  return (
    <StyledGithubButton
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      startIcon={<GitHubIcon />}
      endIcon={<OpenInNewIcon />}
      variant="outlined"
      fullWidth
    >
      {name}
    </StyledGithubButton>
  );
}

GithubRepo.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default GithubRepo;