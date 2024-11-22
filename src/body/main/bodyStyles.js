import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    flex: 1,
    width: '100%', 
    maxWidth: '100%', 
    overflowX: 'hidden', 
    [theme.breakpoints.down('sm')]: { // Add responsive styles
      padding: theme.spacing(1)
    }
  }
}));

export default styles;