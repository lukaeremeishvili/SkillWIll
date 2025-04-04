import React from "react";
import { useNavigate } from "react-router-dom";
import useDeleteTodo from "../../hooks/mutations/todo/useDeleteTodo";

interface TodoItemProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  completed,
  description,
}) => {
  const { mutate } = useDeleteTodo();
  const navigate = useNavigate();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    mutate(id);
  };

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate(`/todos/${id}/edit`); 
  };

  return (
    <div
      onClick={() => navigate(`/todos/${id}`)}
      key={id}
      className="border border-gray-300 cursor-pointer relative p-10 m-10"
    >
      <h3>{title}</h3>
      <h3 className="text-orange-600">{completed ? "done" : "pending"}</h3>
      <p className="text-amber-800">{description}</p>

      <button
        onClick={handleEdit}
        className="absolute z-10 p-3 text-blue-800 bottom-2 right-2 border border-gray-300 cursor-pointer hover:bg-blue-800 hover:text-white rounded-full transition-all duration-200 ease-in-out"
      >
        Edit
      </button>
      <button
        onClick={(e) => handleDelete(e, id)}
        className="absolute z-10 p-3 text-red-800 top-2 right-2 border border-gray-300 cursor-pointer hover:bg-red-800 hover:text-white rounded-full transition-all duration-200 ease-in-out"
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
