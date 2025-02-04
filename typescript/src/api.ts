import axios, { AxiosError } from "axios";

// 0SFV5vX3x6ZkbHDlfG8TrvknaiXQlvPZh4yW_fvEy593519OBw   <- API_KEY for CRUD API

export interface Todo {
  id: string;
  _uuid?: string;
  title: string;
  description?: string;
  completed: boolean;
  username: string;
  dueDate: string;
  info: string;
}


const BASE_URL = "https://crudapi.co.uk/api/v1/task";
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchTodos = async (): Promise<Todo[]> => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    return response.data || [];
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(
        "Error fetching todos:",
        error.response?.data || error.message
      );
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export const fetchTodoById = async (id: string): Promise<Todo> => {
  if (!id) {
    throw new Error("Error: Missing task ID");
  }
  try {
    const response = await axios.get(`${BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    if (!response.data) {
      throw new Error("Task not found");
    }
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error("Error fetching todo by ID:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export const addTodo = async (newTask: Omit<Todo, "id" | "_uuid">): Promise<Todo> => {
  try {
    const payload = [{
      title: newTask.title,
      description: newTask.description || "",
      completed: newTask.completed,
      dueDate: newTask.dueDate,
      info: newTask.info,
      username: newTask.username,
    }];

    console.log("Sending request with payload:", JSON.stringify(payload, null, 2));

    const response = await axios.post(BASE_URL, payload, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    console.log("Task added successfully:", response.data);
    return response.data.items[0];
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error("Error adding todo:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};


export const updateTodo = async (
  id: string,
  updatedData: Todo
): Promise<Todo> => {
  if (!id) {
    throw new Error("Missing task ID");
  }
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedData, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(
        "Error updating todo:",
        error.response?.data || error.message
      );
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export const deleteTodo = async (id: string): Promise<void> => {
  if (!id) {
    console.error("Error: Missing task ID");
    return;
  }
  try {
    await axios.delete(`${BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(
        "Error deleting todo:",
        error.response?.data || error.message
      );
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
