import React, {useState} from "react";
import './App.css';


function App() {
    const [list, setList] = useState([
        {value: 0, id: 1},
        {value: 1, id: 2},
        {value: 2, id: 3},
    ])
    const [inputValue, setInputValue] = useState(0);

    const addButton = () => {
        const newList = [...list, {value:inputValue, id: Math.random()}];
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
            <button onClick={addButton}>create</button>
            <hr/>
            {list.map(el =>
            <div key={el.id}>
                <button onClick={() => counterPlus(el.id,  -1)}>-</button>
                {el.value}
                <button onClick={() => counterPlus(el.id,1)}>+</button>
            </div>)}
        </div>
    );
}
export default App;
