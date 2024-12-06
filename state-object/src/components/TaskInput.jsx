import React, { Component } from "react";

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
    console.log("TaskInput: Constructor");
  }

  handleChange = (e) => {
    console.log("TaskInput: Changing", e.target.value);
    this.setState({ task: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("TaskInput: Submitting", this.state.task);
    this.props.onAddTask({ task: this.state.task });
    this.setState({ task: "" });
  };

  render() {
    console.log("TaskInput: Rendering", this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TaskInput;
