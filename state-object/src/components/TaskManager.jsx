import React, { useState, useCallback, useEffect } from "react";
import TaskInput from "./TaskInput";
import TodoList from "./TodoList";
import CompletedList from "./CompletedList";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Finish React course" },
    { id: 2, task: "Read a book" },
  ]);
  const [completedTasks, setCompletedTasks] = useState([
    { id: 3, task: "Clean the house" },
    { id: 4, task: "Buy groceries" },
    { id: 5, task: "Go for a jog" },
  ]);
  const [nextId, setNextId] = useState(6); 

  const addTask = useCallback((task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: nextId, task: task.task },
    ]);
    setNextId((prevId) => prevId + 1); 
  }, [nextId]);

  const completeTask = useCallback((taskId) => {
    const taskToComplete = tasks.find((task) => task.id === taskId);
    setCompletedTasks((prevCompleted) => [...prevCompleted, taskToComplete]);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, [tasks]);

  const removeTask = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setCompletedTasks((prevCompleted) =>
      prevCompleted.filter((task) => task.id !== taskId)
    );
  }, []);

  const undoTask = useCallback((taskId) => {
    const taskToUndo = completedTasks.find((task) => task.id === taskId);
    setTasks((prevTasks) => [...prevTasks, taskToUndo]);
    setCompletedTasks((prevCompleted) =>
      prevCompleted.filter((task) => task.id !== taskId)
    );
  }, [completedTasks]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskInput onAddTask={addTask} />
      <div className="lists-container">
        <TodoList
          tasks={tasks}
          onCompleteTask={completeTask}
          onRemoveTask={removeTask}
        />
        <CompletedList
          completedTasks={completedTasks}
          onRemoveTask={removeTask}
          onUndoTask={undoTask}
        />
      </div>
    </div>
  );
  
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
  
};
export default TaskManager;
