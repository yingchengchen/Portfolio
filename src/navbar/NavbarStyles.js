import { styled } from '@mui/material/styles';
import { Button, IconButton, Menu } from '@mui/material';

// Desktop Navigation Styles
export const NavContainer = styled('nav')(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(3),
  display: 'flex',
  gap: theme.spacing(1.5),
  zIndex: 10,
}));

export const StyledNavButton = styled(Button)(({ theme, active }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.text.secondary,
  padding: theme.spacing(0.75, 2),
  minWidth: 'auto',
  border: 'none',
  transition: 'all 0.3s ease',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.9rem',
  letterSpacing: '0.5px',
  position: 'relative',
  
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.custom.accent1,
  },

  ...(active && {
    backgroundColor: 'transparent',
    color: theme.palette.custom.accent1,
    fontWeight: 600,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -2,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60%',
      height: '2px',
      backgroundColor: theme.palette.custom.accent1
    },
  }),
}));

// Mobile Menu Styles
export const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  color: theme.palette.text.primary,
  zIndex: 1100,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

export const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    marginTop: theme.spacing(1),
    width: '180px',
    maxWidth: 'calc(100vw - 32px)',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
}));

export const StyledMenuItem = styled('div')(({ theme, active }) => ({
  padding: theme.spacing(1.5, 3),
  fontSize: '0.9rem',
  fontWeight: 500,
  color: theme.palette.text.secondary,
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: `${theme.palette.custom.accent1}10`,
    color: 'var(--accent1-color)',
  },

  ...(active && {
    color: 'var(--accent1-color)',
    backgroundColor: `${theme.palette.custom.accent1}10`,
    '&:hover': {
      backgroundColor: `${theme.palette.custom.accent1}15`,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -2,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60%',
      height: '2px',
      backgroundColor: 'var(--accent1-color)',
    },
  }),
}));