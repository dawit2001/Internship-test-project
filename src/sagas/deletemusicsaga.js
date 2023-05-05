import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  deleteMusicFaliure,
  deleteMusicSuccess,
} from "../Slices/MusicListSlice";
import axios from "axios";
import { startSaga } from "./musiclistsaga";

function* deletMusicAsync(action) {
  console.log(action.payload);
  const key = action.payload;
  try {
    const response = yield call(
      axios.delete,
      `https://internship-project-54a7e-default-rtdb.firebaseio.com/music/${key}.json`
    );

    // fetching  remaining data after user deletes a music
    const response2 = yield call(
      axios.get,
      `https://internship-project-54a7e-default-rtdb.firebaseio.com/music.json`
    );

    if (!response2.data) {
      yield put(deleteMusicSuccess({ key: [], data: [] }));
    } else {
      const keys = [...Object.entries(response2.data).map((data) => data[0])];
      const music = [...Object.entries(response2.data).map((data) => data[1])];
      yield put(deleteMusicSuccess({ key: keys, data: music }));
    }
  } catch (error) {
    console.log(error);
    yield put(deleteMusicFaliure("something wrong while Deleting the music"));
  }
}
function* startDeleteMusicSaga() {
  yield takeLatest("music/deleteMusicStart", deletMusicAsync);
}

export default function* deleteSaga() {
  yield all([startDeleteMusicSaga()]);
  yield all([startSaga()]);
}
