import React from "react";

const TodoList = React.memo(({ tasks, onCompleteTask, onRemoveTask }) => {
  return (
    <div className="list">
      <h2>To-Do Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="task-text">{task.task}</div>
            <div className="task-id">ID: {task.id}</div>
            <div className="buttons-container">
              <button onClick={() => onCompleteTask(task.id)}>Complete</button>
              <button onClick={() => onRemoveTask(task.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

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
  
})
export default TodoList;
