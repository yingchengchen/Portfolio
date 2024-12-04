// BodySection.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import IntroModal from '../IntroModal';
import AvatarImage from '../../../images/myAvatar.png';
import {
  SectionRoot,
  HeaderContainer,
  HeaderTitle,
  ContentContainer,
  FullHeightContainer
} from './bodySectionStyle';

// Intro text mapping for each section type
const introTexts = {
  project: "Now, let's explore my projects and journey through my achievements in work. I look forward to connecting with you and sharing my story. Scroll down to each section or navigate through the Navbar on the top-right corner.",
  work: "Let me share my professional experiences and the impactful work I've been part of.",
  education: "Here's my academic journey and the knowledge I've gained."
};

function BodySection({ header, children = null, type = null, activeSection }) {
  const [showIntro, setShowIntro] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);
  const sectionId = header.toLowerCase().replace(/\s+/g, '-');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenClosed) {
          const sectionName = header;
          if (activeSection === sectionName && !hasBeenClosed) {
            setShowIntro(true);
          }
        } else {
          setShowIntro(false);
        }
      },
      {
        threshold: 0.3
      }
    );

    const section = document.getElementById(sectionId);
    if (section) {
      observer.observe(section);
    }

    // Watch for active section changes
    if (header === activeSection && !hasBeenClosed) {
      setShowIntro(true);
    } else {
      setShowIntro(false);
    }

    // Listen for close events from other sections
    const handleCloseModal = (event) => {
      if (event.detail.section === sectionId) {
        setShowIntro(false);
      }
    };

    window.addEventListener('closeModal', handleCloseModal);

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      window.removeEventListener('closeModal', handleCloseModal);
    };
  }, [sectionId, hasBeenClosed, activeSection, header]);

  const handleModalClose = () => {
    setShowIntro(false);
    setHasBeenClosed(true);
  };

  const renderContent = () => {
    if (type === 'project') {
      return (
        <Grid container spacing={3}>
          {React.Children.map(children, (child) => (
            <Grid item xs={12} sm={12} md={4} lg={4}>
              {child}
            </Grid>
          ))}
        </Grid>
      );
    }
    if (type === 'work' || type === 'education') {
      return (
        <FullHeightContainer>
          {children}
        </FullHeightContainer>
      );
    }
    return children;
  };

  const isFullHeight = type === 'work' || type === 'education';

  return (
    <SectionRoot
      expanded={true}
      id={sectionId}
      isFullHeight={isFullHeight}
    >
      {type && introTexts[type] && (
        <IntroModal 
          isVisible={showIntro}
          onClose={handleModalClose}
          avatarImage={AvatarImage}
          introText={introTexts[type]}
          sectionId={sectionId}
        />
      )}
      <HeaderContainer>
        <HeaderTitle>{header}</HeaderTitle>
      </HeaderContainer>
      <ContentContainer 
        isMobile={type === 'project'} 
        isFullHeight={isFullHeight}
      >
        {renderContent()}
      </ContentContainer>
    </SectionRoot>
  );
}

BodySection.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node,
  type: PropTypes.oneOf(['education', 'work', 'project']),
  activeSection: PropTypes.string
};

export default BodySection;