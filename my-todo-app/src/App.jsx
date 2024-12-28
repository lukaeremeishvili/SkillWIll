import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskListPage from "./components/pages/TaskListPage";
import AddTaskPage from "./components/pages/AddTaskPage";
import EditTaskPage from "./components/pages/EditTaskPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/edit-task/:id" element={<EditTaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
