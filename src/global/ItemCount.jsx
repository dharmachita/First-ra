import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    counter: {
      marginLeft:"18%",
      marginRight:"18%",
      display:"inline" 
    }
  }));


export default function AddRemoveButton(props){
    const {stock, init} = props;
    const [count, setCount] = useState(parseInt(init));
    const classes = useStyles();


    return(
    <>
        <button disabled={count === parseInt(init)} onClick={()=>setCount(count>1?count-1:count)}>-</button>
        <div className={classes.counter}>{count}</div>
        <button disabled={count === stock} onClick={()=>setCount(count<stock?count+1:count)}>+</button>
    </>
    )
}