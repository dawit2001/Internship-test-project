import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  updateMusicSuccess,
  updateMusicFaliure,
} from "../Slices/MusicListSlice";
import axios from "axios";
import { startSaga } from "./musiclistsaga";

function* updateMusicAsync(action) {
  const { key, data } = action.payload;
  try {
    const response = yield call(
      axios.put,
      `https://internship-project-54a7e-default-rtdb.firebaseio.com/music/${key}.json`,
      data
    );
    yield put(updateMusicSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(updateMusicFaliure("something wrong while updating the music"));
  }
}
function* startUpdateMusicSaga() {
  yield takeLatest("music/updateMusicStart", updateMusicAsync);
}

export default function* updateSaga() {
  yield all([startUpdateMusicSaga()]);
  yield all([startSaga()]);
}
