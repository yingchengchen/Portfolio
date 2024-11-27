import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import {
  SectionRoot,
  HeaderContainer,
  HeaderTitle,
  ContentContainer
} from './bodySectionStyle';

function BodySection({ header, children, type }) {
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
    <SectionRoot
      expanded={true}
      id={header.toLowerCase().replace(/\s+/g, '-')}
    >
      <HeaderContainer>
        <HeaderTitle>{header}</HeaderTitle>
      </HeaderContainer>
      <ContentContainer isMobile={type === 'project'}>
        {renderContent()}
      </ContentContainer>
    </SectionRoot>
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