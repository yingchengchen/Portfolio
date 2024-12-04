import { styled } from '@mui/material/styles';
export const FullHeightContainer = styled('div')(({ theme }) => ({
  minHeight: 'calc(100vh - var(--navbar-height))',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2, 0),
  gap: theme.spacing(3), // Space between cards
  [theme.breakpoints.down('sm')]: {
    minHeight: 'calc(100vh - var(--mobile-navbar-height))',
  }
}));

// Update ContentContainer to handle full height sections
export const ContentContainer = styled('div')(({ theme, isMobile, isFullHeight }) => ({
  padding: theme.spacing(2),
  width: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  ...(isFullHeight && {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }),
  '&:last-child': {
    paddingBottom: theme.spacing(2)
  },
  ...(isMobile && {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5),
    }
  })
}));

// Update SectionRoot for full height sections
export const SectionRoot = styled('div')(({ theme, expanded, isFullHeight }) => ({
  marginBottom: theme.spacing(3),
  width: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  ...(isFullHeight && {
    minHeight: 'calc(100vh - var(--navbar-height))',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      minHeight: 'calc(100vh - var(--mobile-navbar-height))',
    }
  }),
  '&:last-child': {
    marginBottom: 0
  },
  transition: 'margin-bottom 0.2s ease-in-out',
  ...(expanded && {
    marginBottom: theme.spacing(4),
  })
}));

export const HeaderContainer = styled('div')(({ theme }) => ({
  width: '100%',
  transition: theme.transitions.create(['background-color', 'color'], {
    duration: theme.transitions.duration.shorter,
  }),
  '& .MuiCardHeader-root': {
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    minHeight: '48px',
    width: '100%',
    transition: theme.transitions.create(['background-color', 'color'], {
      duration: theme.transitions.duration.shorter,
    }),
  },
  '& .MuiCardHeader-title': {
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    lineHeight: 1.2,
    transition: theme.transitions.create('color', {
      duration: theme.transitions.duration.shorter,
    }),
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    }
  },
  '& .MuiCardHeader-action': {
    margin: 0,
    alignSelf: 'center',
  }
}));

export const HeaderTitle = styled('h3')(({ theme }) => ({
  color: 'var(--accent1-color)',
  margin: 0,
  padding: theme.spacing(2),
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  lineHeight: 1.2,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    padding: theme.spacing(1.5),
  }
}));


export const ExpandIcon = styled('div')(({ theme, open }) => ({
  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  padding: theme.spacing(1),
  '& .MuiIconButton-label': {
    width: '20px',
    height: '20px'
  }
}));