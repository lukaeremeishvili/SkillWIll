import React from "react";

const TodoList = ({ tasks, onDragEnd }) => {
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
    e.dataTransfer.setData("source", "todo");
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
      onDrop={(e) => handleDrop(e, "todo")}
    >
      <h2>Todo</h2>
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

export default TodoList;


  /* class TodoList extends React.Component {
    render() {
      return (
        <div className="list">
          <h2>To-Do Tasks</h2>
          <ul>
            {this.props.tasks.map((task) => (
              <li key={task.id}>
                <div className="task-text">{task.task}</div>
                <div className="buttons-container">
                  <button onClick={() => this.props.onCompleteTask(task.id)}>
                    Complete
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
  