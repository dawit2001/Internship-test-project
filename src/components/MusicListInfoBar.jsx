import React from "react";
import { BarStyle } from "../assets/Style";
import { Box, Text, Flex } from "rebass";

function MusicListInfoBar() {
  return (
    <Box sx={BarStyle.container}>
      <Flex sx={BarStyle.lists}>
        <Text ml={`120px`} width={`20%`}>
          Artist
        </Text>
        <Text width={`20%`}>Title</Text>
        <Text width={`20%`}>Genere</Text>
        <Text width={`35%`}>Date added</Text>
      </Flex>
    </Box>
  );
}

export default MusicListInfoBar;
