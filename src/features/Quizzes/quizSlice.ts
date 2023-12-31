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
  isActiveQuiz: boolean;
  icon: string;
  title: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  quizzes: [],
  isActiveQuiz: false,
  icon: "",
  title: "",
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
      // console.log(newData);
    },
  },
});

export const { setSubjectTheme } = quizSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default quizSlice.reducer;
