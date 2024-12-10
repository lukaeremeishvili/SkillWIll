import React from "react";

const CompletedList = React.memo(({ completedTasks, onRemoveTask, onUndoTask }) => {
  return (
    <div className="list">
      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>
            <div className="task-text">{task.task}</div>
            <div className="task-id">ID: {task.id}</div>
            <div className="buttons-container">
              <button onClick={() => onUndoTask(task.id)}>Undo</button>
              <button onClick={() => onRemoveTask(task.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  /* class CompletedList extends React.Component {
    render() {
      return (
        <div className="list">
          <h2>Completed Tasks</h2>
          <ul>
            {this.props.completedTasks.map((task) => (
              <li key={task.id}>
                <div className="task-text">{task.task}</div>
                <div className="buttons-container">
                  <button onClick={() => this.props.onUndoTask(task.id)}>
                    Undo
                  </button>
                  <button onClick={() => this.props.onRemoveTask(task.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  } */

});
export default CompletedList;
