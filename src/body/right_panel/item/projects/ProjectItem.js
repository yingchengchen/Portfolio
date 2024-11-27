import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';
import {
  ItemContainer,
  HeaderLink,
  HeaderText,
  Description,
  StyledIcon
} from './projectItemStyles';

function ProjectItem({ header, link, description }) {
  return (
    <ItemContainer>
      {link ? (
        <Tooltip title="Open article" arrow placement="top">
          <HeaderLink
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-header"
          >
            {header}
            <StyledIcon />
          </HeaderLink>
        </Tooltip>
      ) : (
        <HeaderText className="project-header">{header}</HeaderText>
      )}
      <Description>
        {description}
      </Description>
    </ItemContainer>
  );
}

ProjectItem.propTypes = {
  header: PropTypes.string.isRequired,
  link: PropTypes.string,
  description: PropTypes.string
};

export default ProjectItem;