import React from "react";
import { useSelector } from "react-redux";
import { selectMusicLists } from "../Slices/MusicListSlice";
import { MusicListStyle } from "../assets/Style";
import logo from "../assets/logo.svg";
import { MdDelete, MdEdit } from "react-icons/md";
import { Image, Card, Box, Flex, Text, Button } from "rebass";
function MusicList() {
  const MusicLists = useSelector(selectMusicLists);

  const renderLists = MusicLists.map((music) => (
    <Card sx={MusicListStyle.List} key={music.id}>
      <Image src={logo} sx={MusicListStyle.Image} />
      <Text width={`20%`} id="artist" sx={MusicListStyle.text}>
        {music.Artist}
      </Text>
      <Text width={`20%`} sx={MusicListStyle.Text}>
        {music.Title}
      </Text>
      <Text width={`20%`}>{music.Genre}</Text>
      <Text width={`25%`}>{music.date}</Text>
      <Card sx={MusicListStyle.ButtonContainer}>
        <Button bg={`transparent`} sx={{ cursor: `pointer` }}>
          <MdDelete size={`20px`} color={`gray`}></MdDelete>
          <Text fontSize={`10px`}>delete</Text>
        </Button>
        <Button bg={`transparent`} sx={{ cursor: `pointer` }}>
          <MdEdit size={`20px`} color={`gray`}></MdEdit>
          <Text fontSize={`10px`}>Edit</Text>
        </Button>
      </Card>
    </Card>
  ));
  return <Box sx={MusicListStyle.container}>{renderLists}</Box>;
}

export default MusicList;
