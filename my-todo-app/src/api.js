import axios from "axios";


// 0SFV5vX3x6ZkbHDlfG8TrvknaiXQlvPZh4yW_fvEy593519OBw   <- API_KEY  was moved to env file, which is in gitignore
// so put it here to view the task 

const BASE_URL = "https://crudapi.co.uk/api/v1/task";
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchTodos = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    return response.data || [];
  } catch (error) {
    console.error(
      "Error fetching todos:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchTodoById = async (id) => {
  if (!id) {
    console.error("Error: Missing task ID");
    return;
  }
  try {
    const response = await axios.get(`${BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    return flattenTask(response.data);
  } catch (error) {
    console.error(
      "Error fetching todo by ID:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const addTodo = async (newTask) => {
  try {
    const taskToSend = {
      title: newTask.title,
      completed: newTask.completed,
      dueDate: newTask.dueDate,
      info: newTask.info,
      username: newTask.username,
    };

    const response = await axios.post(BASE_URL, [taskToSend], {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const taskFromResponse = response.data.items[0];
    return flattenTask(taskFromResponse);
  } catch (error) {
    console.error("Error adding todo:", error.response?.data || error.message);
    throw error;
  }
};

export const updateTodo = async (id, updatedData) => {
  if (!id) {
    console.error("Error: Missing task ID");
    return;
  }
  try {
    const taskData = {
      title: updatedData.title,
      completed: updatedData.completed,
      username: updatedData.username,
      dueDate: updatedData.dueDate,
      info: updatedData.info,
    };

    const response = await axios.put(`${BASE_URL}/${id}`, taskData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    return flattenTask(response.data);
  } catch (error) {
    console.error(
      "Error updating todo:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const deleteTodo = async (id) => {
  if (!id) {
    console.error("Error: Missing task ID");
    return;
  }
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error deleting todo:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const flattenTask = (task) => {
  if (!task || !task.title) {
    console.error("Error: Missing title in task data.");
    return {};
  }

  return {
    title: task.title,
    completed: task.completed,
    dueDate: task.dueDate,
    info: task.info,
    username: task.username,
    id: task._uuid,
    createdAt: task._created,
    modifiedAt: task._modified,
  };
};
