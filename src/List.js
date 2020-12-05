import React, {useState} from "react";


function List() {
    const [noute, setNoute] = useState('Apple')
    const setNewNoute = () => {

        setNoute('newNoute')
    }
    const onInputChange = (event) => {
        console.log()
        setNoute(event.target.value)
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
