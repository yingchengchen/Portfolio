import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { ReactTyped } from "react-typed";
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
  gap: theme.spacing(4),
  transform: 'translateY(20px)',
  transition: 'transform 0.3s ease-in-out',
  '.visible &': {
    transform: 'translateY(0)',
  }
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

const StyledAvatar = styled('div')(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  borderRadius: '50%',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
}));

const TextContainer = styled('div')(({ theme }) => ({
  flex: 1,
  color: theme.palette.text.secondary,
  fontStyle: 'italic',
  fontSize: '0.9rem',
  letterSpacing: '.10em',
  lineHeight: 1.6,
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