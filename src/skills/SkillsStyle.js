// skills/SkillsStyle.js
import { styled } from '@mui/material/styles';
import { Typography, Avatar } from '@mui/material';

export const SkillsVisualSection = styled('div')(({ theme }) => ({
  flex: '1',
  minHeight: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    minHeight: '300px',
  }
}));

export const SkillsRoot = styled('div')(({ theme }) => ({
  height: 'calc(100vh - var(--navbar-height))', // Subtract navbar height
  width: '100%',
  backgroundColor: '#F0EFFC',
  padding: theme.spacing(4),
  display: 'flex',
  alignItems: 'center', // Changed to center
  gap: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',

  '&::after': {
    content: '""',
    position: 'absolute',
    top: theme.spacing(4),
    right: theme.spacing(4),
    bottom: theme.spacing(4),
    left: theme.spacing(4),
    border: `1px solid ${theme.palette.custom.accent1}`,
    borderRadius: theme.spacing(2),
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - var(--mobile-navbar-height))',
    flexDirection: 'column',
    padding: theme.spacing(2),
    gap: theme.spacing(4),

    '&::after': {
      top: theme.spacing(2),
      right: theme.spacing(2),
      bottom: theme.spacing(2),
      left: theme.spacing(2),
    },
  }
}));

export const ContentWrapper = styled('div')(({ theme }) => ({
  flex: '1',
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