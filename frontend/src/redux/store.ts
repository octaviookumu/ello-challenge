import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./features/dialog-slice";

export const store = configureStore({
  reducer: {
    dialog: dialogReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
