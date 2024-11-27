// SectionItem.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  CardContent,
  Typography,
  Chip,
  Collapse,
  Box,
  Divider,
} from '@mui/material';
import {
  Language as WebIcon,
  GitHub as GitHubIcon,
  ExpandMore as ExpandMoreIcon,
  DateRange as DateIcon,
  LocationOn as LocationIcon,
  NavigateBefore,
  NavigateNext
} from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';

import {
  // Work Experience Components
  WorkCard,
  WorkCardHeader,
  CompanyLogo,
  HeaderContent,
  CompanyName,
  JobTitle,
  MetaInfo,
  ExpandButton,
  StyledCollapse,
  
  // Project Components
  ProjectCard,
  ProjectContent,
  ProjectHeader,
  ProjectLink,
  CarouselContainer,
  CarouselSlide,
  CarouselImage,
  CarouselNavButton,
  ShowMoreButton,

  // Education Components
  EducationContainer,

  // Common Components
  ChipContainer,
  StyledChip,
  BulletList
} from './sectionItemStyle';

function SectionItem(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const renderWorkExperience = () => (
    <WorkCard>
      <WorkCardHeader>
        <CompanyLogo
          style={{ backgroundImage: `url(${props.logo || '/default-company-logo.png'})` }}
          title={props.header}
        />
        <HeaderContent>
          <CompanyName variant="h6">{props.header}</CompanyName>
          <JobTitle variant="subtitle1">{props.subheader}</JobTitle>
          <MetaInfo>
            <Box display="flex" alignItems="center" marginRight={2}>
              <DateIcon fontSize="small" sx={{ marginRight: 0.5 }} />
              <Typography variant="body2">{props.meta}</Typography>
            </Box>
            {props.location && (
              <Box display="flex" alignItems="center">
                <LocationIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                <Typography variant="body2">{props.location}</Typography>
              </Box>
            )}
          </MetaInfo>
        </HeaderContent>
        <ExpandButton
          onClick={() => setExpanded(!expanded)}
          className={expanded ? 'expanded' : ''}
          size="small"
        >
          <ExpandMoreIcon />
        </ExpandButton>
      </WorkCardHeader>
  
      <StyledCollapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {props.description && (
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              {props.description}
            </Typography>
          )}
          <BulletList>
            {props.listItems?.map((item, index) => (
              <li key={index}>
                <Typography component="div">{item.main}</Typography>
                {item.subItems && (
                  <BulletList isSubList>
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Typography variant="body2">{subItem}</Typography>
                      </li>
                    ))}
                  </BulletList>
                )}
              </li>
            ))}
          </BulletList>
          {props.chips && (
            <ChipContainer>
              {props.chips.map((chip, index) => (
                <StyledChip
                  key={index}
                  label={chip.label}
                  chipType={chip.type}
                  size="small"
                />
              ))}
            </ChipContainer>
          )}
        </CardContent>
      </StyledCollapse>
    </WorkCard>
  );

  const renderProject = () => (
    <ProjectCard>
      <CarouselContainer>
        <Carousel
          animation="fade"
          autoPlay={false}
          NavButton={({ onClick, next }) => (
            <CarouselNavButton
              onClick={onClick}
              direction={next ? 'next' : 'prev'}
              size="small"
            >
              {next ? <NavigateNext /> : <NavigateBefore />}
            </CarouselNavButton>
          )}
          timeout={300}
          interval={null}
          swipe={true}
        >
          {props.images?.map((image, i) => (
            <CarouselSlide key={i}>
              <CarouselImage
                src={image}
                alt={`${props.header} - ${i + 1}`}
              />
            </CarouselSlide>
          ))}
        </Carousel>
      </CarouselContainer>

      <ProjectContent>
        <ProjectHeader>
          <Box>
            <Typography variant="h6" sx={{
              fontWeight: 600,
              fontSize: '1.0rem',
              marginBottom: 0.5,
              lineHeight: 1.3
            }}>
              {props.header}
            </Typography>
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              color: 'text.secondary'
            }}>
              <DateIcon sx={{ fontSize: '1.0rem' }} />
              <Typography sx={{ fontSize: '0.8rem' }}>{props.meta}</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
            {props.githubLink && (
              <ProjectLink
                href={props.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                <Typography variant="body2">View Source Code</Typography>
              </ProjectLink>
            )}
            {props.publicationLink && (
              <ProjectLink
                href={props.publicationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WebIcon />
                <Typography variant="body2">View Publication</Typography>
              </ProjectLink>
            )}
            {props.demoLink && (
              <ProjectLink
                href={props.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WebIcon />
                <Typography variant="body2">View Demo</Typography>
              </ProjectLink>
            )}
          </Box>
        </ProjectHeader>

        <Divider />

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.description}
        </Typography>

        {props.chips && (
          <ChipContainer>
            {props.chips.map((chip, index) => (
              <StyledChip
                key={index}
                label={chip.label}
                chipType={chip.type}
                size="small"
              />
            ))}
          </ChipContainer>
        )}

        <ShowMoreButton onClick={() => setShowDetails(!showDetails)} disableRipple>
          {showDetails ? 'Show less' : 'Show more'}
        </ShowMoreButton>

        <Collapse in={showDetails} timeout="auto">
          <Box sx={{ paddingTop: 2 }}>
            <BulletList>
              {props.listItems?.map((item, index) => (
                <li key={index}>
                  <Typography component="div">{item.main}</Typography>
                  {item.subItems && (
                    <BulletList isSubList>
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Typography variant="body2">{subItem}</Typography>
                        </li>
                      ))}
                    </BulletList>
                  )}
                </li>
              ))}
            </BulletList>
          </Box>
        </Collapse>
      </ProjectContent>
    </ProjectCard>
  );

  const renderEducation = () => (
    <EducationContainer>
      <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1 }}>
        {props.header}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: 'text.secondary', marginBottom: 0.5 }}>
        {props.subheader}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
        {props.meta}
      </Typography>
      {props.description && (
        <Typography variant="body2" paragraph>
          {props.description}
        </Typography>
      )}
    </EducationContainer>
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