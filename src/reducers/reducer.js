import { combineReducers } from "@reduxjs/toolkit";
import MusicListReducer from "../Slices/MusicListSlice";
import Formreducer from "../Slices/FormSlice";

export const rootReducer = combineReducers({
  MusicData: MusicListReducer,
  FormData: Formreducer,
});
