// ProjectItem/projectItemStyles.js
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
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
      borderColor: theme.palette.custom.accent2,
      '& $header': {
        color: theme.palette.secondary.main
      },
    },
    '&:last-child': {
      marginBottom: 0
    }
  },
  header: {
    fontWeight: 600,
    fontSize: '1rem',
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
    transition: 'color 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.secondary.main
    }
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    lineHeight: 1.6
  }
}));

export default styles;