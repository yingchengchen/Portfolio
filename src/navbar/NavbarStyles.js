// NavbarStyles.js
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  // Desktop styles
  navContainer: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(3),
    display: 'flex',
    gap: theme.spacing(1.5),
    zIndex: 10,
  },
  navButton: {
    backgroundColor: 'transparent',
    color: theme.palette.text.secondary,
    padding: theme.spacing(0.75, 2),
    minWidth: 'auto',
    border: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.custom.accent1,
    },
    '&.active': {
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
        backgroundColor: theme.palette.custom.accent1,
      },
    },
    transition: 'all 0.3s ease',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '0.9rem',
    letterSpacing: '0.5px',
    position: 'relative',
    '&:hover::after': {
      content: '""',
      position: 'absolute',
      bottom: -2,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60%',
      height: '2px',
      backgroundColor: theme.palette.custom.accent1,
      opacity: 0.5,
    },
  },
  
  // Mobile menu styles
  menuButton: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    color: theme.palette.text.primary,
    zIndex: 1100,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
  menuPaper: {
    marginTop: theme.spacing(1),
    width: '180px', // Adjust this value to change menu width
    maxWidth: 'calc(100vw - 32px)',
    // minWidth: 200,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
  menuItem: {
    padding: theme.spacing(1.5, 3),
    fontSize: '0.9rem',
    fontWeight: 500,
    color: theme.palette.text.secondary,
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: `${theme.palette.custom.accent1}10`,
      color: theme.palette.custom.accent1,
    },
  },
  activeMenuItem: {
    color: theme.palette.custom.accent1,
    backgroundColor: `${theme.palette.custom.accent1}10`,
    '&:hover': {
      backgroundColor: `${theme.palette.custom.accent1}15`,
    },
  },
}));

export default styles;