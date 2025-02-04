import React, { useState, useEffect, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskById, updateTask } from "../store/taskSlice";
import { RootState, AppDispatch } from "../store";
import { Todo } from "../store/taskSlice";

const EditTaskPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  
  const task = useSelector((state: RootState) =>
    state.tasks.tasks.find((task: Todo) => task.id === id)
  );


  const [taskName, setTaskName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [dueDate, setDueDate] = useState<string>("");
  const [info, setInfo] = useState<string>("");

  useEffect(() => {
    const fetchTask = async () => {
      if (!id) return;
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) {
      console.error("Task ID is missing");
      return;
    }

    const updatedTaskData: Todo = {
      id: id,
      title: taskName,
      username,
      completed,
      dueDate,
      info,
    };

    try {

      await dispatch(
        updateTask({ id: id, updatedData: updatedTaskData })
      ).unwrap();
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
};

export default EditTaskPage;
