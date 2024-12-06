import React, { Component } from "react";
import TaskInput from "./TaskInput";
import TodoList from "./TodoList";
import CompletedList from "./CompletedList";

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        { id: 1, task: "Finish React course" },
        { id: 2, task: "Read a book" },
      ],
      completed: [
        { id: 3, task: "Clean the house" },
        { id: 4, task: "Buy groceries" },
        { id: 5, task: "Go for a jog" },
      ],
    };
    console.log("TaskManager: Constructor");
  }

  addTask = (newTask) => {
    console.log("TaskManager: Adding", newTask);
    if (newTask.task.trim() !== "") {
      const newTaskWithId = {
        id: Date.now(),
        task: newTask.task,
      };
      this.setState((prevState) => ({
        todo: [...prevState.todo, newTaskWithId],
      }));
    }
  };

  completeTask = (taskId) => {
    console.log("TaskManager: Completing", taskId);
    const taskToComplete = this.state.todo.find((task) => task.id === taskId);
    if (taskToComplete) {
      this.setState((prevState) => ({
        todo: prevState.todo.filter((task) => task.id !== taskId),
        completed: [...prevState.completed, taskToComplete],
      }));
    }
  };

  removeTask = (taskId) => {
    console.log("TaskManager: Removing", taskId);
    this.setState((prevState) => ({
      completed: prevState.completed.filter((task) => task.id !== taskId),
    }));
  };

  revertTask = (taskId) => {
    console.log("TaskManager: Reverting", taskId);
    const taskToRevert = this.state.completed.find((task) => task.id === taskId);
    if (taskToRevert) {
      this.setState((prevState) => ({
        completed: prevState.completed.filter((task) => task.id !== taskId),
        todo: [...prevState.todo, taskToRevert],
      }));
    }
  };

  render() {
    console.log("TaskManager: Rendering", this.state);
    return (
      <div className="container">
        <h1>Tasks</h1>
        <TaskInput onAddTask={this.addTask} />
        <div className="lists-container">
          <TodoList tasks={this.state.todo} onComplete={this.completeTask} />
          <CompletedList
            tasks={this.state.completed}
            onRemove={this.removeTask}
            onRevert={this.revertTask}
          />
        </div>
      </div>
    );
  }
}

export default TaskManager;
