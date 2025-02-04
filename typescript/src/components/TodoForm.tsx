import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../store/taskSlice";
import { AppDispatch } from "../store";

interface TodoFormProps {
  initialData?: {
    id: string;
    title: string;
    username: string;
    completed: boolean;
    dueDate: string;
    info: string;
  };
  onBack: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ initialData, onBack }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState<string>(
    initialData ? initialData.title : ""
  );
  const [username, setUsername] = useState<string>(
    initialData ? initialData.username : ""
  );
  const [completed, setCompleted] = useState<boolean>(
    initialData ? initialData.completed : false
  );
  const [dueDate, setDueDate] = useState<string>(
    initialData ? initialData.dueDate : ""
  );
  const [info, setInfo] = useState<string>(initialData ? initialData.info : "");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const taskData = {
      title,
      username,
      completed,
      dueDate,
      info,
    };

    if (initialData && initialData.id) {
      dispatch(
        updateTask({
          id: initialData.id,
          updatedData: { ...taskData, id: initialData.id },
        })
      );
    } else {
      dispatch(addTask(taskData));
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
};

export default TodoForm;
