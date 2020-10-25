import React, {useState} from "react";
import './App.css';


function App() {
    const [list, setList] = useState([
        {value: 0, id: 1, numberOfButtons: [1]},
        {value: 1, id: 2, numberOfButtons: [1, 2, 3, 4, 5]},
        {value: 2, id: 3, numberOfButtons: [1, 2, 3]},
    ])
    const [inputValue, setInputValue] = useState(0);
    const buttonsArr1 = [5, 4, 3, 2, 1];
    const buttonsArr2 = [1, 2, 3, 4, 5]

    const addButton = () => {
        const newCounter = {
            value:inputValue,
            id: Math.random(),
            numberOfButtons: [1]
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
            <button onClick={addButton}>create</button>
            <hr/>
            {list.map(elem =>
            <div key={elem.id}>
                {elem.numberOfButtons.map(el => <button onClick={()=> counterPlus(elem.id, -el)}>{-el}</button>)}
                {elem.value}
                {elem.numberOfButtons.map(el => <button onClick={()=> counterPlus(elem.id, el)}>{el}</button>)}
            </div>)}
        </div>
    );
}
export default App;
