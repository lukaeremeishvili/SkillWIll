import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import QuizForm from "./components/QuizForm";
import ResultsPage from "./components/ResultsPage";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import "./App.css";

const App: React.FC = () => {
  const { submitted } = useSelector((state: RootState) => state.quiz);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizForm />} />
        <Route
          path="/results"
          element={submitted ? <ResultsPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
