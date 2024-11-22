import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import {
  Paper,
  Typography,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import styles from './panelSectionStyles';

function PanelSection(props) {
  const classes = styles(props);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper className={`${classes.root} ${isMobile ? classes.rootMobile : ''}`}>
      <div className={`${classes.content} ${isMobile ? classes.contentMobile : ''}`}>
        <Typography
          className={classes.title}
          variant={isSmallScreen || isMobile ? "body2" : "body1"}
        >
          {props.title}
        </Typography>
        <Typography
          variant={isMobile ? "body2" : "body1"}
          component="div"
          className={`${classes.childrenWrapper} ${isMobile ? classes.childrenWrapperMobile : ''}`}
        >
          {props.children}
        </Typography>
      </div>
    </Paper>
  );
}

PanelSection.propTypes = {
  title: PropTypes.string.isRequired
}

export default PanelSection;