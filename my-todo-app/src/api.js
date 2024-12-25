import axios from "axios";

const BASE_URL = "https://crudapi.co.uk/api/v1/task";
const API_KEY = "0SFV5vX3x6ZkbHDlfG8TrvknaiXQlvPZh4yW_fvEy593519OBw";

export const fetchTodos = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error.response?.data || error.message);
    throw error;
  }
};

export const addTodo = async (name) => {
  try {
    const response = await axios.post(
      BASE_URL,
      [{ title: name, completed: false }],
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data[0];
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
    const response = await axios.put(
      `${BASE_URL}/${id}`,
      { title: updatedData.name, completed: updatedData.isCompleted },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating todo:", error.response?.data || error.message);
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
    console.error("Error deleting todo:", error.response?.data || error.message);
    throw error;
  }
};