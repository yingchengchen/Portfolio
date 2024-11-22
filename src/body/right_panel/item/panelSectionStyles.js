// panelSectionStyles.js
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
    '&:last-child': {
      marginBottom: 0
    }
  },
  content: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5),
    }
  },
  title: {
    paddingBottom: theme.spacing(1.5),
    fontWeight: 600,
    opacity: 1,
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(1),
      fontSize: '0.9rem'
    }
  },
  childrenWrapper: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem'
    }
  }
}));

export default styles;