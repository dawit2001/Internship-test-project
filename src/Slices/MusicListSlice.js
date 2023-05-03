import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

//
const initialState = {
  MusicList: [],
  Loading: false,
  error: null,
};

const MusicListSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    FetchMusicStart(state) {
      // console.log("saga started");
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
        MusicList: [
          ...state.MusicList,
          { id: nanoid(), Date: new Date().toISOString(), ...action.payload },
        ],
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
  },
});

export const selectMusicLists = (state) => {
  // console.log(state);
  return state.MusicData;
};
export const {
  addMusicFaliure,
  addMusicStart,
  addMusicSuccess,
  fetchMusicFaliure,
  fetchMusicSuccess,
  FetchMusicStart,
} = MusicListSlice.actions;

export default MusicListSlice.reducer;

// const initialState = [
//   {
//     id: `02`,
//     Avatar: "",
//     Artist: `sam smith`,
//     Title: `Blinding lights`,
//     Album: `blinding lights`,
//     Genre: `rock and roll`,
//     date: sub(new Date(), { minute: 10 }).toISOString(),
//   },
//   {
//     id: `01`,
//     Artist: `The weekend`,
//     Title: `Blinding lights `,
//     Album: `blinding lights`,
//     Genre: `rock and roll`,
//     date: sub(new Date(), { years: 3 }).toISOString(),
//   },
//   {
//     id: `00`,
//     Artist: `sam smith`,
//     Title: `Blinding lights`,
//     Album: `blinding lights`,
//     Genre: `rock and roll`,
//     date: sub(new Date(), { months: 3 }).toISOString(),
//   },
// ];

// const MusicListSlice = createSlice({

//   name: `Music Lists`,
//   initialState,
//   reducers: {
//     musicAdded: {
//       reducer(state, action) {
//         console.log(state);
//         state.push(action.payload);
//       },
//       prepare(MusicList) {
//         return {
//           payload: {
//             id: nanoid(),
//             Artist: MusicList.Artist,
//             Title: MusicList.Title,
//             Genre: MusicList.Genre,
//             date: new Date().toISOString(),
//           },
//         };
//       },
//     },
//     updatedMusic(state, action) {
//       return produce(state, (draftstate) => {
//         draftstate.Artist = action.payload.Artist;
//         draftstate.Album = action.payload.Album;
//         draftstate.Title = action.payload.Title;
//         draftstate.Genre = action.payload.Genre;
//         // draftstate.Artist = action.payload.Artist;
//       });
//     },
//   },
// });
