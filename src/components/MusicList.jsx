import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMusicLists } from "../Slices/MusicListSlice";
import { MusicListStyle } from "../assets/Style";
import { FetchMusicStart } from "../Slices/MusicListSlice";
import { Box, Text } from "rebass";
import RenderMusicList from "./RenderMusicList";
import Messages from "./Messages";
function MusicList() {
  const dispatch = useDispatch();
  const {
    MusicList,
    searchedMusic,
    isSearching,
    Loading,
    error,
    FetchedDatakeys,
  } = useSelector(selectMusicLists);
  useEffect(() => {
    dispatch(FetchMusicStart());
  }, [dispatch]);

  // component to render searched musics

  let renderSearchMusic;
  if (searchedMusic && isSearching) {
    renderSearchMusic = searchedMusic.map((music, i) => {
      if (music) {
        return (
          <RenderMusicList
            key={FetchedDatakeys[i]}
            Id={FetchedDatakeys[i]}
            music={music}
          />
        );
      }
    });
  }

  // component to render  fetched music data

  const renderLists = MusicList.map((music, i) => (
    <RenderMusicList
      key={FetchedDatakeys[i]}
      Id={FetchedDatakeys[i]}
      music={music}
    />
  ));
  return (
    <Box sx={MusicListStyle.container}>
      {Loading && MusicList.length !== 0 && (
        <Messages sx={MusicListStyle.Loading} message={"Loading ..."} />
      )}
      {!isSearching && renderLists}
      {MusicList.length === 0 && !error && !Loading && (
        <Messages sx={MusicListStyle.NoMusicAdded} message={"NO MUSIC ..."} />
      )}
      {isSearching && renderSearchMusic}
      {error && (
        <Text
          sx={MusicListStyle.NoMusicAdded}
          bg={` #994646d9`}
          color={`#e88e8e`}
        >
          {error}
        </Text>
      )}
    </Box>
  );
}

export default MusicList;
