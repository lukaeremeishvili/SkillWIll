import React from "react";

const InProgressList = ({ tasks, onDragEnd }) => {
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
    e.dataTransfer.setData("source", "inProgress");
  };

  const handleDrop = (e, destination) => {
    const taskId = parseInt(e.dataTransfer.getData("taskId"), 10);
    const source = e.dataTransfer.getData("source");
    onDragEnd(taskId, source, destination);
  };

  return (
    <div
      className="list"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleDrop(e, "inProgress")}
    >
      <h2>In Progress</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            draggable
            onDragStart={(e) => handleDragStart(e, task.id)}
          >
            {task.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InProgressList;
