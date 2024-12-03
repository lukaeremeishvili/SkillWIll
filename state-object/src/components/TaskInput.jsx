import React, { useState } from "react";

function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        task: inputValue,
      };
      onAddTask(newTask);
      setInputValue("");
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        placeholder="Enter a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default TaskInput;
