// bodyStyles.js
import { styled } from '@mui/material/styles';

export const BodyRoot = styled('div')(({ theme }) => ({
  flex: 1,
  width: '100%',
  maxWidth: '100%',
  // overflowX: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1)
  }
}));