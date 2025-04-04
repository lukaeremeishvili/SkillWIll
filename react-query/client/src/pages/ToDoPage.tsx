import React from 'react'
import useFetchToDo from '../hooks/queries/todo/useFetchToDo'
import { useParams } from 'react-router-dom';
import TodoItem from '../components/todo/TodoItem';
import { ITodo } from '../interfaces/todo.interface';

const ToDoPage:React.FC = () => {
const {id} = useParams()
  const {data, error, isLoading} = useFetchToDo(id!)
  const {id:todoId, title, isCompleted, description} = data || ({} as ITodo);

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error.message}</h3>;

  return (
    <div><TodoItem id={todoId} title={title} completed={isCompleted} description={description}/></div>
  )
}

export default ToDoPage