import React, {useState} from "react";


function List() {
    const [noute, setNoute] = useState('Apple')
    const setNewNoute = () => {
        setNoute('newNoute')
    }

    return (
        <div>
            {noute}
            <input type="text"/>
            <button onClick={setNewNoute}>set</button>

        </div>
    );
}
export default List;
