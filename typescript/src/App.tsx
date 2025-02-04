import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import TaskListPage from "./pages/TaskListPage";
import AddTaskPage from "./pages/AddTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import Header from "./components/Header";
import { LanguageProvider } from "./store/LanguageContext";
import { RootState } from "./store"; 
import "./App.css";

function App() {
  const theme = useSelector((state: RootState) => state.theme);

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
