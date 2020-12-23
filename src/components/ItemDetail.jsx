import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ItemCount from '../global/ItemCount';

export default function ItemDetail(props){

    const {img,titulo,descripcion,precio,stock,initVal} = props;
    return(
        <>
            <h1>{titulo}</h1>
            <Grid container justify="center" className="cont-desc">
                <Grid item className="cont-img" xs={4}>
                    <img src={img} alt=""/>
                </Grid>
                <Grid item className="cont-img"  xs={4}>
                    <p>{descripcion}</p>
                    <p className="price">Precio: {precio}</p>
                    <div><ItemCount  stock={stock} init={initVal}/></div>
                    <div className="button-desc"><Button variant="outlined" color="secondary" size="large">
                        <AddShoppingCartIcon />Agregar al Carrito
                    </Button></div>
                </Grid>                
            </Grid>
        </>
        
    )
}