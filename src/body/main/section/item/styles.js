// SectionItem/styles.js
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:last-child': {
      marginBottom: 0,
      paddingBottom: 0,
      borderBottom: 'none'
    }
  },
  headerWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(1)
  },
  title: {
    fontWeight: 600,
    flex: 1,
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
    whiteSpace: 'nowrap',
    marginLeft: theme.spacing(2)
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
    '& li': {
      marginBottom: theme.spacing(1),
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