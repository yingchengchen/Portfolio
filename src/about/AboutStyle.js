// AboutStyle.js
import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';

export const AboutRoot = styled('div')(({ theme }) => ({
  height: '100vh', // Changed from minHeight to height
  width: '100%',
  backgroundColor: '#F0EFFC',
  padding: theme.spacing(4),
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(4),
  overflow: 'hidden', // Add this to prevent content overflow
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    padding: theme.spacing(2),
    gap: theme.spacing(4),
  }
}));

export const ContentWrapper = styled('div')(({ theme }) => ({
  flex: '2',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent:'center',
  gap: theme.spacing(3),
  width:'50%',
  minHeight: '500px', // Add minimum height to accommodate staggered cards
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  }
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  flexShrink: 0,
  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  }
}));

export const IntroContainer = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '370px',
  display: 'flex',
  alignItems: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '280px',
    alignItems: 'center',
  }
}));

export const StyledTyped = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  fontStyle: 'italic',
  letterSpacing: '.10em',
  fontSize: '0.9rem',
  '& .typed-cursor': {
    color: '#697478',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    textAlign: 'center',
  }
}));

const cardStyles = {
  developer: {
    backgroundColor: '#C1CBDC',
    top: '200px',
    right: '30px',
    width: '330px', // Original width
    height: '280px', // Original height
    aspectRatio: '497/367',
  },
  researcher: {
    backgroundColor: '#E0E5DF',
    top: '130px',
    right: '170px',
    width: '400px', // Original width
    height: '270px', // Original height
    aspectRatio: '638/367',
  },
  engineer: {
    backgroundColor: '#EAD0D1',
    top: 20,
    left: 0,
    width: '400px', // Original width
    height: '270px', // Original height
    aspectRatio: '600/392',
  },
};

export const RoleCard = styled('div')(({ theme, cardType = 'developer' }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  border: '2.5px solid #697478',
  backgroundColor: cardStyles[cardType]?.backgroundColor,
  position: 'absolute',
  width: cardStyles[cardType]?.width,
  height: cardStyles[cardType]?.height,
  maxWidth: '100%',
  top: cardStyles[cardType]?.top,
  right: cardStyles[cardType]?.right,
  left: cardStyles[cardType]?.left,
  zIndex: cardType === 'developer' ? 3 : cardType === 'researcher' ? 2 : 1,
  cursor: 'pointer',
  color: '#697478',
  fontWeight: 500,
  fontSize: '1.5rem',
  transition: 'transform 0.3s ease',
  // Add text container styles
  display: 'flex', // Add flex display
  '& > span': { // Style for the text container
    maxWidth: '60%', // Take only half of the card width
    wordWrap: 'break-word', // Handle text wrapping
  },
  '&:hover': {
    transform: 'translateX(10px) scale(1.05)', // Added scale effect
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  },
  [theme.breakpoints.down('lg')]: {
    width: 'auto',
    height: 'auto',
    aspectRatio: cardStyles[cardType]?.aspectRatio,
  }
}));

export const CardContainer = styled('div')(({ theme }) => ({
  flex: '3',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '50%',
  position: 'relative',
  minHeight: '600px', // Increased to accommodate taller cards
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  }
}));