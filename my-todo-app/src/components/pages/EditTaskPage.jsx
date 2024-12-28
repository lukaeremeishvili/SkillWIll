import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTodoById, updateTodo } from "../../api";

function EditTaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [taskName, setTaskName] = useState("");
  const [username, setUsername] = useState("");
  const [completed, setCompleted] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetchTodoById(id);
  
        if (response) {
          const { title, username, completed, dueDate, info } = response;
  
          const taskTitle = typeof title === 'string' ? title : title?.name?.name?.title || "No Title";
  
          setTaskName(taskTitle);
          setUsername(username);
          setCompleted(completed);
          setDueDate(dueDate);
          setInfo(info);
        }
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };
  
    fetchTask();
  }, [id]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const updatedTask = {
      completed,
      dueDate,
      info,
      title: taskName,
      username,
    };
  
    console.log("Updated Task:", updatedTask);
  
    try {
      await updateTodo(id, updatedTask);
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
          <textarea
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditTaskPage;
