import React from "react";
import { useParams } from "react-router-dom";
import useFetchToDo from "../hooks/queries/todo/useFetchToDo";
import UpdateTodo from "../components/todo/UpdateTodo";


const UpdateTodoPage: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetchToDo(id!);

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error.message}</h3>;
  if (!data) return <h3>Todo not found</h3>;
  
  return (
    <div>
      <UpdateTodo todo={{ id: data.id, title: data.title, description: data.description }} />
    </div>
  );
};

export default UpdateTodoPage;
