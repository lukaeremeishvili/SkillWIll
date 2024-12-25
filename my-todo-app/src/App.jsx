import { useState, useEffect } from "react";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "./api";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './App.css';

const App = () => {
  const [tasklist, setTasklist] = useState([]);

  useEffect(() => {
    const loadTasklist = async () => {
      try {
        const data = await fetchTodos();
        if (data && Array.isArray(data.items)) {
          setTasklist(data.items);
        } else {
          console.error("Fetched data is not in expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    loadTasklist();
  }, []);

  const handleAdd = async (newTask) => {
    if (newTask.trim()) {
      try {
        const optimisticTask = {
          title: newTask,
          completed: false,
          _uuid: String(Date.now()),
        };
        setTasklist((prevTasks) => [optimisticTask, ...prevTasks]);

        const addedTask = await addTodo(newTask);
        if (addedTask && addedTask._uuid) {
          addedTask._uuid = String(addedTask._uuid);

          setTasklist((prevTasks) =>
            prevTasks.map((task) =>
              task._uuid === optimisticTask._uuid ? addedTask : task
            )
          );
        }
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  const toggleCompletion = async (uuid, completed) => {
    try {
      await updateTodo(uuid, { isCompleted: !completed });
      setTasklist((prevTasks) =>
        prevTasks.map((task) =>
          task._uuid === uuid ? { ...task, completed: !completed } : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = async (uuid) => {
    try {
      await deleteTodo(String(uuid));
      setTasklist((prevTasks) =>
        prevTasks.filter((task) => task._uuid !== uuid)
      );
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TodoForm onAdd={handleAdd} />
      <div className="lists-container">
        <div>
          <h2>In Progress</h2>
          <TodoList
            tasklist={tasklist.filter(task => !task.completed)}
            onToggleCompletion={toggleCompletion}
            onDelete={handleDelete}
          />
        </div>
        <div>
          <h2>Completed</h2>
          <TodoList
            tasklist={tasklist.filter(task => task.completed)}
            onToggleCompletion={toggleCompletion}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
