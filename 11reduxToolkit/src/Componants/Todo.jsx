import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Features/Todo/TodoSlice';
import AddTodo from './AddTodo';

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleUpdateClick = (todo) => {
        setSelectedTodo(todo); // Set the selected todo for updating
    };

    const clearSelectedTodo = () => {
        setSelectedTodo(null); // Clear the selected todo after update
    };

    return (
        <>
            <div className="mb-6">
                <AddTodo selectedTodo={selectedTodo} clearSelectedTodo={clearSelectedTodo} />
            </div>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className="text-white">{todo.text}</div>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            🗑️ Delete
                        </button>
                        <button
                            onClick={() => handleUpdateClick(todo)}
                            className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                        >
                            📝 Update
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
