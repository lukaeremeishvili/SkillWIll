import React, { Fragment } from "react";
import useFetchTodos from "../hooks/queries/todo/useFetchTodos";
import TodoList from "../components/todo/TodoList";
import CreateTodo from "../components/todo/CreateTodo";

const ToDosPage: React.FC = () => {
  const { data: todos, error, isLoading } = useFetchTodos();

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error.message}</h3>;

  return (
    <Fragment>
      <TodoList todos={todos} />;
      <CreateTodo />
    </Fragment>
  );
};

export default ToDosPage;
