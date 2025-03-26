import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const ResultsPage: React.FC = () => {
  const { answers, submitted, questions } = useSelector(
    (state: RootState) => state.quiz
  );

  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  if (!submitted) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Please submit the quiz to see your results.</h2>
      </div>
    );
  }

  const correctAnswers = answers.map((answer, index) => {
    const correctAnswer = questions[index].color;
    return answer === correctAnswer ? "Correct" : "Incorrect";
  });

  const correctCount = correctAnswers.filter(
    (result) => result === "Correct"
  ).length;
  const totalQuestions = questions.length;

  const toggleAnswerCollapse = (index: number) => {
    setExpandedQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="results-container"
      style={{ textAlign: "center", padding: "20px" }}
    >
      <h1>Your Results</h1>
      <h3>
        You answered {correctCount} out of {totalQuestions} questions correctly.
      </h3>
      <div>
        <ul style={{ listStyle: "none", padding: "0" }}>
          {questions.map((_, index) => (
            <li key={index} style={{ marginBottom: "20px", textAlign: "left" }}>
              <div
                style={{
                  backgroundColor:
                    answers[index] === questions[index].color
                      ? "#d4edda"
                      : "#f8d7da",
                  padding: "10px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
                onClick={() => toggleAnswerCollapse(index)}
              >
                <h4>Question {index + 1}</h4>
                <div
                  style={{
                    maxHeight: expandedQuestion === index ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.5s ease-in-out",
                    paddingLeft: "20px",
                    paddingBottom: "10px",
                    visibility:
                      expandedQuestion === index ? "visible" : "hidden",
                    opacity: expandedQuestion === index ? 1 : 0,
                  }}
                >
                  {expandedQuestion === index && (
                    <div>
                      <p>
                        Your Answer:{" "}
                        <span
                          style={{ color: answers[index], fontWeight: "bold" }}
                        >
                          {answers[index]}
                        </span>
                      </p>
                      <p>
                        Correct Answer:{" "}
                        <span
                          style={{
                            color: questions[index].color,
                            fontWeight: "bold",
                          }}
                        >
                          {questions[index].color}
                        </span>
                      </p>
                      <p>
                        Result:{" "}
                        <span
                          style={{
                            fontWeight: "bold",
                            color:
                              correctAnswers[index] === "Correct"
                                ? "green"
                                : "red",
                          }}
                        >
                          {correctAnswers[index]}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultsPage;
