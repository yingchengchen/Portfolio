import { styled } from '@mui/material/styles';

export const ProjectsWrapper = styled('div')({
  width: '100%',
  minHeight: 'calc(100vh - var(--navbar-height))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
  backgroundColor: 'none',

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    '&::after': {
      top: theme.spacing(2),
      right: theme.spacing(2),
      bottom: theme.spacing(2),
      left: theme.spacing(2),
    }
  }
}));

export const ProjectContent = styled('div')(({ theme }) => ({
  flex: 1,
  width: '100%',
  padding: theme.spacing(2),
  overflowY: 'auto',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1)
  }
}));

export const HeaderTitle = styled('h3')(({ theme }) => ({
  color: 'var(--accent1-color)',
  margin: 0,
  padding: theme.spacing(2),
  fontSize: '1.2rem',
  fontFamily: 'Techno',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  lineHeight: 1.2,
  alignSelf: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    padding: theme.spacing(1.5),
  }
}));