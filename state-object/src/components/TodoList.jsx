import React, { PureComponent } from "react";

class TodoList extends PureComponent {
  render() {
    return (
      <div className="list">
        <h2>To Do Tasks</h2>
        <ul>
          {this.props.tasks.map((task) => (
            <li key={task.id}>
              {task.task} (ID: {task.id})
              <button onClick={() => this.props.onComplete(task.id)}>Complete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
