import { RootState } from "@/app/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  show: boolean;
}
const initialState: SidebarState = {
  show: false,
};
export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean | null>) => {
      state.show = Boolean(action.payload?.toString())
        ? (action.payload as boolean)
        : !state.show;
    },
  },
});

export const { toggle } = sidebarSlice.actions;
export const selectSidebarToggle = (state: RootState) => state.sidebar.show;
export default sidebarSlice.reducer;
