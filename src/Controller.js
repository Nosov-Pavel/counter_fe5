import React, {useState} from "react";
import './App.css';

function Controller(props) {


    return (
        <div>
            <button onClick={props.counterReset}>reset to init</button>
            <button onClick={props.addCounter}>Add new</button>
            <input type="text" onChange={} value={4}/>
            <hr/>
        </div>
    );
}
export default Controller;
