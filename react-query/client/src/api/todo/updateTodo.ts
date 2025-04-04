import $api from "../../http";
import { ITodo } from "../../interfaces/todo.interface";

export default async function updateTodo(id: number, data: Partial<ITodo>) {
  const res = await $api.put(`/todos/${id}`, { todo: { ...data } });
  return res.data;
}
