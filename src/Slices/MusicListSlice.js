import { createSlice } from "@reduxjs/toolkit";

//
export const initialState = {
  MusicList: [],
  searchedMusic: [],
  FetchedDatakeys: [],
  isSearching: false,
  Loading: false,
  error: null,
};

//
const MusicListSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    // reducers to fetch Music lists data

    FetchMusicStart(state) {
      state.Loading = true;
      state.error = null;
    },
    fetchMusicSuccess(state, action) {
      state.Loading = false;
      action.payload.map((payload) => state.MusicList.push(payload));
      state.error = null;
    },
    fetchKeysSuccess(state, action) {
      state.Loading = false;
      action.payload.map((payload) => state.FetchedDatakeys.push(payload));
      state.error = null;
    },
    fetchMusicFaliure(state, action) {
      state.Loading = false;
      state.error = action.payload;
    },

    //  reducers to add music

    addMusicStart(state) {
      return {
        ...state,
        Loading: true,
        error: null,
      };
    },
    addMusicSuccess(state, action) {
      return {
        ...state,
        FetchedDatakeys: [...state.FetchedDatakeys, action.payload.key],
        MusicList: [...state.MusicList, { ...action.payload.data }],
        Loading: false,
      };
    },
    addMusicFaliure(state, action) {
      return {
        ...state,
        error: action.payload,
        Loading: false,
      };
    },

    // reducers to update Music list data

    updateMusicStart(state, action) {
      console.log(action.payload);
      return {
        ...state,
        Loading: true,
        error: null,
      };
    },
    updateMusicSuccess(state, action) {
      return {
        ...state,
        MusicList: [
          ...state.MusicList.map((music) => {
            if (music.id === action.payload.id) {
              music = action.payload;
            }
            return music;
          }),
        ],
        Loading: false,
      };
    },
    updateMusicFaliure(state, action) {
      return {
        ...state,
        error: action.payload,
        Loading: false,
      };
    },

    // reducers to delete Music list data

    deleteMusicStart(state) {
      return {
        ...state,
        Loading: true,
        error: null,
      };
    },
    deleteMusicSuccess(state, action) {
      console.log(action.payload.key);
      return {
        ...state,
        FetchedDatakeys: [...action.payload.key],
        MusicList: [...action.payload.data],
        Loading: false,
      };
    },
    deleteMusicFaliure(state, action) {
      return {
        ...state,
        Loading: false,
        error: action.payload,
      };
    },

    // reducers to search for music
    InputSearchMusic(state, action) {
      state.isSearching = action.payload;
    },
    searchMusic(state, action) {
      state.searchedMusic = [
        ...state.MusicList.map((music) => {
          if (music.Artist.toLowerCase().includes(action.payload.toLowerCase()))
            return music;
          else if (
            music.Title.toLowerCase()
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          )
            return music;
          else if (
            music.Album.toLowerCase().includes(action.payload.toLowerCase())
          )
            return music;
          else if (
            music.Genre.toLowerCase().includes(action.payload.toLowerCase())
          )
            return music;
        }),
      ];
    },
  },
});

export const selectMusicLists = (state) => {
  return state.MusicData;
};
export const {
  addMusicFaliure,
  addMusicStart,
  addMusicSuccess,
  fetchMusicFaliure,
  fetchMusicSuccess,
  FetchMusicStart,
  updateMusicFaliure,
  updateMusicStart,
  updateMusicSuccess,
  deleteMusicFaliure,
  deleteMusicStart,
  deleteMusicSuccess,
  searchMusic,
  InputSearchMusic,
  fetchKeysSuccess,
} = MusicListSlice.actions;

export default MusicListSlice.reducer;
