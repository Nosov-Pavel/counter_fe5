import React from 'react';
import './App.css';

function CounterList(props){

    return(
        <div>
            {props.list.map((el, i) => <div key={Math.random()}>
                <button onClick={() => props.counterChange(i,-1)}>-1</button>
                <button onClick={() => props.counterChange(i,-2)}>-2</button>
                <button onClick={() => props.counterChange(i,-3)}>-3</button>
                {el}
                <button onClick={() => props.counterChange(i,1)}>+1</button>
                <button onClick={() => props.counterChange(i,2)}>+2</button>
                <button onClick={() => props.counterChange(i,3)}>+3</button>
                <button onClick={() => props.deleteCounter(i)}>delete</button>
            </div>)}


        </div>


    );
}

export default CounterList;