// BodySection.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import styles from './styles';
import SectionItem from './item/SectionItem';

function BodySection({ header, children, type }) {
  const classes = styles();

  const renderContent = () => {
    if (type === 'project') {
      return (
        <Grid container spacing={3}>
          {React.Children.map(children, (child) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {child}
            </Grid>
          ))}
        </Grid>
      );
    }
    return children;
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.expanded]: true
      })}
      id={header.toLowerCase().replace(/\s+/g, '-')}
    >
      <div className={classes.header}>
        <h3 className={classes.headerTitle}>{header}</h3>
      </div>
      <div className={clsx(classes.content, {
        [classes.contentMobile]: type === 'project'
      })}>
        {renderContent()}
      </div>
    </div>
  );
}

BodySection.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node,
  type: PropTypes.oneOf(['education', 'work', 'project'])
};

BodySection.defaultProps = {
  type: 'work'
};

export default BodySection;