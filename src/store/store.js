import { configureStore } from "@reduxjs/toolkit";
import MuscilListReducer from "../Slices/MusicListSlice";

export const store = configureStore({
  reducer: {
    MusicLists: MuscilListReducer,
  },
});
