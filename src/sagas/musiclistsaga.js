import { call, put, takeLatest, all } from "redux-saga/effects";
import { fetchMusicFaliure, fetchMusicSuccess } from "../Slices/MusicListSlice";

function* fetchMusicListAsync() {
  try {
    const response = yield call(
      fetch,
      "https://my-json-server.typicode.com/dawit2001/music/music"
    );
    const data = yield response.json();
    yield put(fetchMusicSuccess(data));
    console.log(data);
  } catch (error) {
    yield put(fetchMusicFaliure(error));
  }
}
export function* startSaga() {
  yield takeLatest("music/FetchMusicStart", fetchMusicListAsync);
  console.log("called");
  // console.log("saga started in musicsaga");
}
export default function* rootSaga() {
  yield all([startSaga()]);
}
