import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    counter: {
      marginLeft:"18%",
      marginRight:"18%",
      display:"inline" 
    }
  }));

export default function AddRemoveButton(){
    const [count, setCount] = useState(0);
    const classes = useStyles();

    return(
    <>
        <button onClick={()=>setCount(count>0?count-1:count)}>-</button>
        <div className={classes.counter}>{count}</div>
        <button onClick={()=>setCount(count+1)}>+</button>
    </>
    )
}