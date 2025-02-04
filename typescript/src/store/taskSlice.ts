import { AxiosError } from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  fetchTodoById,
} from "../api";

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


interface TasksState {
  tasks: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
};


export const fetchTasks = createAsyncThunk<Todo[]>("tasks/fetchTasks", async () => {
  const response = await fetchTodos();
  return response.items;
});

export const fetchTaskById = createAsyncThunk<Todo, string, { rejectValue: string }>(
  "tasks/fetchTaskById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchTodoById(id);
      return response;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.message || "Failed to fetch task by ID");
      } else {
        return rejectWithValue("Failed to fetch task by ID");
      }
    }
  }
);
export const addTask = createAsyncThunk<Todo, Omit<Todo, "id" | "_uuid">>(
  "tasks/addTask",
  async (newTask) => {
    const response = await addTodo(newTask);
    return response;
  }
);


export const updateTask = createAsyncThunk<Todo, { id: string; updatedData: Todo }>(
  "tasks/updateTask",
  async ({ id, updatedData }) => {
    const response = await updateTodo(id, updatedData);
    return response;
  }
);

export const deleteTask = createAsyncThunk<string, string>(
  "tasks/deleteTask",
  async (id, { rejectWithValue }) => {
    try {
      await deleteTodo(id);
      return id;  
    } catch (error) {
      console.error("Error deleting task:", error);
      return rejectWithValue("Failed to delete task");
    }
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tasks";
      })
      .addCase(fetchTaskById.fulfilled, (state, action: PayloadAction<Todo>) => {
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        } else {
          state.tasks.push(action.payload);
        }
      })
      .addCase(addTask.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<Todo>) => {
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<string>) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;

