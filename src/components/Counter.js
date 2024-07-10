import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    function Counter() {
        console.log("beforecount", count);
        setCount(count + 1);
        console.log("aftercount", count);
    }

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <p style={{ fontSize: '16px', color: '#333' }}>You clicked {count} times</p>
            <button onClick={Counter} style={{ padding: '10px 20px', fontSize: '14px', cursor: 'pointer' }}>Click me</button>
        </div>
    );
};

export default Counter;

//  points
// Initialization
// const [state, setState] = useState(initialState),
// State Variables
// const [count, setCount] = useState(0),

// State Updater Function
// setCount(count + 1);
// Functional Updates
// setCount(prevCount => prevCount + 1);
// Initial State Function
// const [count, setCount] = useState(() => computeExpensiveInitialState())

// Asynchronous Nature: State updates in React are asynchronous. If you need to perform an action immediately after the state is updated, consider using the useEffect hook.