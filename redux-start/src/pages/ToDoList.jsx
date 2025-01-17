import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleDone } from '../store/todoSlice';
import { Link } from 'react-router-dom';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.filter((todo) => !todo.done));
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => dispatch(toggleDone(todo.id))}>Done</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <Link to="/">
          <button>Add Todo</button>
        </Link>
        <Link to="/donelist">
          <button>View Done List</button>
        </Link>
      </div>
    </div>
  );
};

export default TodoList;
