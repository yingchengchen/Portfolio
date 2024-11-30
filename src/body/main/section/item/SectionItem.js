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
  ExpandMore as ExpandMoreIcon,
  DateRange as DateIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';

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

  // Common Components
  ChipContainer,
  StyledChip,
  BulletList
} from './sectionItemStyle';

import ProjectCard from './ProjectCard';

function SectionItem(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [showDetails, setShowDetails] = useState(false);


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
    <ProjectCard {...props} />
  );
  

  const renderEducation = () => (
    <WorkCard>
      <WorkCardHeader>
        <CompanyLogo
          style={{ backgroundImage: `url(${props.logo || '/default-university-logo.png'})` }}
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