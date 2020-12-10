import Grid from '@material-ui/core/Grid';
import Categories from './Categories';
import ShopCart from '../components/ShoppingCart';

export default function NavBar(){
    return(
        <>
            <Grid container spacing={0} className="logo-bar">
                <Grid variant="h1" item xs={3}></Grid>
                <Grid variant="h1" item xs={6} className="logo-center">
                    Me gusta el arte
                </Grid>
                <Grid variant="h1" item xs={3} className="cart-bar">
                    <ShopCart />   
                </Grid>  
            </Grid>
            <Categories />
        </>
    )
}