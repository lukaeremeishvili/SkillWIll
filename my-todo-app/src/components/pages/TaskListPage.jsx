import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchTodos, deleteTodo } from "../../api";
import { useNavigate } from "react-router-dom";
import TodoItem from "../TodoItem";

function TaskListPage() {
  const [tasklist, setTasklist] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTasklist = async () => {
      try {
        const data = await fetchTodos();
        setTasklist(data.items || []);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    if (refetch) {
      loadTasklist();
      setRefetch(false);
    } else {
      loadTasklist();
    }
  }, [refetch]);

  const handleDelete = async (uuid) => {
    try {
      await deleteTodo(uuid);
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
      <button className="btn btn-primary" onClick={() => navigate("/add-task")}>
        Add Task
      </button>
      <TodoList
        tasklist={tasklist}
        onDelete={handleDelete}
        onEdit={(uuid) => navigate(`/edit-task/${uuid}`)}
      />
    </div>
  );
}

function TodoList({ tasklist, onDelete, onEdit }) {
  if (!tasklist || tasklist.length === 0) {
    return <p>No tasks available.</p>;
  }

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Username</th>
          <th>Status</th>
          <th>Deadline</th>
          <th>Info</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasklist.map((task) => (
          <TodoItem
            key={task._uuid}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
}

TodoList.propTypes = {
  tasklist: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TaskListPage;
