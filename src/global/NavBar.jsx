import Grid from '@material-ui/core/Grid';
import Categories from './Categories'

export default function NavBar(){
    return(
        <>
            <Grid container spacing={3}className="logo-bar">
                <Grid variant="h1" item xs>
                    Me gusta el arte
                </Grid>   
            </Grid>
            <Categories />
        </>
    )
}