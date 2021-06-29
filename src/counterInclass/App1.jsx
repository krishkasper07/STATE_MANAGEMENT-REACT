import React, { Component } from 'react';
import Counter from './Counter1';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counters:[]
         }
    }
handleAddCounter=()=>{
    //we are copying the state counters array and Adding a id to it and store the value of it the 
     const copyOfCounter=[...this.state.counters,{id:this.state.counters.length+1}]
     console.log(copyOfCounter);
     this.setState({counters:copyOfCounter})
}
handleDeleteCounter=(id)=>{
    
    const filteredCounter=this.state.counters.filter(counter=> counter.id !==id);
    console.log(filteredCounter);
    this.setState({counters:filteredCounter})
}
    render() { 
        return ( 
            <>
            <button onClick={this.handleAddCounter}>ADD COUNTER</button>
             {this.state.counters.map(el=><Counter key={el.id} id={el.id} onDelete={this.handleDeleteCounter}/>)}
            </>
         );
    }
}
 
export default App;