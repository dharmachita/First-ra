import Item from '../components/Item'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import productos from '../utils/productos.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          {productos.map((producto) => (
            <Item 
                title={producto.titulo}
                img={producto.url}
                price={producto.precio}
                alt={producto.alt} 
                stock={producto.stock}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
