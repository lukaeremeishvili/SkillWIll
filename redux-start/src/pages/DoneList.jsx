import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDone, deleteTodo } from '../store/todoSlice';
import { Link } from 'react-router-dom';

const DoneList = () => {
  const doneTodos = useSelector((state) => state.todos.filter((todo) => todo.done));
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Done List</h2>
      <ul>
        {doneTodos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => dispatch(toggleDone(todo.id))}>Undo</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <Link to="/">
          <button>Add Todo</button>
        </Link>
        <Link to="/todolist">
          <button>View Todo List</button>
        </Link>
      </div>
    </div>
  );
};

export default DoneList;
