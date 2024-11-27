import { styled } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';

export const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ theme, isMobile }) => ({
  width: '100%',
  marginBottom: isMobile ? theme.spacing(2) : theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
  },
  '&:last-child': {
    marginBottom: 0
  }
}));

export const ContentWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ theme, isMobile }) => ({
  padding: isMobile ? theme.spacing(1.5) : theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
  }
}));

export const SectionTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ theme, isMobile }) => ({
  paddingBottom: isMobile ? theme.spacing(1) : theme.spacing(1.5),
  fontWeight: 600,
  opacity: 1,
  color: theme.palette.secondary.main,
  [theme.breakpoints.down('sm')]: {
    paddingBottom: theme.spacing(1),
    fontSize: '0.9rem'
  }
}));

export const ChildrenContainer = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ theme, isMobile }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem'
  }
}));