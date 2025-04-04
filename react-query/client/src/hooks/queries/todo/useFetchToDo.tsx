import { useQuery } from "@tanstack/react-query"
import fetchTodo from "../../../api/todo/fetchTodo"
import { ITodo } from "../../../interfaces/todo.interface"

const useFetchToDo = (id:string) => {

    const result = useQuery<ITodo>({
        queryKey: ["todos"],
        queryFn: () => fetchTodo(id)
    })

  return result
}

export default useFetchToDo