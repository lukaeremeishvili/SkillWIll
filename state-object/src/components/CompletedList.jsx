import React from "react";

const CompletedList = ({ tasks, onDragEnd }) => {
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
    e.dataTransfer.setData("source", "completed");
  };

  const handleDrop = (e) => {
    const taskId = parseInt(e.dataTransfer.getData("taskId"));
    const source = e.dataTransfer.getData("source");
    onDragEnd(taskId, source, "completed");
  };

  return (
    <div
      className="list"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2>Completed</h2>
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

export default CompletedList;



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
