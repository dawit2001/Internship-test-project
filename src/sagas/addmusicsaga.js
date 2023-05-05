import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  addMusicFaliure,
  addMusicSuccess,
  fetchKeysSuccess,
} from "../Slices/MusicListSlice";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";
import { startSaga } from "../sagas/musiclistsaga";

function* AddMusicAsync(action) {
  try {
    const { Artist, Album, Title, Genre } = action.payload;
    const send = yield call(
      axios.post,
      "https://internship-project-54a7e-default-rtdb.firebaseio.com/music/.json",
      {
        id: nanoid(),
        Artist,
        Album,
        Title,
        Date: new Date().toISOString(),
        Genre,
      }
    );

    // fetching uploaded data to update the state
    const response = yield call(
      axios.get,
      `https://internship-project-54a7e-default-rtdb.firebaseio.com/music/${send.data.name}.json`
    );
    yield put(addMusicSuccess({ key: send.data.name, data: response.data }));
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
