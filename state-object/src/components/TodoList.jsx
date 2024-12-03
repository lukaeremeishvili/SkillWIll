import React from "react";

function TodoList({ tasks, onComplete }) {
  return (
    <div className="list">
      <h2>To Do Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task} (ID: {task.id})
            <button onClick={() => onComplete(task.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
