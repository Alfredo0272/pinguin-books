import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import bookSlice from "../slice/book.slice";

export const AppStore = configureStore({
  reducer: {
    bookState: bookSlice,
  },
});

export type AppDispatch = typeof AppStore.dispatch;
export type RootState = ReturnType<typeof AppStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
