import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, 
  CardHeader, 
  CardContent,
  Collapse,
  IconButton
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './styles';

function BodySection(props) {
  const classes = styles(props);
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <CardHeader 
          title={props.header}
          action={
            <IconButton
              className={expanded ? classes.expandOpen : classes.expand}
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
        <CardContent className={classes.content}>
          {props.children}
        </CardContent>
      </Collapse>
    </Card>
  );
}

BodySection.propTypes = {
  header: PropTypes.string
}

export default BodySection;