import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import {
  DateRange as DateIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';

import {
  WorkCard,
  WorkCardHeader,
  CompanyLogo,
  HeaderContent,
  CompanyName,
  JobTitle,
  MetaInfo,
  ExpandButton,
  StyledCollapse,
  ChipContainer,
  StyledChip,
  BulletList
} from './sectionItemStyle';

function EducationCard(props) {
  const [expanded, setExpanded] = useState(false);

  return (
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
          {props.listItems && (
            <BulletList>
              {props.listItems.map((item, index) => (
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
          )}
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
}

EducationCard.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  meta: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.string,
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

export default EducationCard;