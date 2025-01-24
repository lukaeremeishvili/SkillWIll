import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  fetchTodoById,
} from "../api";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetchTodos();
  return response.items;
});

export const fetchTaskById = createAsyncThunk(
  "tasks/fetchTaskById",
  async (id) => {
    const response = await fetchTodoById(id);
    return response;
  }
);

export const addTask = createAsyncThunk("tasks/addTask", async (newTask) => {
  const response = await addTodo(newTask);
  return response;
});

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, updatedData }) => {
    const response = await updateTodo(id, updatedData);
    return response;
  }
);

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id) => {
  await deleteTodo(id);
  return id;
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => action.payload)
      .addCase(fetchTaskById.fulfilled, (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        } else {
          state.push(action.payload);
        }
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        state[index] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        return state.filter((task) => task.id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;
