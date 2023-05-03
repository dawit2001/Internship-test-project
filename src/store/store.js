import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/musiclistsaga";
import AddMusicSaga from "../sagas/addmusicsaga";

const MusicListsagaMiddleware = createSagaMiddleware();
const AddMusicSagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [MusicListsagaMiddleware, AddMusicSagaMiddleware],
});

MusicListsagaMiddleware.run(rootSaga);
AddMusicSagaMiddleware.run(AddMusicSaga);

export default store;
