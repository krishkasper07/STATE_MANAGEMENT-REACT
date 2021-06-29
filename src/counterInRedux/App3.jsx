import { connect } from 'react-redux';
import Counter from './Counter3';
 const App =(props)=> {
   
        return ( 
            <>
            <button onClick={props.addCounter}>ADD COUNTER</button>
            <br/>
             {props.counter.map(el=><Counter key={el.id} id={el.id}/>)}
            </>
         );
    
}

function mapStateToProps(store){
  return{
      counter:store.counters
  }
}

function mapDispatchToProps(dispatch){
    return{
         addCounter: function(){
             dispatch({type:'ADD_COUNTER'})
             
         }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps) ( App);