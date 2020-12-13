import ItemCount from '../global/ItemCount';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
    color: {
      borderColor: "var(--light1)",
      height: "100%",
      width: "200px"
    },
    mar:{
        marginTop:"5%",
        marginBottom:"8%"
    }
  }));
  
export default function Item(props){
    const classes = useStyles();
    var initVal;
    var buttonText;
    var disabledC;
    if(props.stock<1){
      initVal = "0";
      buttonText = "Producto Agotado";
      disabledC = true;
    }
    else{
      initVal = "1";
      buttonText = "Agregar al carrito";
      disabledC = false;
    }
    return(
        <>
            <Grid item>
              <Paper className={classes.color}>
                    <div><h2>{props.title}</h2></div>
                    <div><img src={props.img} alt={props.alt} /></div>
                    <div><b>Precio:</b><span> {props.price}</span></div>
                    <div className={classes.mar}><ItemCount stock={props.stock} init={initVal} /></div>
                    <div><Button disabled={disabledC} variant="outlined" color="secondary" size="small">
                    <AddShoppingCartIcon />{buttonText}</Button>
                    </div>
              </Paper>
            </Grid>
        </>
    )
}
