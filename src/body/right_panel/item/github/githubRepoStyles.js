import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
    '&:last-child': {
      marginBottom: 0
    },
    transition: 'all 0.3s ease',
    border: '1px solid rgba(36, 41, 46, 0.2)',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 2),
    color: theme.palette.custom.github,
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    justifyContent: 'flex-start',
    textTransform: 'none',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows[2],
      borderColor: theme.palette.custom.github,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.custom.github,
      '& .MuiSvgIcon-root': {
        color: theme.palette.custom.github
      }
    },
    '& .MuiSvgIcon-root': {
      transition: 'color 0.3s ease',
      color: theme.palette.custom.github
    },
    '& .MuiButton-startIcon': {
      marginRight: theme.spacing(1.5)
    },
    '& .MuiButton-endIcon': {
      marginLeft: 'auto',
      marginRight: 0,
      opacity: 0.7,
      fontSize: '0.9rem',
      '& .MuiSvgIcon-root': {
        fontSize: '1rem'
      }
    }
  }
}));

export default styles;