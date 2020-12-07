import categories from '../utils/categories.json';
import '../styles/main.css';
import Grid from '@material-ui/core/Grid'; 

export default function Categories(){
    return (
        <Grid container spacing={3} className='medium'>
            {categories.map(function(category){
                return (<Grid item xs>{category.cat}</Grid>);    
                })
            }    
        </Grid>
    )
}
