import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import { useTheme, useMediaQuery } from '@mui/material';
import {
  StyledPaper,
  ContentWrapper,
  SectionTitle,
  ChildrenContainer
} from './panelSectionStyles';

function PanelSection(props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledPaper isMobile={isMobile}>
      <ContentWrapper isMobile={isMobile}>
        <SectionTitle
          variant={isSmallScreen || isMobile ? "body2" : "body1"}
          isMobile={isMobile}
        >
          {props.title}
        </SectionTitle>
        <ChildrenContainer
          variant={isMobile ? "body2" : "body1"}
          component="div"
          isMobile={isMobile}
        >
          {props.children}
        </ChildrenContainer>
      </ContentWrapper>
    </StyledPaper>
  );
}

PanelSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default PanelSection;