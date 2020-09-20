import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Paperly from './paper'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Layout() {
  const classes = useStyles();



  return (
    <div className={classes.root}>
      <Grid container spacing={12} className="container-grid">
          <Paperly className="cardProduct"/>
        </Grid>
    </div>
  );
}