import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { ReactTyped } from "react-typed";
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { max } from 'd3';

const BASE = {
  spacing: {
    lg: 0.95,
    md: 0.85,
    sm: 0.75,
    xs: 0.65
  },
  fontSize: {
    lg: 0.9,
    md: 0.85,
    sm: 0.8,
    xs: 0.75
  }
};


const ModalOverlay = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  '&.visible': {
    opacity: 1,
  }
}));

const ModalContent = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#F0EFFC',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.custom.accent1}`,
  maxWidth: '800px',
  width: '90%',
  display: 'flex',
  alignItems: 'center',
  textAlign:"justify",
  gap: theme.spacing(4),
  transform: 'translateY(20px)',
  transition: 'transform 0.3s ease-in-out',
  '.visible &': {
    transform: 'translateY(0)',
  },

  [theme.breakpoints.down('lg')]: {
    maxWidth: '700px',
    padding: theme.spacing(3.5),
    gap: theme.spacing(3.5),
  },

  [theme.breakpoints.down('md')]: {
    maxWidth: '600px',
    padding: theme.spacing(3),
    gap: theme.spacing(3),
  },

  [theme.breakpoints.down('sm')]: {
    maxWidth: '500px',
    padding: theme.spacing(2.5),
    gap: theme.spacing(2.5),
  },

  '@media (max-width: 480px)': {
    maxWidth: '350px',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
  }
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: theme.palette.text.secondary,

  '& svg': {
    fontSize: '1.5rem',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.4rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem',
    }
  }
}));

const StyledAvatar = styled('div')(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  borderRadius: '50%',
  overflow: 'hidden',
  flexShrink: 0,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  [theme.breakpoints.down('lg')]: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  [theme.breakpoints.down('md')]: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },

  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },

  '@media (max-width: 480px)': {
    width: theme.spacing(4),
    height: theme.spacing(4),
  }
}));

const TextContainer = styled('div')(({ theme }) => ({
  flex: 1,
  color: theme.palette.text.secondary,
  fontStyle: 'italic',
  maxWidth: 600,
  fontSize: '0.9rem',
  letterSpacing: '.10em',
  lineHeight: 1.6,

  [theme.breakpoints.down('lg')]: {
    maxWidth: 500,
    fontSize: '0.85rem',
    letterSpacing: '.09em',
  },

  [theme.breakpoints.down('md')]: {
    maxWidth: 400,
    fontSize: '0.8rem',
    letterSpacing: '.08em',
  },

  [theme.breakpoints.down('sm')]: {
    maxWidth: 300,
    fontSize: '0.75rem',
    letterSpacing: '.07em',
  },

  '@media (max-width: 480px)': {
    maxWidth:240,
    fontSize: '0.7rem',
    letterSpacing: '.06em',
  }
}));

const IntroModal = ({ isVisible, onClose, avatarImage, introText, sectionId }) => {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setStartTyping(true);
    } else {
      setStartTyping(false); // Reset typing when modal closes
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <ModalOverlay 
      className={isVisible ? 'visible' : ''}
      onClick={onClose}
      data-section={sectionId}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="close">
          <CloseIcon />
        </CloseButton>
        <StyledAvatar>
          <img src={avatarImage} alt="Avatar" />
        </StyledAvatar>
        <TextContainer>
          {startTyping && (
            <ReactTyped
              strings={[introText]}
              typeSpeed={40}
              cursorChar="|"
              showCursor={true}
            />
          )}
        </TextContainer>
      </ModalContent>
    </ModalOverlay>
  );
};


export default IntroModal;