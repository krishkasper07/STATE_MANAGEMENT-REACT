import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './counterInfunction/App2'
import App1 from './counterInclass/App1'
import { createStore } from 'redux';
import App from './counterInRedux/App3'
import  counterReducer  from './counterInRedux/Store';
import { Provider } from 'react-redux';

const store=createStore(counterReducer);

ReactDOM.render(
  <React.StrictMode><>
  <div class="counter">
      <h1> state management using class Component</h1>
    <App1/>
    </div>
    <div class="counter">
      <h1> state management using functional Component</h1>
    <App2/>
    </div> 
    <div className='counter'>
    <h1> state management using REDUX</h1>
    <Provider store={store}>
      <App/>
      </Provider>
      </div>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals