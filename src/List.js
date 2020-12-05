import React, {useState} from "react";


function List() {
    const [noute, setNoute] = useState('Apple')
    const [input, setInput] = useState('')
    const setNewNoute = () => {
        setNoute(input)
    }
    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <div>
            {noute}
            <input type="text" onChange={onInputChange}/>
            <button onClick={setNewNoute}>set</button>

        </div>
    );
}

export default List;
