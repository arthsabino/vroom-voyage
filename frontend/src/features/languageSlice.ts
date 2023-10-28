import { LanguageType } from "@/@types/lang";
import { RootState } from "@/app/store";
import english from "@/assets/lang/en.json";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface LanguageState {
  lang: LanguageType;
}

const initialState: LanguageState = {
  lang: english,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<LanguageType>) => {
      state.lang = action.payload;
    },
  },
});

export const { change } = languageSlice.actions;
export const changeLanguage = (state: RootState) => state.language.lang;
export default languageSlice.reducer;
