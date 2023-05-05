import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import {
  fetchMusicFaliure,
  fetchMusicSuccess,
  fetchKeysSuccess,
} from "../Slices/MusicListSlice";

function* fetchMusicListAsync() {
  let status;
  try {
    const response = yield call(
      axios.get,
      "https://internship-project-54a7e-default-rtdb.firebaseio.com/music/.json"
    );
    const data = yield response.data;

    //Destructing Keys and Their Values stored in firebase realtime database
    if (data) {
      const keys = [...Object.entries(data).map((music) => music[0])];
      const music = [...Object.entries(data).map((music) => music[1])];
      console.log(keys);
      status = yield response.statusText;
      yield put(fetchMusicSuccess(music));
      yield put(fetchKeysSuccess(keys));
    }
  } catch (error) {
    yield put(
      fetchMusicFaliure(
        `Something wrong while fetching music data :- ${status} `
      )
    );
  }
}
export function* startSaga() {
  yield takeLatest("music/FetchMusicStart", fetchMusicListAsync);
}
export default function* rootSaga() {
  yield all([startSaga()]);
}
