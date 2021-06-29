import React, { Component } from 'react';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0
         }
    }
    render() { 
        return ( 
            <div>
                this is the count:{this.state.count}
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>INCREMENT</button>
                <button onClick={()=>this.props.onDelete(this.props.id)}>DELETE</button>
                </div>
         );
    }
}
 
export default Counter;