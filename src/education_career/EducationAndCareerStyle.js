// EducationAndCareerStyle.js
import { styled } from "@mui/material/styles";
import { Paper, Avatar } from '@mui/material';

export const EduCaWrapper = styled("div")({
  width: "100%",
  minHeight: "calc(100vh - var(--navbar-height))",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const EducationCareerRoot = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "1403px",
  margin: "0 auto",
  height: "638px",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  position: "relative",
  backgroundColor: "none",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

export const HeaderTitle = styled("h3")(({ theme }) => ({
  color: "var(--accent1-color)",
  margin: 0,
  padding: theme.spacing(2),
  fontSize: "1.2rem",
  fontFamily: "Techno",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  lineHeight: 1.2,
  alignSelf: "flex-start",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
    padding: theme.spacing(1.5),
  },
}));

export const ContentContainer = styled("div")(({ theme }) => ({
  flex: 1,
  width: "100%",
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

export const TimelineContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '500px',
  padding: theme.spacing(4),
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between', // Distribute space evenly
}));

export const TimelineItem = styled('div')(({ theme, totalItems }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: `${100 / totalItems}%`, // Divide width by number of items
  maxWidth: '250px', // Maximum width for each item
  height: '100%',
  justifyContent: 'center',
}));

export const TimelineContentCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#ffffff',
  borderRadius: theme.spacing(1),
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  border: `1px solid ${theme.palette.primary.main}`,
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
  },
  width: 'auto', // Let content determine width
  minWidth: '180px', // Minimum width to ensure readability
  maxWidth: '200px', // Maximum width to maintain layout
  margin: '0 auto',
  whiteSpace: 'normal', // Allow text wrapping
  wordWrap: 'break-word', // Handle long words
}));

export const TimelineLine = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '5%',
  width: '92%', // 90% width (from 5% to 95%)
  height: 2,
  backgroundColor: theme.palette.primary.main,
  transform: 'translateY(-50%)',
  zIndex: 1,

  '&::after': {
    content: '""',
    position: 'absolute',
    right: -1, // Align with the end of the line
    top: '50%',
    transform: 'translateY(-50%)',
    width: 0,
    height: 0,
    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    borderLeft: `12px solid ${theme.palette.primary.main}`, // Arrow using border
  }
}));

export const TimelineDot = styled('div', {
  shouldForwardProp: prop => prop !== 'type',
})(({ theme, type }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: type === 'education' ? theme.palette.text.secondary : theme.palette.custom.accent1,
  // backgroundColor:theme.palette.custom.accent1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  '& svg': {
    color: '#fff',
    fontSize: '1.2rem',
  },
}));

export const TimelineContent = styled('div', {
  shouldForwardProp: prop => prop !== 'type',
})(({ theme, type }) => ({
  width: '100%',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  ...(type === 'education' ? {
    bottom: '60%', // Above the line for education
  } : {
    top: '60%', // Below the line for work
  }),
}));

export const TimelinePeriod = styled('div')(({ theme }) => ({
  fontSize: '0.7rem',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(0.5),
}));

export const TimelineTitle = styled('h4')(({ theme }) => ({
  margin: '0 0 4px 0',
  fontSize: '1.1rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const TimelineSubtitle = styled('div')(({ theme }) => ({
  fontSize: '0.8rem',
  color: theme.palette.text.secondary,
}));

export const CustomAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  position: 'absolute',
  top: '50%',
  left: '2%', // Position slightly before the line's start (5%)
  transform: 'translateY(-50%)', // Center vertically
  zIndex: 2, // Ensure it's above the line
  // border: `2px solid ${theme.palette.primary.main}`, // Optional: add border to match line
}));


export const PopoverContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: '300px',
  minWidth: '200px',
  '& .location': {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    fontSize: '0.85rem',
    marginBottom: theme.spacing(2),
    '& svg': {
      fontSize: '1rem',
      marginRight: theme.spacing(0.5),
    }
  },

  '& .description': {
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    lineHeight: 1.6,
    marginBottom: theme.spacing(2),
  },

  '& .chips-container': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(0.5),
  },

  '& .chip': {
    padding: theme.spacing(0.5, 1.5),
    borderRadius: '16px',
    fontSize: '0.75rem',
    fontWeight: 500,
    
    '&.primary': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    
    '&.secondary': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    }
  }
}));