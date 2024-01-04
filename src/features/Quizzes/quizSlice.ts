import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// import type { RootState } from "../../store";
type QuizData = {
  quizzes: {
    title: string;
    icon: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
  }[];
};
// Define a type for the slice state
interface CounterState {
  quizzes: {
    title: string;
    icon: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
  }[];
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
  isActiveQuiz: boolean;
  icon: string;
  title: string;
  index: number;
  userAnswer: string;
  answer: string;
  score: number;
  isChecked: boolean;
  isCompleted: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  quizzes: [],
  questions: [],
  isActiveQuiz: false,
  icon: "",
  title: "",
  index: 0,
  userAnswer: "",
  answer: "",
  score: 0,
  isChecked: true,
  isCompleted: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setSubjectTheme: (
      state,
      action: PayloadAction<{ data: QuizData; subject: string }>
    ) => {
      state.isActiveQuiz = true;
      const { data, subject } = action.payload;
      const QuizzesData = data.quizzes;
      const newData = QuizzesData.filter(
        (data) => data.title.toLocaleLowerCase() === subject.toLocaleLowerCase()
      );
      state.quizzes = newData;
      state.icon = newData[0].icon;
      state.title = newData[0].title;
      state.questions = newData[0].questions;
      state.answer = state.questions[state.index].answer;
    },
    nextQuiz: (state) => {
      if (state.index < state.questions.length - 1 && state.userAnswer !== "") {
        state.index += 1;
        state.answer = state.questions[state.index].answer;
        setIsChecked(true);
      } else {
        state.isCompleted = true;
        setIsChecked(false);
      }

      state.userAnswer = "";
    },
    setUserAnswer: (state, action: PayloadAction<string>) => {
      state.userAnswer = action.payload;
    },
    updateUserScore: (state) => {
      const { answer, userAnswer } = state;
      if (answer === userAnswer) state.score++;
    },
    setIsChecked: (state, action: PayloadAction<boolean>) => {
      state.isChecked = action.payload;
    },
    resetQuiz: (state) => {
      state.isActiveQuiz = false;
      state.icon = "";
      state.title = "";
      state.index = 0;
      state.userAnswer = "";
      state.answer = "";
      state.score = 0;
      state.isChecked = false;
      state.isCompleted = false;
    }
  },
});

export const {
  setSubjectTheme,
  nextQuiz,
  setUserAnswer,
  updateUserScore,
  setIsChecked,
  resetQuiz
} = quizSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default quizSlice.reducer;
