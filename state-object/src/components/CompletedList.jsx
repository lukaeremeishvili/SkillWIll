import React, { PureComponent } from "react";

class CompletedList extends PureComponent {
  render() {
    return (
      <div className="list">
        <h2>Completed Tasks</h2>
        <ul>
          {this.props.tasks.map((task) => (
            <li key={task.id}>
              {task.task} (ID: {task.id})
              <div className="buttons-container">
                <button onClick={() => this.props.onRevert(task.id)}>Revert</button>
                <button onClick={() => this.props.onRemove(task.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CompletedList;
