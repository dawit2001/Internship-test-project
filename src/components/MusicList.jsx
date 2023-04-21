import React from "react";
import { MusicListStyle } from "../assets/Style";
import logo from "../assets/logo.svg";
import { MdDelete, MdEdit } from "react-icons/md";

import { Image, Card, Box, Flex, Text, Button } from "rebass";
function MusicList() {
  return (
    <Box sx={MusicListStyle.container}>
      <Card sx={MusicListStyle.List}>
        <Image src={logo} sx={MusicListStyle.Image} />
        <Text width={`20%`}>The Weekend</Text>
        <Text width={`20%`} sx={MusicListStyle.Text}>
          BlindingLightaksjdfhkjhfsds
        </Text>
        <Text width={`20%`}>rock and roll</Text>
        <Text width={`25%`}>Aug 3 </Text>
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
    </Box>
  );
}

export default MusicList;
