// ProjectItem/ProjectItem.js
import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  Tooltip
} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import styles from './projectItemStyles';

function ProjectItem(props) {
  const classes = styles(props);
  
  return (
    <div className={classes.root}>
      {props.link ? (
        <Tooltip title="Open article" arrow placement="top">
          <Link 
            className={classes.header}
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.header}
            <OpenInNewIcon style={{ fontSize: 16, marginLeft: 8, opacity: 0.7 }} />
          </Link>
        </Tooltip>
      ) : (
        <span className={classes.header}>{props.header}</span>
      )}
      <div className={classes.description}>
        {props.description}
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  header: PropTypes.string.isRequired,
  link: PropTypes.string,
  description: PropTypes.string
};

export default ProjectItem;