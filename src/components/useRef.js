import React, { useEffect, useRef, useState } from 'react';

const UseRefComponent = () => {
    const [name, setName] = useState('');
    const inputRef = useRef();
    const prevNameRef = useRef('');

    const focusInput = () => {
        inputRef.current.focus();
    };

    useEffect(() => {
        prevNameRef.current = name;
    }, [name]);

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '24px', margin: '0 0 20px 0' }}>useRef Example</h2>
            <input ref={inputRef} value={name} style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }} onChange={(e) => setName(e.target.value)} />
            MY current name is <span style={{ fontSize: '20px', backgroundColor: 'yellow' }}> {name}</span> and my previous name is <span style={{ fontSize: '20px', backgroundColor: 'yellow' }}>{prevNameRef.current}</span>
            <button onClick={focusInput} style={{ padding: '10px 20px', fontSize: '16px' }}>Focus Input</button>

        </div>
    );
};

// explain
// useRef persist value between renders and updates the state of the input element when the focusInput function is called.

export default UseRefComponent;