import React, { useState } from 'react';

export const Counter = () => {
    const [increase, setIncrease] = useState(0);

    function increasingNumber(){
        return setIncrease(increase+1);
    }

    return(
        <header>
            <h1>Counter element: {increase}</h1>
            <button onClick={increasingNumber}>Increment</button>
        </header>
    )
}

export default Counter;