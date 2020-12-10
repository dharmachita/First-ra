import CircularProgress from '@material-ui/core/CircularProgress';

export default function ItemListContainer(){
    return(
        <>
            <h4>Cargando lista de productos...</h4>
            <CircularProgress />
        </>
    )
}