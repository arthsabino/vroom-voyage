import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import languageReducer from "../features/languageSlice";
import sidebarReducer from "../features/sidebarSlice";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    language: languageReducer,
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
