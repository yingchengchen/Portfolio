// styles.js - Add these to your existing styles
import { makeStyles } from '@material-ui/core/styles';
const styles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
    width:'100%',
    maxWidth: '100%',
    overflow: 'hidden',
    '&:last-child': {
      marginBottom: 0
    },
    transition: 'margin-bottom 0.2s ease-in-out',
    '&.expanded': {
      marginBottom: theme.spacing(4),
    }
  },
  header: {
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
  },
  headerExpanded: {
    '& .MuiCardHeader-root': {
      backgroundColor: theme.palette.custom.accent1,
    },
    '& .MuiCardHeader-title': {
      color: '#FFFFFF',
    },
    '& .MuiIconButton-root': {
      color: '#FFFFFF',
    },
  },
  headerCollapsed: {
    '& .MuiCardHeader-root': {
      backgroundColor: theme.palette.background.paper,
    },
    '& .MuiCardHeader-title': {
      color: theme.palette.custom.accent1,
    },
    '& .MuiIconButton-root': {
      color: theme.palette.custom.accent1,
    }
  },
  content: {
    padding: theme.spacing(2),
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  contentMobile: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5),
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    padding: theme.spacing(1),
    '& .MuiIconButton-label': {
      width: '20px',
      height: '20px'
    }
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default styles;