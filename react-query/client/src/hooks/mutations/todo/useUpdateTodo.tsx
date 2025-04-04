import { useMutation } from "@tanstack/react-query";
import updateTodo from "../../../api/todo/updateTodo";
import { ITodo } from "../../../interfaces/todo.interface";
import { client } from "../../../react-query/client";

const useUpdateTodo = () => {
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<ITodo> }) =>
      updateTodo(id, data),
    onError: (err) => console.log(err),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export default useUpdateTodo;
