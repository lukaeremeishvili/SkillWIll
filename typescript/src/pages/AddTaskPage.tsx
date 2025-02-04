import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTask } from "../store/taskSlice";
import { AppDispatch } from "../store";

const AddTaskPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [dueDate, setDueDate] = useState<string>("");
  const [info, setInfo] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      title,
      completed,
      dueDate,
      info,
      username: name,
    };

    try {
      dispatch(addTask(newTask));
      navigate("/"); 
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            value={completed ? "Completed" : "In Progress"}
            onChange={(e) => setCompleted(e.target.value === "Completed")}
          >
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div>
          <label>Additional Info:</label>
          <textarea value={info} onChange={(e) => setInfo(e.target.value)} />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskPage;
