function counterReducer(state = {counters:[]},action){

             switch(action.type){
                           case 'ADD_COUNTER':{
                            const counterCopy=[...state.counters,{id:state.counters.length+1}];
                               return{ ...state,counters:counterCopy}
                           }
                               case 'DELETE_COUNTER':{
                                const filteredCounters=state.counters.filter(counter=> counter.id !==action.payload);
                                console.log(filteredCounters);
                               return{
                                   ...state,counters:filteredCounters
                               }}

                               default:
                                   return state;
             }
}

export default counterReducer;
