import React from "react";
import useFetchTodos from "../hooks/queries/useFetchTodos";
import TodoList from "../components/todo/TodoList";

const ToDosPage: React.FC = () => {
  const { data: todos, error, isLoading } = useFetchTodos();

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error.message}</h3>;

  return <TodoList todos={todos} />;
};

export default ToDosPage;
