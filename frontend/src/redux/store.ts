import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./features/dialog-slice";
import bookReducer from "./features/book-slice";

export const store = configureStore({
  reducer: {
    dialogReducer,
    bookReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
