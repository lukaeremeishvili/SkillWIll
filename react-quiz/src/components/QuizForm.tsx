import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setQuestions,
  setAnswer,
  submitQuiz,
  nextQuestion,
  previousQuestion,
} from "../store/quizSlice";
import { RootState } from "../store/store";

const fetchQuizData = async () => {
  const response = await fetch("https://random-colors-lovat.vercel.app/");
  const data = await response.json();
  return data;
};

const QuizForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, currentQuestion, answers } = useSelector(
    (state: RootState) => state.quiz
  );

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const quizData = await fetchQuizData();
      dispatch(setQuestions(quizData));
    };
    loadData();
  }, [dispatch]);

  useEffect(() => {
    setSelectedAnswer(answers[currentQuestion] || null);
  }, [answers, currentQuestion]);

  const handleAnswerChange = (color: string) => {
    setSelectedAnswer(color);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      dispatch(setAnswer(selectedAnswer));
      dispatch(nextQuestion());
      setSelectedAnswer(null);
    }
  };

  const handlePreviousQuestion = () => {
    if (selectedAnswer) {
      dispatch(setAnswer(selectedAnswer));
    }
    dispatch(previousQuestion());
    setSelectedAnswer(answers[currentQuestion] || null);
  };

  const handleSubmitQuiz = () => {
    if (selectedAnswer) {
      dispatch(setAnswer(selectedAnswer));
    }
    dispatch(submitQuiz());
    navigate("/results");
  };

  if (!questions.length) return <div>Loading...</div>;

  const questionColor = questions[currentQuestion].color;

  return (
    <div className="quiz-container" style={{ textAlign: "center" }}>
      <form>
        <div>
          <h3>Question {currentQuestion + 1}</h3>
          <p>Which color is closest to the one described?</p>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: questionColor,
              margin: "0 auto",
            }}
          ></div>

          <div>
            {questions[currentQuestion].answers.map((color) => (
              <label key={color} style={{ display: "block", margin: "10px" }}>
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={color}
                  onChange={() => handleAnswerChange(color)}
                  checked={selectedAnswer === color}
                />
                <span
                  style={{
                    backgroundColor: color,
                    padding: "10px",
                    margin: "5px",
                    borderRadius: "5px",
                    width: "50px",
                    height: "50px",
                    display: "inline-block",
                  }}
                />
              </label>
            ))}
          </div>
        </div>
        <div className="button-container">
          {currentQuestion > 0 && (
            <button type="button" onClick={handlePreviousQuestion}>
              Previous Question
            </button>
          )}
          {currentQuestion < questions.length - 1 && (
            <button type="button" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}
          {currentQuestion === questions.length - 1 && (
            <button type="button" onClick={handleSubmitQuiz}>
              Submit Quiz
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default QuizForm;
