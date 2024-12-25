import PropTypes from "prop-types";

function TodoItem({ task, onToggleCompletion, onDelete }) {
  return (
    <tr>
      <td>{task.title}</td>
      <td>
        {task.completed ? "Completed" : "In Progress"}
      </td>
      <td>
        <button onClick={() => onToggleCompletion(task._uuid, task.completed)}>
          {task.completed ? "Mark as In Progress" : "Mark as Completed"}
        </button>
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
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleCompletion: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};


export default TodoItem;
