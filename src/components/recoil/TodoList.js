import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from './atoms';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import TodoStats from './TodoStats';

const TodoList = () => {
    const todoList = useRecoilValue(todoListState);

    return (
        <div className="todo-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <header style={{ marginBottom: "20px" }}>
                <h1 style={{ fontSize: "24px" }}>Todo List</h1>
            </header>
            <main style={{ width: "100%", maxWidth: "600px" }}>
                <AddTodo />
                <div className="todo-list" style={{ marginTop: "20px" }}>
                    {todoList.map((todoItem) => (
                        <TodoItem key={todoItem.id} item={todoItem} />
                    ))}
                </div>
                <TodoStats />
            </main>
        </div>
    );
};

export default TodoList;