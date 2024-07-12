import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DialogState {
  open: boolean;
}

const initialState: DialogState = {
  open: false,
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state) => {
      state.open = true;
    },
    closeDialog: (state) => {
      state.open = false;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
