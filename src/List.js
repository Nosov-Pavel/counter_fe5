import React, {useState} from "react";


function List() {
    const [noute, setNoute] = useState('Apple')

    return (
        <div>
            {noute}
            <input type="text"/>
            <button></button>

        </div>
    );
}
export default List;
