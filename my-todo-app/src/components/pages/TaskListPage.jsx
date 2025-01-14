import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchTodos, deleteTodo } from "../../api";
import { useNavigate } from "react-router-dom";
import TodoItem from "../TodoItem";
import { useLanguage } from "../../contexts/LanguageContext"; 
import { translations } from "../../translation"; 

function TaskListPage() {
  const [tasklist, setTasklist] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const navigate = useNavigate();
  const { language } = useLanguage(); 

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
      <h1>{translations[language].taskList}</h1> 
      <button
        className="btn btn-primary"
        onClick={() => navigate("/add-task")}
      >
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
  translations: PropTypes.object.isRequired, 
};

export default TaskListPage;
