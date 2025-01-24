import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskById, updateTask } from "../../slices/tasksSlice";

function EditTaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === id)
  );

  const [taskName, setTaskName] = useState("");
  const [username, setUsername] = useState("");
  const [completed, setCompleted] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await dispatch(fetchTaskById(id)).unwrap();
        if (response) {
          const { title, username, completed, dueDate, info } = response;
          setTaskName(title);
          setUsername(username);
          setCompleted(completed);
          setDueDate(dueDate);
          setInfo(info);
        }
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    if (!task) {
      fetchTask();
    } else {
      const { title, username, completed, dueDate, info } = task;
      setTaskName(title);
      setUsername(username);
      setCompleted(completed);
      setDueDate(dueDate);
      setInfo(info);
    }
  }, [dispatch, id, task]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTask = {
      id,
      title: taskName,
      username,
      completed,
      dueDate,
      info,
    };

    try {
      await dispatch(updateTask(updatedTask)).unwrap();
      navigate("/");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Status</label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          <span>{completed ? "Completed" : "In Progress"}</span>
        </div>
        <div>
          <label>Deadline</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div>
          <label>Info</label>
          <textarea value={info} onChange={(e) => setInfo(e.target.value)} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditTaskPage;
