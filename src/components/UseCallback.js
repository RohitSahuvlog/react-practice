import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

// The useCallback hook in React is used to memoize callback functions, which helps to optimize performance by preventing unnecessary re-creations of functions. This is particularly useful when you pass functions to child components, as it prevents them from re-rendering unless dependencies change.

const CallBackComponent = () => {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div style={{ padding: '10px', border: '1px solid black' }}>
            <p style={{ color: 'red' }}>Count: {count}</p>
            <ChildComponent onClick={handleClick} />
            <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => setOtherState(otherState + 1)}>{otherState}Update Other State</button>
        </div>
    );
};

export default CallBackComponent;
