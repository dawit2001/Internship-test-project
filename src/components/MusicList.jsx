import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMusicLists } from "../Slices/MusicListSlice";
import { MusicListStyle } from "../assets/Style";
import { FetchMusicStart } from "../Slices/MusicListSlice";
import logo from "../assets/logo.svg";
import { Image, Card, Box, Flex, Text, Button } from "rebass";
import DateAdded from "./DateAdded";
import DeleteUpdateButton from "./DeleteUpdateButton";
function MusicList() {
  const dispatch = useDispatch();
  const { MusicList, searchedMusic, isSearching, Loading, error } =
    useSelector(selectMusicLists);
  useEffect(() => {
    dispatch(FetchMusicStart());
  }, [dispatch]);

  // rendering searched Musics

  let renderSearchMusic;
  if (searchedMusic && isSearching) {
    renderSearchMusic = searchedMusic.map((music) => {
      if (music) {
        return (
          <Card sx={MusicListStyle.List} key={music.id}>
            <Image src={logo} sx={MusicListStyle.Image} />
            <Text width={`20%`} id="artist" sx={MusicListStyle.text}>
              {music.Artist}
            </Text>
            <Text width={`20%`} sx={MusicListStyle.Text}>
              {music.Title}
            </Text>
            <Text width={`20%`} sx={MusicListStyle.Text}>
              {music.Album}
            </Text>
            <Text width={`20%`} sx={MusicListStyle.text}>
              {music.Genre}
            </Text>
            {/* <audio controls>
      </audio> */}
            <DateAdded timeStamp={music.Date} sx={MusicListStyle.DateText} />
            <DeleteUpdateButton
              sx={MusicListStyle.ButtonContainer}
              Id={music.id}
            />
          </Card>
        );
      }
    });
  }

  const renderLists = MusicList.map((music) => (
    <Card sx={MusicListStyle.List} key={music.id}>
      <Image src={logo} sx={MusicListStyle.Image} />
      <Text width={`20%`} id="artist" sx={MusicListStyle.text}>
        {music.Artist}
      </Text>
      <Text width={`20%`} sx={MusicListStyle.Text}>
        {music.Title}
      </Text>
      <Text width={`20%`} sx={MusicListStyle.Text}>
        {music.Album}
      </Text>
      <Text width={`20%`} sx={MusicListStyle.text}>
        {music.Genre}
      </Text>
      {/* <audio controls>
        <source type="audio/mpeg" />
      </audio> */}
      <DateAdded timeStamp={music.Date} sx={MusicListStyle.DateText} />
      <DeleteUpdateButton sx={MusicListStyle.ButtonContainer} Id={music.id} />
    </Card>
  ));
  return (
    <Box sx={MusicListStyle.container}>
      {Loading && <div>Loading...</div>}
      {!isSearching && renderLists}
      {MusicList.length === 0 && (
        <Text width={`50%`} sx={MusicListStyle.text} color={`white`}>
          NO MUSIC PLEASE ENTER MUSIC
        </Text>
      )}
      {isSearching && renderSearchMusic}
      {error && <div>{error}</div>}
    </Box>
  );
}

export default MusicList;
