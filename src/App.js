import React, {useState} from "react";
import './App.css';
import List from "./List";


function App() {
    const [list, setList] = useState([
        {value: 0, id: 1, numberOfButtons: [1]},
        {value: 1, id: 2, numberOfButtons: [1, 2, 3, 4, 5]},
        {value: 2, id: 3, numberOfButtons: [1, 2, 3]},
    ])
    const [inputValue, setInputValue] = useState(0);
    const [number, setNumber] = useState(0);


    const addButton = () => {
        const newButtons = [];
        for (let i = 1; i <= number; i++) {
            newButtons.push(i)
        }


        const newCounter = {
            value:inputValue,
            id: Math.random(),
            numberOfButtons: newButtons,
        }

        const newList = [...list, newCounter ];
        setList(newList);
        setInputValue(0);
    }
    const counterPlus = (id, value) => {
        const newList = list.map(el=>{
            if (el.id === id) {
                //return {value: el.value+1, id: el.id}
                return {...el, value: el.value + value}
            }
            return el
        })

        setList(newList)
    }

    return (
        <div>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(+e.target.value)}/>
            <input type="text" value={number} onChange={(e)=> setNumber(+e.target.value)}/>
            <button onClick={addButton}>create</button>
            <hr/>
            {list.map(elem =>
            <div key={elem.id}>
                {elem.numberOfButtons.map(el => <button onClick={()=> counterPlus(elem.id, -el)}>{-el}</button>)}
                {elem.value}
                {elem.numberOfButtons.map(el => <button onClick={()=> counterPlus(elem.id, el)}>{el}</button>)}
            </div>)}
            <List/>
        </div>
    );
}
export default App;
