interface Translations {
  taskList: string;
  addTask: string;
  title: string;
  username: string;
  status: string;
  deadline: string;
  info: string;
  edit: string;
  delete: string;
  noTasks: string;
}

export const translations: Record<string, Translations> = {
  en: {
    taskList: "Task List",
    addTask: "Add Task",
    title: "Title",
    username: "Username",
    status: "Status",
    deadline: "Deadline",
    info: "Info",
    edit: "Edit",
    delete: "Delete",
    noTasks: "No tasks available.",
  },
  ka: {
    taskList: "დავალებების სია",
    addTask: "დავალების დამატება",
    title: "დასახელება",
    username: "მომხმარებელი",
    status: "სტატუსი",
    deadline: "ბოლო ვადა",
    info: "ინფორმაცია",
    edit: "რედაქტირება",
    delete: "წაშლა",
    noTasks: "დავალებები არ არსებობს.",
  },
};
