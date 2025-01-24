import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../slices/tasksSlice";

function TodoForm({ initialData, onBack }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(initialData ? initialData.title : "");
  const [username, setUsername] = useState(
    initialData ? initialData.username : ""
  );
  const [completed, setCompleted] = useState(
    initialData ? initialData.completed : false
  );
  const [dueDate, setDueDate] = useState(
    initialData ? initialData.dueDate : ""
  );
  const [info, setInfo] = useState(initialData ? initialData.info : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      title,
      username,
      completed,
      dueDate,
      info,
    };

    if (initialData && initialData.id) {
      dispatch(updateTask({ id: initialData.id, updatedData: updatedTask }));
    } else {
      dispatch(addTask(updatedTask));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
      <div>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onBack}>
          Back
        </button>
      </div>
    </form>
  );
}

TodoForm.propTypes = {
  initialData: PropTypes.object,
  onBack: PropTypes.func.isRequired,
};

export default TodoForm;
