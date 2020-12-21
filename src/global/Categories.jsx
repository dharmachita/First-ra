import categories from '../utils/categories.json';
import '../styles/main.css';
import Grid from '@material-ui/core/Grid';


export default function Categories(){
    return (
        <Grid container spacing={0} className='medium'>
            {categories.map((category,index)=>{
                return (<Grid key={index} item xs><a className="cat-item" href={category.url}>{category.cat}</a></Grid>);    
                })
            }    
        </Grid>
    )
}
