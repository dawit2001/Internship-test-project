import { call, put, takeLatest, all } from "redux-saga/effects";
import { fetchMusicFaliure, fetchMusicSuccess } from "../Slices/MusicListSlice";

function* fetchMusicListAsync() {
  try {
    const response = yield call(fetch, " http://localhost:4000/music");
    const data = yield response.json();
    console.log(data);
    yield put(fetchMusicSuccess(data));
  } catch (error) {
    yield put(fetchMusicFaliure(error));
  }
}
export function* startSaga() {
  yield takeLatest("music/FetchMusicStart", fetchMusicListAsync);
}
export default function* rootSaga() {
  yield all([startSaga()]);
}
