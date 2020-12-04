import React, {useState} from "react";


function List() {
    const [noute, setNoute] = useState('Apple')

    return (
        <div>
            {noute}

        </div>
    );
}
export default List;
