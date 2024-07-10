import React, { useState, useMemo } from 'react';

const MemoComponent = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    // const calculation = useMemo(() => expensiveCalculation(count), [count]);
    const calculation = expensiveCalculation(count);


    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = () => {
        setTodos((t) => [...t, 'New Todo']);
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>My Todos</h2>
                {todos.map((todo, index) => (
                    <p key={index} style={{ marginBottom: '5px' }}>{todo}</p>
                ))}
                <button onClick={addTodo} style={{ padding: '10px 20px', fontSize: '16px' }}>Add Todo</button>
            </div>
            <hr style={{ margin: '20px 0' }} />
            <div style={{ marginTop: '20px' }}>
                <span style={{ fontSize: '20px', marginRight: '10px' }}>Count: {count}</span>
                <button onClick={increment} style={{ padding: '10px 20px', fontSize: '16px' }}>+</button>
                <h2 style={{ fontSize: '24px', margin: '20px 0 10px 0' }}>Expensive Calculation</h2>
                <span style={{ fontSize: '20px' }}>{calculation}</span>
            </div>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000; i++) {
        num += 1;
    }
    return num;
};

export default MemoComponent;
