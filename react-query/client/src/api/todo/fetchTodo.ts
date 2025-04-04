import $api from "../../http";

export default async function fetchTodo(id:string) {
    const res = await $api.get(`/todos/${id}`);
    return res.data;
}