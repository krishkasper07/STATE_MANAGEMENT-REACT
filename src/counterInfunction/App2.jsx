import Counter from './Counter2';
import { useState } from "react";
const App =()=> {
    const[counter,setCounter]=useState([])

function handleAddCounter(){
    //we are copying the state counters array and Adding a id to it and store the value of it the 
     const copyOfCounter=[...counter,{id:counter.length+1}]
     console.log(copyOfCounter);
     setCounter(copyOfCounter);
}
 function handleDeleteCounter(id){
    
    const filteredCounter=counter.filter(counter=> counter.id !==id);
    console.log(filteredCounter);
    setCounter(filteredCounter)
}
   
        return ( 
            <>
            <button onClick={handleAddCounter}>ADD COUNTER</button>
            <br/>
             {counter.map(el=><Counter key={el.id} id={el.id} onDelete={handleDeleteCounter}/>)}
            </>
         );
    
}
 
export default App;