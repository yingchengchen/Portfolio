import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
    width:'100%',
    maxWidth: '100%',
    overflow: 'hidden',
    '&:last-child': {
      marginBottom: 0
    }
  },
  rootMobile: {
    marginBottom: theme.spacing(2),
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
    },
    '& .MuiCardHeader-action': {
      margin: 0,
      alignSelf: 'center',
    }
  },
  headerMobile: {
    '& .MuiCardHeader-root': {
      padding: theme.spacing(0.5,1),
      minHeight: '48px',
    },
    '& .MuiCardHeader-title': {
      fontSize: '0.675rem',
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
    maxwidth: '100%',
    overflow: 'hidden',
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  currentMobile:{
    padding: theme.spacing(1.5),
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
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    padding: theme.spacing(1),
    '& .MuiIconButton-label': {
      width: '20px',
      height: '20px'
    }
  }
}));

export default styles;