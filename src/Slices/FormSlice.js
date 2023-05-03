import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMusicAdded: false,
  isMusicUpdated: false,
  selectedId: "",
};

const FormSlice = createSlice({
  name: "listForm",
  initialState,
  reducers: {
    AddForm(state, action) {
      state.isMusicAdded = action.payload;
    },
    UpdateForm(state, action) {
      state.isMusicUpdated = action.payload;
    },
    SelectedId(state, action) {
      state.selectedId = action.payload;
    },
  },
});
export const SelectState = (state) => {
  return state.FormData;
};
export const { AddForm, UpdateForm, SelectedId } = FormSlice.actions;

export default FormSlice.reducer;
