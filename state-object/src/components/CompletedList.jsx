import React from "react";

function CompletedList({ tasks, onRemove, onRevert }) {
  return (
    <div className="list">
      <h2>Completed Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="task-text">
              {task.task} (ID: {task.id})
            </div>
            <div className="buttons-container">
              <button onClick={() => onRevert(task.id)}>Revert</button>
              <button onClick={() => onRemove(task.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompletedList;
