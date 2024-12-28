import PropTypes from "prop-types";

function TodoItem({ task, onDelete, onEdit }) {
  const renderTitle = () => {
    if (typeof task.title === "string") {
      return task.title;
    } else if (
      task.title &&
      typeof task.title === "object" &&
      task.title.title
    ) {
      return task.title.title;
    }
    return "No Title";
  };
  return (
    <tr>
      <td>{renderTitle()}</td>
      <td>{task.username}</td>
      <td>{task.completed ? "Completed" : "In Progress"}</td>
      <td>{task.dueDate}</td>
      <td>{task.info}</td>
      <td>
        <button onClick={() => onEdit(task._uuid)}>Edit</button>
      </td>
      <td>
        <button onClick={() => onDelete(task._uuid)}>Delete</button>
      </td>
    </tr>
  );
}

TodoItem.propTypes = {
  task: PropTypes.shape({
    _uuid: PropTypes.string.isRequired,
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool,
        dueDate: PropTypes.string,
        info: PropTypes.string,
        name: PropTypes.string,
      }),
    ]).isRequired,
    username: PropTypes.string,
    completed: PropTypes.bool.isRequired,
    dueDate: PropTypes.string,
    info: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
export default TodoItem;
