import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import TaskListPage from "./components/pages/TaskListPage";
import AddTaskPage from "./components/pages/AddTaskPage";
import EditTaskPage from "./components/pages/EditTaskPage";
import Header from "./components/Header";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./App.css";

function App() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <LanguageProvider>
      <div className={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<TaskListPage />} />
            <Route path="/add-task" element={<AddTaskPage />} />
            <Route path="/edit-task/:id" element={<EditTaskPage />} />
          </Routes>
        </Router>
      </div>
    </LanguageProvider>
  );
}

export default App;
