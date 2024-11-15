import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
    // backgroundColor: `${theme.palette.custom.accent1}10`,
    '&:last-child': {
      marginBottom: 0
    }
  },
  header: {
    '& .MuiCardHeader-root': {
      backgroundColor: theme.palette.custom.accent1,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      padding: theme.spacing(1), // Reduced padding
      minHeight: '48px', // Set minimum height
    },
    '& .MuiCardHeader-title': {
      color: '#FFFFFF',
      fontSize: '1rem', // Reduced font size
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      lineHeight: 1.2 // Adjusted line height
    },
    '& .MuiCardHeader-action': {
      margin: 0, // Remove default margin
      alignSelf: 'center', // Center the expand icon vertically
    }
  },
  content: {
    padding: theme.spacing(2), // Reduced padding if desired
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    color: '#FFFFFF',
    padding: theme.spacing(1), // Reduced padding for the icon button
    '& .MuiIconButton-label': {
      width: '20px', // Smaller icon
      height: '20px'
    }
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    color: '#FFFFFF',
    padding: theme.spacing(1), // Reduced padding for the icon button
    '& .MuiIconButton-label': {
      width: '20px', // Smaller icon
      height: '20px'
    }
  }
}));

export default styles;