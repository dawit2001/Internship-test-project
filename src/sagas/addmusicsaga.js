import { call, put, takeLatest, all } from "redux-saga/effects";
import { addMusicFaliure, addMusicSuccess } from "../Slices/MusicListSlice";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";
import { startSaga } from "../sagas/musiclistsaga";

function* AddMusicAsync(action) {
  console.log(action);
  try {
    const { Artist, Album, Title, Audio, Genre } = action.payload;
    const response = yield call(axios.post, " http://localhost:4000/music", {
      id: nanoid(),
      Artist,
      Album,
      Title,
      Audio,
      Date: new Date().toISOString(),
      Genre,
    });
    yield put(addMusicSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(addMusicFaliure("something wrong.while uploading music"));
  }
}

function* StartAddMusicSaga() {
  yield takeLatest("music/addMusicStart", AddMusicAsync);
}
export default function* AddMusicSaga() {
  yield all([StartAddMusicSaga()]);
  yield all([startSaga()]);
}
