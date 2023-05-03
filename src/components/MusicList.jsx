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
  const { MusicList, Loading, error } = useSelector(selectMusicLists);

  useEffect(() => {
    // console.log("dispatch called");
    dispatch(FetchMusicStart());
  }, [dispatch]);
  // console.log(MusicList);

  if (Loading) {
    return (
      <Box sx={MusicListStyle.Loadingstyle}>
        <Text>Loading...</Text>
      </Box>
    );
  }
  if (error) {
    return <div>{error}</div>;
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
      <Text width={`20%`}>{music.Genre}</Text>
      {/* <audio controls>
        <source type="audio/mpeg" />
      </audio> */}
      <DateAdded timeStamp={music.Date} sx={MusicListStyle.DateText} />
      <DeleteUpdateButton sx={MusicListStyle.ButtonContainer} Id={music.id} />
    </Card>
  ));
  return <Box sx={MusicListStyle.container}>{renderLists}</Box>;
}

export default MusicList;
