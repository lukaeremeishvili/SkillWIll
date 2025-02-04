import React from "react";

interface TaskTitleObject {
  title: string;
}

export interface Task {
  id?: string;
  _uuid?: string;
  title: string | TaskTitleObject;
  username?: string;
  completed: boolean;
  dueDate?: string;
  info?: string;
}

interface TodoItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onDelete, onEdit }) => {
  const renderTitle = (): string => {
    if (typeof task.title === "string") {
      return task.title;
    } else if (
      typeof task.title === "object" &&
      task.title !== null &&
      "title" in task.title
    ) {
      return task.title.title;
    }
    return "No Title";
  };

  const taskId = task.id || task._uuid || "";

  return (
    <tr>
      <td>{renderTitle()}</td>
      <td>{task.username}</td>
      <td>{task.completed ? "Completed" : "In Progress"}</td>
      <td>{task.dueDate}</td>
      <td>{task.info}</td>
      <td>
        <button onClick={() => onEdit(taskId)}>Edit</button>
      </td>
      <td>
        <button onClick={() => onDelete(taskId)}>Delete</button>
      </td>
    </tr>
  );
};

export default TodoItem;
