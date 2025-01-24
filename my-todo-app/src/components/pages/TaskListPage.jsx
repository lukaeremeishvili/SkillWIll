import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTasks, deleteTask } from "../../slices/tasksSlice";
import TodoItem from "../TodoItem";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translation";

function TaskListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const tasklist = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDelete = async (uuid) => {
    try {
      await dispatch(deleteTask(uuid)).unwrap();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="container">
      <h1>{translations[language].taskList}</h1>
      <button className="btn btn-primary" onClick={() => navigate("/add-task")}>
        {translations[language].addTask}
      </button>
      <TodoList
        tasklist={tasklist}
        onDelete={handleDelete}
        onEdit={(uuid) => navigate(`/edit-task/${uuid}`)}
        translations={translations[language]}
      />
    </div>
  );
}

function TodoList({ tasklist, onDelete, onEdit, translations }) {
  if (!tasklist || tasklist.length === 0) {
    return <p>{translations.noTasks}</p>;
  }

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>{translations.title}</th>
          <th>{translations.username}</th>
          <th>{translations.status}</th>
          <th>{translations.deadline}</th>
          <th>{translations.info}</th>
          <th>{translations.edit}</th>
          <th>{translations.delete}</th>
        </tr>
      </thead>
      <tbody>
        {tasklist.map((task) => (
          <TodoItem
            key={task.id || task._uuid}
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
  translations: PropTypes.object.isRequired,
};

export default TaskListPage;
