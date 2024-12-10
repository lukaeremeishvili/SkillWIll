import React, { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask({ task });
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add</button>
    </form>
  );

  /*  class TaskInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        task: "",
      };
    }
  
    handleInputChange = (e) => {
      this.setState({ task: e.target.value });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.task.trim()) {
        this.props.onAddTask({ task: this.state.task });
        this.setState({ task: "" });
      }
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="task-input-container">
          <input
            type="text"
            value={this.state.task}
            onChange={this.handleInputChange}
            placeholder="Enter a task"
          />
          <button type="submit">Add</button>
        </form>
      );
    }
  }  */
 

};

export default TaskInput;
