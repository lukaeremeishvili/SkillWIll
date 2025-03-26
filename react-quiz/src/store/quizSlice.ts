import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Question {
  color: string;
  answers: string[];
}

interface QuizState {
  questions: Question[];
  answers: string[];
  currentQuestion: number;
  submitted: boolean;
}

const initialState: QuizState = {
  questions: [],
  answers: [],
  currentQuestion: 0,
  submitted: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
    setAnswer: (state, action: PayloadAction<string>) => {
      state.answers[state.currentQuestion] = action.payload;
    },
    nextQuestion: (state) => {
      if (state.currentQuestion < state.questions.length - 1) {
        state.currentQuestion += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestion > 0) {
        state.currentQuestion -= 1;
      }
    },
    submitQuiz: (state) => {
      state.submitted = true;
    },
  },
});

export const { setQuestions, setAnswer, nextQuestion, previousQuestion, submitQuiz } = quizSlice.actions;
export default quizSlice.reducer;
