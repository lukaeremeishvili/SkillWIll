import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoList({ tasklist, onToggleCompletion, onDelete }) {
  if (!Array.isArray(tasklist)) {
    return <p>No tasks available.</p>;
  }

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Status</th>
          <th>Actions</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasklist.map((task) => (
          <TodoItem
            key={String(task._uuid)}  
            task={task}
            onToggleCompletion={onToggleCompletion}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

TodoList.propTypes = {
  tasklist: PropTypes.array.isRequired,
  onToggleCompletion: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoList;
