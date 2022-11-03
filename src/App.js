import React, {useState}from 'react';
import './App.css';
import {SiCoffeescript} from "react-icons/si"
import useActions from './utils/useActions';
import {IconContext} from 'react-icons';
import ErrorFallback from './components/ErrorFallback';
// import {ErrorBoundary} from 'react-error-boundary';



function App() {

  const [state, dispatch, useState] = useActions();

  return (
    <>
      <div className='main'>
        <div className="title">
          <h1>CoffeeLover</h1>
        </div>
        <div className='counter'>
          <h2>{state.count}</h2>
        </div>
        <div className='button-tabs'>
          <div role={'button'} className='button-actions' onClick={() => dispatch({type: 'increment'})}>
            <i className="fa fa-plus"></i>
          </div>
          <div role={'button'} className='button-actions' onClick={() => dispatch({type: 'decrement'})}>
            <i className="fa fa-minus"></i>
          </div>
          <div role={'button'} className='button-actions' onClick = {() => dispatch({type: 'reset'})}>
            <i className="fa fa-refresh"></i>
          </div> 
          <div className='counter-input'>
            <input type="number" value={state.count} onChange={(e) => dispatch({type: 'setValue', value: Number(e.target.value)})}/>
          </div>
        </div>
      </div>  
    </>
  )
}

export default App;
