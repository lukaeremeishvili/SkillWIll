import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTasks, deleteTask } from "../store/taskSlice";
import TodoItem from "../components/TodoItem";
import { useLanguage } from "../store/UseLanguage";
import { translations } from "../store/translation";
import { RootState, AppDispatch } from "../store";
import { Todo } from "../store/taskSlice";

interface Translation {
  taskList: string;
  addTask: string;
  title: string;
  username: string;
  status: string;
  deadline: string;
  info: string;
  edit: string;
  delete: string;
  noTasks: string;
}

interface TodoListProps {
  tasklist: Todo[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  translations: Translation;
}

const TodoList: React.FC<TodoListProps> = ({
  tasklist,
  onDelete,
  onEdit,
  translations,
}) => {
  if (tasklist.length === 0) {
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
};

const TaskListPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const {
    tasks: tasklist,
    loading,
    error,
  } = useSelector((state: RootState) => state.tasks);
  console.log(tasklist);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    console.error("Error fetching tasks:", error);
    return <p>{translations[language].noTasks}</p>;
  }

  if (!Array.isArray(tasklist)) {
    console.error("tasklist is not an array:", tasklist);
    return <p>Something went wrong!</p>;
  }

  const handleDelete = async (uuid: string) => {
    try {
      await dispatch(deleteTask(uuid)).unwrap();
      dispatch(fetchTasks());
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
        onEdit={(uuid: string) => navigate(`/edit-task/${uuid}`)}
        translations={translations[language]}
      />
    </div>
  );
};

export default TaskListPage;
