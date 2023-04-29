import React from "react";
import { BarStyle } from "../assets/Style";
import { Box, Text, Flex } from "rebass";

function MusicListInfoBar() {
  return (
    <Box sx={BarStyle.container}>
      <Flex sx={BarStyle.lists}>
        <Text width={`20%`} id="artist" sx={BarStyle.text}>
          Artist
        </Text>
        <Text width={`20%`}>Title</Text>
        <Text width={`20%`}>Genre</Text>
        <Text width={`35%`}>Date added</Text>
      </Flex>
    </Box>
  );
}

export default MusicListInfoBar;
