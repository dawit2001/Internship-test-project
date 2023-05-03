import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  updateMusicSuccess,
  updateMusicFaliure,
} from "../Slices/MusicListSlice";
import axios from "axios";
import { startSaga } from "./musiclistsaga";

function* updateMusicAsync(action) {
  const { id, Artist, Album, Title, Audio, Date, Avatar, Genre } =
    action.payload;
  try {
    const response = yield call(
      axios.put,
      `http://localhost:4000/music/${id}`,
      {
        Artist,
        Album,
        Title,
        Audio,
        Date,
        Avatar,
        Genre,
      }
    );
    console.log("updated successfully", response.data);
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
