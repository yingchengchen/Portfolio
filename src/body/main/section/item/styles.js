// SectionItem/styles.js
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    borderBottom: `1px solid ${theme.palette.divider}`,
    width: '100%',
    maxWidth: '100%',
    overflowX: 'hidden',
    '&:last-child': {
      marginBottom: 0,
      paddingBottom: 0,
      borderBottom: 'none'
    }
  },
  headerWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(1),
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  },
  title: {
    fontWeight: 600,
    flex: 1,
    width: '100%',
    wordBreak: 'break-word',
    '& strong': {
      fontWeight: 700
    },
    '& em': {
      fontStyle: 'italic',
      color: theme.palette.text.secondary
    }
  },
  meta: {
    color: theme.palette.text.secondary,
    whiteSpace: 'normal',
    marginLeft: 0,
    marginTop:theme.spacing(0.5),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      marginTop: 0
    }
  },
  subheader: {
    color: theme.palette.text.secondary,
    fontStyle: 'italic',
    marginBottom: theme.spacing(2)
  },
  description: {
    marginBottom: theme.spacing(2)
  },
  bulletPoints: {
    margin: 0,
    padding: `0 0 0 ${theme.spacing(2)}px`,
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    '& li': {
      marginBottom: theme.spacing(1),
      wordBreak: 'break-word',
      '&:last-child': {
        marginBottom: 0
      },
      '& strong': {
        fontWeight: 600
      }
    }
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginTop: theme.spacing(2)
  },
  chip: {
    '&.MuiChip-root': {
      borderRadius: 10
    }
  }
}));

export default styles;