import { useState } from "react";

const Counter =(props)=> {

   const[count,setCount]=useState(0);

        return ( 
            <div>
                this is the count:{count}
                <button onClick={()=>{setCount(count+1)}}>INCREMENT</button>
                <button onClick={()=>props.onDelete(props.id)}>DELETE</button>
                </div>
         );
    
}
 
export default Counter;