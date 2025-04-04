import { useMutation } from "@tanstack/react-query"
import { ITodo } from "../../../interfaces/todo.interface"
import createTodo from "../../../api/todo/createTodo"
import { client } from "../../../react-query/client"

const useCreateTodo = () => {
    const result = useMutation({
        mutationFn: (data: Partial<ITodo>) => createTodo(data),
        onError: (err) => console.log(err),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["todos"] })
        },
    })
    return result
}

export default useCreateTodo