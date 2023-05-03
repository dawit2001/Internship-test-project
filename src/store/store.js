import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/musiclistsaga";
import AddMusicSaga from "../sagas/addmusicsaga";
import updateSaga from "../sagas/updatemusicsaga";
import deleteSaga from "../sagas/deletemusicsaga";

const MusicListsagaMiddleware = createSagaMiddleware();
const AddMusicSagaMiddleware = createSagaMiddleware();
const UpdateMusicSagaMiddleware = createSagaMiddleware();
const DeleteMusicSagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [
    MusicListsagaMiddleware,
    AddMusicSagaMiddleware,
    UpdateMusicSagaMiddleware,
    DeleteMusicSagaMiddleware,
  ],
});

MusicListsagaMiddleware.run(rootSaga);
AddMusicSagaMiddleware.run(AddMusicSaga);
UpdateMusicSagaMiddleware.run(updateSaga);
DeleteMusicSagaMiddleware.run(deleteSaga);

export default store;
