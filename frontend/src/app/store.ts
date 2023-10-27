import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebarSlice";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
