import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TodoList from "./TodoList";
import InProgressList from "./InProgressList";
import CompletedList from "./CompletedList";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Finish React course" },
    { id: 2, task: "Read a book" },
  ]);
  const [inProgressTasks, setInProgressTasks] = useState([
    { id: 7, task: "Complete Homework" },
  ]);
  const [completedTasks, setCompletedTasks] = useState([
    { id: 3, task: "Clean the house" },
    { id: 4, task: "Buy groceries" },
    { id: 5, task: "Go for a jog" },
  ]);
  const [nextId, setNextId] = useState(8);

  const addTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: nextId, task: task.task },
    ]);
    setNextId((prevId) => prevId + 1);
  };

  const moveTask = (sourceList, setSourceList, destinationList, setDestinationList, taskId) => {
    const taskToMove = sourceList.find((task) => task.id === taskId);
    setSourceList((prev) => prev.filter((task) => task.id !== taskId));
    setDestinationList((prev) => [...prev, taskToMove]);
  };

  const onDragEnd = (taskId, source, destination) => {
    if (!destination) return;

    if (source === "todo" && destination === "inProgress") {
      moveTask(tasks, setTasks, inProgressTasks, setInProgressTasks, taskId);
    } else if (source === "todo" && destination === "completed") {
      moveTask(tasks, setTasks, completedTasks, setCompletedTasks, taskId);
    } else if (source === "inProgress" && destination === "todo") {
      moveTask(inProgressTasks, setInProgressTasks, tasks, setTasks, taskId);
    } else if (source === "inProgress" && destination === "completed") {
      moveTask(inProgressTasks, setInProgressTasks, completedTasks, setCompletedTasks, taskId);
    } else if (source === "completed" && destination === "todo") {
      moveTask(completedTasks, setCompletedTasks, tasks, setTasks, taskId);
    } else if (source === "completed" && destination === "inProgress") {
      moveTask(completedTasks, setCompletedTasks, inProgressTasks, setInProgressTasks, taskId);
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskInput onAddTask={addTask} />
      <div className="lists-container">
        <TodoList tasks={tasks} onDragEnd={onDragEnd} />
        <InProgressList tasks={inProgressTasks} onDragEnd={onDragEnd} />
        <CompletedList tasks={completedTasks} onDragEnd={onDragEnd} />
      </div>
    </div>
  );
};

export default TaskManager;


 /* class TaskManager extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: [],
        completedTasks: [],
      };
    }
  
    addTask = (task) => {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, { id: prevState.tasks.length, task: task.task }],
      }));
    };
  
    completeTask = (taskId) => {
      const taskToComplete = this.state.tasks.find((task) => task.id === taskId);
      this.setState((prevState) => ({
        completedTasks: [...prevState.completedTasks, taskToComplete],
        tasks: prevState.tasks.filter((task) => task.id !== taskId),
      }));
    };
  
    removeTask = (taskId) => {
      this.setState((prevState) => ({
        tasks: prevState.tasks.filter((task) => task.id !== taskId),
        completedTasks: prevState.completedTasks.filter((task) => task.id !== taskId),
      }));
    };
  
    undoTask = (taskId) => {
      const taskToUndo = this.state.completedTasks.find((task) => task.id === taskId);
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, taskToUndo],
        completedTasks: prevState.completedTasks.filter((task) => task.id !== taskId),
      }));
    };
  
    render() {
      return (
        <div className="container">
          <h1>Task Manager</h1>
          <TaskInput onAddTask={this.addTask} />
          <div className="lists-container">
            <TodoList
              tasks={this.state.tasks}
              onCompleteTask={this.completeTask}
              onRemoveTask={this.removeTask}
            />
            <CompletedList
              completedTasks={this.state.completedTasks}
              onRemoveTask={this.removeTask}
              onUndoTask={this.undoTask}
            />
          </div>
        </div>
      );
    }
  } */
  