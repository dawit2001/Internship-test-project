import { createSlice } from "@reduxjs/toolkit";

//
export const initialState = {
  MusicList: [],
  searchedMusic: [],
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
        MusicList: [...state.MusicList, { ...action.payload }],
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

    updateMusicStart(state) {
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
      return {
        ...state,
        MusicList: [
          ...state.MusicList.filter((music) => music.id !== action.payload),
        ],
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
          if (music.Artist.includes(action.payload)) return music;
          else if (music.Title.includes(action.payload)) return music;
          else if (music.Album.includes(action.payload)) return music;
          else if (music.Genre.includes(action.payload)) return music;
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
} = MusicListSlice.actions;

export default MusicListSlice.reducer;
