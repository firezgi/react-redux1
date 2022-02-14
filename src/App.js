import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement, islo } from './actions'


function App() {
  const counter= useSelector(state=>state.counter);
  const islogged=useSelector(state=>state.isLogged); 
  const dispatch=useDispatch();
  console.log(islogged)
  return (
    <div >
      <p>counter:{counter}</p>
      <p>{islogged}</p>
      <button onClick={()=>dispatch(increment(10))}>+</button>
      <button onClick={()=>dispatch(decrement(5))}>-</button>
      <button onClick={()=>dispatch(islo())}>login</button>
      {islogged?<h3>The customer does logged in </h3>:'You have to log in to have access'}
      
    </div>
  );
}

export default App;
