import ItemDetail from '../components/ItemDetail';
import {useEffect, useState} from 'react';
import productos from '../utils/productos.json';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ItemDetailContainer(props){
    
    const [producto,setProducto]=useState([]);
    const getItem = new Promise((res,rej)=>{
        setTimeout(()=>{
            var item = productos.filter(prod=>prod.id===parseInt(props.prodId)); 
            res(item);
        },1000)
    })

    useEffect(()=>{
        getItem
            .then(result=>{
                setProducto(result);
            })
            .catch(err=>console.log(err))
            //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   
    return(
        <>
            {
                !producto.length?
                <CircularProgress className="loader" color="secondary" />:
                (<ItemDetail
                    titulo={producto[0].titulo}
                    img={producto[0].bigImg}
                    descripcion={producto[0].descripcion}
                    precio={producto[0].precio}
                    stock={producto[0].stock}
                    initVal="1"
                />)               
            }     
        </>        
    )
}