import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTask } from "../../slices/tasksSlice";

function AddTaskPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = async (e) => {
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
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
}

export default AddTaskPage;