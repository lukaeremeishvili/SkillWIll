import $api from "../../http";

export default async function deleteTodo(id: number){
    const res = await $api.delete(`/todos/${id}`)
    return res.data
}