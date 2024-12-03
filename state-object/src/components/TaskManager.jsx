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
  }

  getNextId = () => {
    const allIds = [
      ...this.state.todo.map(task => task.id),
      ...this.state.completed.map(task => task.id),
    ];
    const highestId = Math.max(0, ...allIds);
    return highestId + 1;
  };

  addTask = (newTask) => {
    if (newTask.task.trim() !== "") {
      const newId = this.getNextId();

      const newTaskWithId = {
        id: newId,
        task: newTask.task,
      };

      this.setState((prevState) => ({
        todo: [...prevState.todo, newTaskWithId],
      }));
    }
  };

  completeTask = (taskId) => {
    const taskToComplete = this.state.todo.find((task) => task.id === taskId);
    this.setState((prevState) => ({
      todo: prevState.todo.filter((task) => task.id !== taskId),
      completed: [...prevState.completed, taskToComplete],
    }));
  };

  removeTask = (taskId) => {
    this.setState((prevState) => ({
      completed: prevState.completed.filter((task) => task.id !== taskId),
    }));
  };

  revertTask = (taskId) => {
    const taskToRevert = this.state.completed.find((task) => task.id === taskId);
    this.setState((prevState) => ({
      completed: prevState.completed.filter((task) => task.id !== taskId),
      todo: [...prevState.todo, taskToRevert],
    }));
  };

  render() {
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
