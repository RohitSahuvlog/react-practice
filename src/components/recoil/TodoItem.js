import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from './atoms';

const TodoItem = ({ item }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = ({ target: { value } }) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        });
        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });
        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
                type="text"
                value={item.text}
                onChange={editItemText}
                style={{ marginRight: '8px' }}
            />
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
                style={{ marginRight: '8px' }}
            />
            <button
                onClick={deleteItem}
                style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px' }}
            >
                X
            </button>
        </div>
    );
};

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem;