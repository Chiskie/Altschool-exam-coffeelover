import React, {useState}from 'react';
import './App.css';
import {SiCoffeescript} from "react-icons/si"
import coffeloverImage from './images/coffeelover.jpg';
import useActions from './utils/useActions';



function App() {

  const [state, dispatch, useState] = useActions();

  return (
    <>
    <div className="logo">
      <h1>CoffeeLover</h1>
    </div>

    
    <div className="container">

      Buy Coffee <SiCoffeescript/>: {state.count}
      <br/>

    <div className='buttons'>
    <button onClick={() => dispatch({type: 'increment'})}>+</button>

      <button onClick={() => dispatch({type: 'decrement'})}>-</button>

      <button onClick = {() => dispatch({type: 'reset'})}>Reset</button> 

      <button onClick = {() => dispatch({type: 'setValue', value: 10})}>Set Value</button>
      </div>
      
      </div>
    </>
  )
}

export default App;
