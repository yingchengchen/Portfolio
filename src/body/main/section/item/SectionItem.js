import React from 'react';
import PropTypes from 'prop-types';
import {
  Chip,
  Typography
} from '@material-ui/core';
import styles from './styles';

function SectionItem(props) {
  const classes = styles(props);

  const renderListItem = (item) => {
    return (
      <>
        <Typography component="div" className={classes.mainBullet}>
          {item.main}
        </Typography>
        {item.subItems && (
          <ul className={classes.subBullets}>
            {item.subItems.map((subItem, index) => (
              <li key={index}>
                <Typography component="div">
                  {subItem}
                </Typography>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerWrapper}>
        <Typography
          variant="h6"
          className={classes.title}
        >
          {props.header}
        </Typography>
        {props.meta && (
          <Typography
            className={classes.meta}
            variant="body2"
          >
            {props.meta}
          </Typography>
        )}
      </div>
      
      {props.subheader && (
        <Typography
          variant="subtitle1"
          className={classes.subheader}
        >
          {props.subheader}
        </Typography>
      )}

      {props.description && (
        <Typography
          className={classes.description}
          variant="body1"
        >
          {props.description}
        </Typography>
      )}

      <ul className={classes.bulletPoints}>
        {props.listItems.map((item, index) => (
          <li key={index}>
            {renderListItem(item)}
          </li>
        ))}
      </ul>

      {props.chips && (
        <div className={classes.chips}>
          {props.chips.map((chip, index) => (
            <Chip
              className={classes.chip}
              key={index}
              label={chip.label}
              color={chip.type === "secondary" ? "default" : chip.type}
              size="small"
            />
          ))}
        </div>
      )}
    </div>
  );
}

SectionItem.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  meta: PropTypes.string,
  description: PropTypes.string,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      main: PropTypes.string.isRequired,
      subItems: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  chips: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['primary', 'secondary']).isRequired
    })
  )
};

export default SectionItem;