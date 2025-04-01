import React from "react";
import { ITodo } from "../../interfaces/todo.interface";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: ITodo[] | undefined;
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos?.map(({ id, title, completed }) => (
       <TodoItem key={id} id={id} title={title} completed= {completed} />
      ))}
    </div>
  );
};

export default TodoList;
