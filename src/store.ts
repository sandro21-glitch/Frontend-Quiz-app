import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/Home/homeSlice";
import quizReducer from "./features/Quizzes/quizSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    quiz: quizReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
