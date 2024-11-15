// PanelSection/panelSectionStyles.js
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  // Optional enhancement for PanelSection root
  root: {
    width: '100%',
    marginBottom: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: theme.shadows[2]
    },
    '&:last-child': {
      marginBottom: 0
    }
  },
  content: {
    padding: theme.spacing(2.5)
  },
  title: {
    fontWeight: 600,
    fontSize: '1.1rem',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(1.5),
    borderBottom: `2px solid ${theme.palette.custom.accent2}`,
    opacity: 1
  }
}));

export default styles;