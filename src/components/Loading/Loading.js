import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import * as S from './styled'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <S.LoadingContainer>
      <div className={classes.root}>
        <CircularProgress />
      </div>
    </S.LoadingContainer>
  );
}