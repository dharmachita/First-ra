import Item from '../components/Item'
import {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import api from '../utils/productos.json';
import CircularProgress from '@material-ui/core/CircularProgress';

//Estilos
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function ItemListContainer() {
  const classes = useStyles();
  const [productos,setProductos] = useState([]);
  const [error,setError] = useState();


  //Emulación de búsqueda de datos en API
  const buscarEnApi = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      true?resolve(api):reject("Error 500");
    }, 2000)
  })

  //Función asíncrona para capturar la llamada a la API 
  //Usando async/await
  /*
  const getProducto = async ()=>{
    try{
      const result = await buscarEnApi;
      setProductos(result);
    }catch(err){
      console.error(err);
      setError("Lo sentimos, no hemos podido cargar los productos :( ");
    }
  }
  */


  //useEffect para ejecutar la llamada cuando se monta el componente
  useEffect(()=>{
    buscarEnApi
    .then(result=>{
      setProductos(result);
    })
    .catch((err)=>{
      console.error(err);
      setError("Lo sentimos, no hemos podido cargar los productos :( ");
    })
    //getProducto();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          {
            error?<h3>{error}</h3>:
              (!productos.length?
              <CircularProgress className="loader" color="secondary" />:             
              productos.map((producto, index) => (
                <Item 
                    key={index}
                    title={producto.titulo}
                    img={producto.url}
                    price={producto.precio}
                    alt={producto.alt} 
                    stock={producto.stock}
                />
              )))
          }
        </Grid>
      </Grid>
    </Grid>
  );
}
