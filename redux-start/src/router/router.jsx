import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoInput from '../pages/ToDoInput';
import TodoList from '../pages/ToDoList';
import DoneList from '../pages/DoneList';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoInput />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/donelist" element={<DoneList />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
