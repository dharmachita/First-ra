import Fab from '@material-ui/core/Fab';
import CartIcon from '@material-ui/icons/ShoppingCart';


export default function ShoppingCart(){
    return(
        <>
            <Fab
                size="small"
            >
                <CartIcon /><span>0</span>
            </Fab>
        </>
    )
}