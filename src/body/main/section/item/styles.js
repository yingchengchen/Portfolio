// styles.js
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  // Work Experience Card Styles
  workCard: {
    marginBottom: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
    },
  },
  workCardHeader: {
    display: 'flex',
    padding: theme.spacing(2),
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  companyLogo: {
    width: 80,
    height: 80,
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    flexShrink: 0,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },
  headerContent: {
    flex: 1,
  },
  companyName: {
    fontWeight: 600,
    marginBottom: theme.spacing(0.5),
  },
  jobTitle: {
    color: theme.palette.text.secondary,
    fontWeight: 500,
    marginBottom: theme.spacing(1),
  },
  metaInfo: {
    display: 'flex',
    color: theme.palette.text.secondary,
    '& > *': {
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing(2),
    },
  },
  metaIcon: {
    fontSize: '1rem',
    marginRight: theme.spacing(0.5),
    color: theme.palette.text.secondary,
  },
  // Carousel Styles
  carousel: {
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
  },
  carouselSlide: {
    width: '100%',
    height: 'auto',
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    objectPosition: 'center',
  },
  carouselNavButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    color: theme.palette.common.white,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    '&.MuiIconButton-root': {
      padding: 8,
    },
  },
  carouselNavButtonPrev: {
    left: 8,
  },
  carouselNavButtonNext: {
    right: 8,
  },
  carouselIndicators: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    gap: 4,
    transform: 'translateZ(0)',
    '& .MuiIconButton-root': {
      padding: 4,
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover': {
        color: 'rgba(255, 255, 255, 0.9)',
      },
      '&.active': {
        color: theme.palette.common.white,
      },
    },
  },
  carouselIndicator: {
    color: 'rgba(255, 255, 255, 0.5)',
    transition: 'all 0.3s ease',
    padding: 4,
    '&:hover': {
      color: 'rgba(255, 255, 255, 0.8)',
    },
    '& .MuiSvgIcon-root': {
      fontSize: 8,
    },
  },
  carouselIndicatorActive: {
    color: theme.palette.common.white,
    '& .MuiSvgIcon-root': {
      fontSize: 10,
    },
  },

  // Project Card Styles
  projectCard: {
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
  },
  projectContent: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5),
    },
  },
  projectHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5),
  },
  projectTitleSection: {
    flex: 1,
  },
  projectTitle: {
    fontWeight: 600,
    fontSize: '1.0rem',
    marginBottom: theme.spacing(0.5),
    color: theme.palette.text.primary,
    lineHeight: 1.3,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  projectMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
    color: theme.palette.text.secondary,
    '& .MuiTypography-root': {
      fontSize: '0.8rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.7rem',
      },
    },
    '& .MuiSvgIcon-root': {
      fontSize: '1.0rem',
    },
  },
  projectDivider: {
    margin: theme.spacing(1, 0),
    backgroundColor: theme.palette.divider,
  },
  projectLinks: {
    display: 'flex',
    gap: theme.spacing(1.5),
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      gap: theme.spacing(1),
    },
  },
  projectLink: {
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
  },
  demoLink: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(0.55, 1.0),
    borderRadius: theme.shape.borderRadius,
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      padding: theme.spacing(0.5, 0.75),
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      borderColor: theme.palette.primary.dark,
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
  },

  // Education Styles
  educationItem: {
    padding: theme.spacing(3),
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(3),
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
  schoolName: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
  degree: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
  },
  duration: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },

  // Common Styles
  description: {
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    lineHeight: 1.6,
    margin: 0,
  },
  bulletPoints: {
    margin: 0,
    padding: `0 0 0 ${theme.spacing(2)}px`,
    listStyle: 'disc',
    '& li': {
      marginBottom: theme.spacing(1),
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
  subBullets: {
    margin: `${theme.spacing(1)}px 0 0 ${theme.spacing(2)}px`,
    padding: 0,
    listStyle: 'circle',
    '& li': {
      marginBottom: theme.spacing(0.5),
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(0.5),
    '& .MuiChip-root': {
      height: 24,
      fontSize: '0.75rem',
    },
  },
  chip: {
    borderRadius: '16px',
  },
  primaryChip: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  secondaryChip: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },

  // Show More Button
  showMoreButton: {
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
  },
  projectDetails: {
    paddingTop: theme.spacing(2),
  },

  // Expansion Controls
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default styles;