import { styled } from '@mui/material/styles';
import { Card, IconButton, Typography, Button, Chip, Collapse } from '@mui/material';

export const WorkCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
  },
}));

export const WorkCardHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(2),
  alignItems: 'flex-start',
  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',
  },
}));

export const CompanyLogo = styled('div')(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  flexShrink: 0,
  backgroundColor: theme.palette.background.default,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.down('xs')]: {
    marginBottom: theme.spacing(2),
  },
}));

export const HeaderContent = styled('div')({
  flex: 1,
});

export const CompanyName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(0.5),
}));

export const JobTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 500,
  marginBottom: theme.spacing(1),
}));

export const MetaInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  color: theme.palette.text.secondary,
  '& > *': {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
  },
}));

export const ExpandButton = styled(IconButton)(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.shortest
  }),
  '&.expanded': {
    transform: 'rotate(180deg)',
  },
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)'
  }
}));

export const StyledCollapse = styled(Collapse)(({ theme }) => ({
  width: '100%',
  '& .MuiCollapse-vertical': {
    width: '100%'
  },
  '& .MuiCollapse-entered': {
    width: '100%'
  }
}));

export const CarouselContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: "auto",
  position: 'relative',
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {
    height:'auto',
  },
  '& .MuiIconButton-root': {
    opacity: 0,
    transition: 'opacity 0.2s ease',
  },
  '&:hover .MuiIconButton-root': {
    opacity: 1,
  },
}));

export const CarouselSlide = styled('div')({
  width: '100%',
  height: 'auto',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const CarouselImage = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  objectPosition: 'center',
});

export const CarouselNavButton = styled(IconButton)(({ theme, direction }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  color: theme.palette.common.white,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  ...(direction === 'prev' ? { left: 8 } : { right: 8 }),
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  '&.MuiIconButton-root': {
    padding: 8,
  },
}));

// Project Card Styles
export const ProjectCard = styled(Card)(({ theme }) => ({
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    marginBottom: theme.spacing(2),
  },
}));

export const ProjectContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
  },
}));

export const ProjectHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
}));

export const ProjectLink = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(0.55, 1.0),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  backgroundColor: 'transparent',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
  fontSize: '0.85rem',
  fontWeight: 500,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    padding: theme.spacing(0.5, 0.75),
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease',
  },
  '&:hover .MuiSvgIcon-root': {
    transform: 'scale(1.1)',
  },
}));

export const ShowMoreButton = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-start',
  minWidth: 'unset',
  padding: theme.spacing(0.5, 0),
  fontSize: '0.875rem',
  color: theme.palette.primary.light,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
  },
  '&.MuiButton-root': {
    padding: theme.spacing(0),
    marginTop: theme.spacing(1),
  },
}));

// Now let's do Education styles
export const EducationContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  borderLeft: `4px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(3),
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
}));

// Common styles
export const ChipContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(0.5),
  marginTop: theme.spacing(1)
}));

export const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'chipType'
})(({ theme, chipType }) => ({
  height: 24,
  fontSize: '0.75rem',
  backgroundColor: chipType === 'primary' 
    ? theme.palette.primary.main 
    : theme.palette.secondary.main,
  color: chipType === 'primary'
    ? theme.palette.primary.contrastText
    : theme.palette.secondary.contrastText,
  '&:hover': {
    backgroundColor: chipType === 'primary'
      ? theme.palette.primary.dark
      : theme.palette.secondary.dark
  }
}));

export const BulletList = styled('ul')(({ theme, isSubList }) => ({
  margin: isSubList ? `${theme.spacing(1)}px 0 0 ${theme.spacing(2)}px` : 0,
  padding: isSubList ? 0 : `0 0 0 ${theme.spacing(2)}px`,
  listStyle: isSubList ? 'circle' : 'disc',
  '& li': {
    marginBottom: isSubList ? theme.spacing(0.5) : theme.spacing(1),
    '&:last-child': {
      marginBottom: 0,
    },
  },
}));