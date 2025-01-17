import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import { Link } from 'react-router-dom';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput('');
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <div>
        <Link to="/todolist">
          <button>View Todo List</button>
        </Link>
        <Link to="/donelist">
          <button>View Done List</button>
        </Link>
      </div>
    </div>
  );
};

export default TodoInput;
