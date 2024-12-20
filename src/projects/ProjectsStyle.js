import { styled } from '@mui/material/styles';

export const ProjectsWrapper = styled('div')({
  width: '100%',
  minHeight: 'calc(100vh - var(--navbar-height))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem 0',
});

export const ProjectRoot = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '1403px',
  margin: '0 auto',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  }
}));


export const ProjectContent = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gap: theme.spacing(3),

  '& .MuiGrid-container': {
    margin: 0,
    width: '100%',
  },

  // Adjust grid items based on screen size
  '& .MuiGrid-item': {
    padding: theme.spacing(1.5),
    // Reset default padding
    [theme.breakpoints.down('lg')]: {
      maxWidth: '50%',
      flexBasis: '50%',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      flexBasis: '100%',
    }
  }
}));

export const HeaderTitle = styled('h3')(({ theme }) => ({
  color: 'var(--accent1-color)',
  margin: 0,
  padding: theme.spacing(2),
  fontSize: "1.6rem",
  fontFamily: 'Techno',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  lineHeight: 1.2,
  alignSelf: 'flex-start',
  
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  }
}));