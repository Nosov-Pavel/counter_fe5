import React, {useState} from "react";
import './App.css';


function App() {
    const [list, setList] = useState([
        {value: 0, id: 1},
        {value: 1, id: 2},
        {value: 2, id: 3},
    ])

    const addButton = () => {
        const newList = [...list, 1];
        setList(newList);
    }



    return (
        <div>
            <button onClick={addButton}>create</button>
            <hr/>
            {list.map(el =>
            <div key={el.id}>
                <button>-</button>
                {el.value}
                <button>+</button>
            </div>)}
        </div>
    );
}
export default App;
