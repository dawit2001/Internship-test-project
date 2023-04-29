import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: `02`,
    Artist: `sam smith`,
    Title: `Blinding lights`,
    Album: `blinding lights`,
    Genre: `rock and roll`,
    date: `${new Date().toLocaleString("default", {
      month: "short",
    })}/${new Date().getDate()}/${new Date().getFullYear()}`,
  },
  {
    id: `01`,
    Artist: `The weekend`,
    Title: `Blinding lights `,
    Album: `blinding lights`,
    Genre: `rock and roll`,
    date: `${new Date().toLocaleString("default", {
      month: "short",
    })}/${new Date().getDate()}/${new Date().getFullYear()}`,
  },
  {
    id: `00`,
    Artist: `sam smith`,
    Title: `Blinding lights`,
    Album: `blinding lights`,
    Genre: `rock and roll`,
    date: `${new Date().toLocaleString("default", {
      month: "short",
    })}/${new Date().getDate()}/${new Date().getFullYear()}`,
  },
];

const MusicListSlice = createSlice({
  name: `Music Lists`,
  initialState,
  reducers: {
    musicAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(MusicList) {
        return {
          payload: {
            id: nanoid(),
            Artist: MusicList.Artist,
            Title: MusicList.Title,
            Genre: MusicList.Genre,
            date: MusicList.date,
          },
        };
      },
    },
  },
});

export const selectMusicLists = (state) => state.MusicLists;
export const { musicAdded } = MusicListSlice.actions;

export default MusicListSlice.reducer;
