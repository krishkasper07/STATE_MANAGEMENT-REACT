import { useState } from "react";
import { connect } from "react-redux";

const Counter =(props)=> {

   const[count,setCount]=useState(0);

        return ( 
            <div>
                this is the count:{count}
                <button onClick={()=>{setCount(count+1)}}>INCREMENT</button>
                <button onClick={()=>props.deleteCounter(props.id)}>DELETE</button>
                </div>
         );
    
}

function matchDispatchToProps(dispatch){
       return{
           deleteCounter: function(id){
               dispatch({type:'DELETE_COUNTER',payload:id})
           }
       }
}
 
export default connect(null,matchDispatchToProps)( Counter);