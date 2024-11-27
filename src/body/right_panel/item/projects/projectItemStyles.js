import { styled } from '@mui/material/styles';
import { Link as MuiLink } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export const ItemContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  transition: 'all 0.3s ease',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[2],
    borderColor: 'var(--accent2-color)',
    '& .project-header': {
      color: theme.palette.secondary.main
    },
  },
  '&:last-child': {
    marginBottom: 0
  }
}));

const headerStyles = {
  fontWeight: 600,
  fontSize: '1rem',
  marginBottom: (theme) => theme.spacing(1),
  color: (theme) => theme.palette.text.primary,
  transition: 'color 0.3s ease',
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none',
    color: (theme) => theme.palette.secondary.main
  }
};

export const HeaderLink = styled(MuiLink)(({ theme }) => ({
  ...headerStyles
}));

export const HeaderText = styled('span')(({ theme }) => ({
  ...headerStyles
}));

export const Description = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.9rem',
  lineHeight: 1.6
}));

export const StyledIcon = styled(OpenInNewIcon)(({ theme }) => ({
  fontSize: 16,
  marginLeft: theme.spacing(1),
  opacity: 0.7
}));