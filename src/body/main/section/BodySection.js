// BodySection.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Card, 
  CardHeader, 
  CardContent,
  Collapse,
  IconButton,
  Grid
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import styles from './styles';

function BodySection({ header, children, expandSection, isInitiallyCollapsed = true, onExpandChange, type }) {
  const classes = styles();
  const [expanded, setExpanded] = useState(!isInitiallyCollapsed);

  useEffect(() => {
    setExpanded(expandSection);
  }, [expandSection]);

  const handleExpandClick = () => {
    const newExpandedState = !expanded;
    setExpanded(newExpandedState);
    // Notify parent about expansion state change
    onExpandChange && onExpandChange(header, newExpandedState);
  };

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
    <Card 
      className={clsx(classes.root, {
        expanded: expanded
      })}
      id={header.toLowerCase().replace(/\s+/g, '-')}
    >
      <div className={clsx(classes.header, {
        [classes.headerExpanded]: expanded,
        [classes.headerCollapsed]: !expanded,
      })}>
        <CardHeader 
          title={header}
          action={
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          }
        />
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={clsx(classes.content, {
          [classes.contentMobile]: type === 'project'
        })}>
          {renderContent()}
        </CardContent>
      </Collapse>
    </Card>
  );
}

BodySection.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node,
  expandSection: PropTypes.bool,
  isInitiallyCollapsed: PropTypes.bool,
  onExpandChange: PropTypes.func,
  type: PropTypes.oneOf(['education', 'work', 'project'])
};

BodySection.defaultProps = {
  expandSection: false,
  isInitiallyCollapsed: true,
  type: 'work'
};

export default BodySection;