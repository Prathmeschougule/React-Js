import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../Features/Todo/TodoSlice';

// This Is ReacT Redux

function AddTodo({ selectedTodo, clearSelectedTodo }) {
    const [input, setInput] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);

    const dispatch = useDispatch();

    // Update the input field when a todo is selected for editing
    useEffect(() => {
        if (selectedTodo) {
            setInput(selectedTodo.text);
            setIsUpdating(true);
        }
    }, [selectedTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim() === '') {
            alert('Please enter a valid todo');
            return;
        }

        if (isUpdating) {
            // Dispatch update action
            dispatch(updateTodo({ id: selectedTodo.id, newText: input }));
            setIsUpdating(false);
            clearSelectedTodo();
        } else {
            // Dispatch add action
            dispatch(addTodo(input));
        }

        setInput(''); // Clear input field
    };

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className={`rounded-r-lg px-3 py-1 ${
                    isUpdating ? 'bg-blue-600' : 'bg-green-600'
                } text-white shrink-0`}
            >
                {isUpdating ? 'Update' : 'Add'}
            </button>
        </form>
    );
}

export default AddTodo;
