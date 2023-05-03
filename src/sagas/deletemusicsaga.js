import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  deleteMusicFaliure,
  deleteMusicSuccess,
} from "../Slices/MusicListSlice";
import axios from "axios";
import { startSaga } from "./musiclistsaga";

function* deletMusicAsync(action) {
  const id = action.payload;
  try {
    const response = yield call(
      axios.delete,
      `http://localhost:4000/music/${id}`
    );
    console.log("deleted successfully", response);
    yield put(deleteMusicSuccess(id));
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
