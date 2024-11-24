// SectionItem.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  IconButton,
  Collapse,
  Box,
  Link,
  Button,
  Divider
} from '@material-ui/core';
import {
  Language as WebIcon,
  GitHub as GitHubIcon,
  ExpandMore as ExpandMoreIcon,
  DateRange as DateIcon,
  LocationOn as LocationIcon,
  NavigateBefore,
  NavigateNext
} from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';
import clsx from 'clsx';
import styles from './styles';

function SectionItem(props) {
  const classes = styles();
  const [expanded, setExpanded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderWorkExperience = () => (
    <Card className={classes.workCard}>
      <div className={classes.workCardHeader}>
        <CardMedia
          className={classes.companyLogo}
          image={props.logo || '/default-company-logo.png'}
          title={props.header}
        />
        <div className={classes.headerContent}>
          <Typography variant="h6" className={classes.companyName}>
            {props.header}
          </Typography>
          <Typography variant="subtitle1" className={classes.jobTitle}>
            {props.subheader}
          </Typography>
          <Box className={classes.metaInfo}>
            <Box display="flex" alignItems="center" marginRight={2}>
              <DateIcon fontSize="small" className={classes.metaIcon} />
              <Typography variant="body2">{props.meta}</Typography>
            </Box>
            {props.location && (
              <Box display="flex" alignItems="center">
                <LocationIcon fontSize="small" className={classes.metaIcon} />
                <Typography variant="body2">{props.location}</Typography>
              </Box>
            )}
          </Box>
        </div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </div>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.workCardContent}>
          {props.description && (
            <Typography paragraph className={classes.description}>
              {props.description}
            </Typography>
          )}
          <ul className={classes.bulletPoints}>
            {props.listItems.map((item, index) => (
              <li key={index} className={classes.bulletItem}>
                <Typography component="div" className={classes.mainBullet}>
                  {item.main}
                </Typography>
                {item.subItems && (
                  <ul className={classes.subBullets}>
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Typography variant="body2">
                          {subItem}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {props.chips && (
            <div className={classes.chipContainer}>
              {props.chips.map((chip, index) => (
                <Chip
                  key={index}
                  label={chip.label}
                  className={clsx(classes.chip, {
                    [classes.primaryChip]: chip.type === 'primary',
                    [classes.secondaryChip]: chip.type === 'secondary'
                  })}
                  size="small"
                />
              ))}
            </div>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );

  const renderProject = () => (
    <Card className={classes.projectCard}>
      <Carousel
        className={classes.carousel}
        animation="fade"
        autoPlay={false}
        NavButton={({ onClick, className, style, next, prev }) => (
          <IconButton
            onClick={onClick}
            className={clsx(classes.carouselNavButton, {
              [classes.carouselNavButtonNext]: next,
              [classes.carouselNavButtonPrev]: prev,
            })}
            size="small"
          >
            {next ? <NavigateNext /> : <NavigateBefore />}
          </IconButton>
        )}
        indicatorContainerProps={{
          className: classes.carouselIndicators
        }}
        indicatorIconButtonProps={{
          className: classes.carouselIndicator
        }}
        activeIndicatorIconButtonProps={{
          className: classes.carouselIndicatorActive
        }}
        timeout={300}
        interval={null}
        swipe={true}
      >
        {props.images?.map((image, i) => (
          <div key={i} className={classes.carouselSlide}>
            <img
              src={image}
              alt={`${props.header} - ${i + 1}`}
              className={classes.carouselImage}
            />
          </div>
        ))}
      </Carousel>

      <CardContent className={classes.projectContent}>
        <div className={classes.projectHeader}>
          <div className={classes.projectTitleSection}>
            <Typography variant="h6" className={classes.projectTitle}>
              {props.header}
            </Typography>
            <Box className={classes.projectMeta}>
              <DateIcon />
              <Typography>{props.meta}</Typography>
            </Box>
          </div>

          <div className={classes.projectLinks}>
            {props.githubLink && (
              <Link
                href={props.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.projectLink}
              >
                <GitHubIcon />
                <Typography variant="body2">View Source Code</Typography>
              </Link>
            )}
            {props.publicationLink && (
              <Link
                href={props.publicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.projectLink}
              >
                <WebIcon />
                <Typography variant="body2">View Publication</Typography>
              </Link>
            )}
            {
              props.demoLink && (
                <Link
                  href={props.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.projectLink}
                >
                  <WebIcon />
                  <Typography variant="body2">View Demo</Typography>
                </Link>
              )
            }
          </div>
        </div>

        <Divider className={classes.projectDivider} />

        <Typography variant="body2" className={classes.description}>
          {props.description}
        </Typography>

        {props.chips && (
          <div className={classes.chipContainer}>
            {props.chips.map((chip, index) => (
              <Chip
                key={index}
                label={chip.label}
                className={clsx(classes.chip, {
                  [classes.primaryChip]: chip.type === 'primary',
                  [classes.secondaryChip]: chip.type === 'secondary'
                })}
                size="small"
              />
            ))}
          </div>
        )}

        <Button
          className={classes.showMoreButton}
          onClick={() => setShowDetails(!showDetails)}
          disableRipple
        >
          {showDetails ? 'Show less' : 'Show more'}
        </Button>

        <Collapse in={showDetails} timeout="auto">
          <div className={classes.projectDetails}>
            <ul className={classes.bulletPoints}>
              {props.listItems?.map((item, index) => (
                <li key={index} className={classes.bulletItem}>
                  <Typography component="div" className={classes.mainBullet}>
                    {item.main}
                  </Typography>
                  {item.subItems && (
                    <ul className={classes.subBullets}>
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Typography variant="body2">
                            {subItem}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Collapse>
      </CardContent>
    </Card>
  );

  const renderEducation = () => (
    <div className={classes.educationItem}>
      <Typography variant="h6" className={classes.schoolName}>
        {props.header}
      </Typography>
      <Typography variant="subtitle1" className={classes.degree}>
        {props.subheader}
      </Typography>
      <Typography variant="body2" color="textSecondary" className={classes.duration}>
        {props.meta}
      </Typography>
      {props.description && (
        <Typography variant="body2" paragraph className={classes.eduDescription}>
          {props.description}
        </Typography>
      )}
      {props.chips && (
        <div className={classes.chipContainer}>
          {props.chips.map((chip, index) => (
            <Chip
              key={index}
              label={chip.label}
              className={classes.chip}
              size="small"
            />
          ))}
        </div>
      )}
    </div>
  );

  switch (props.sectionType) {
    case 'work':
      return renderWorkExperience();
    case 'project':
      return renderProject();
    case 'education':
      return renderEducation();
    default:
      return renderWorkExperience();
  }
}

SectionItem.propTypes = {
  sectionType: PropTypes.oneOf(['work', 'project', 'education']).isRequired,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  meta: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  demoLink: PropTypes.string,
  githubLink: PropTypes.string,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      main: PropTypes.string.isRequired,
      subItems: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  chips: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['primary', 'secondary']).isRequired
    })
  )
};

export default SectionItem;