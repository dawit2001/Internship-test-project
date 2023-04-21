import React from "react";
import { css } from "@emotion/react";
import { FaImage, FaTimes } from "react-icons/fa";
import { Input, Label, Select } from "@rebass/forms";
import { Box, Card, Button, Flex, Text } from "rebass";
const AddformStyle = {
  container: css({
    backgroundColor: `#444E4B`,
  }),
  MusicImg: css({
    width: `20%`,
    height: ``,
  }),
};

function AddMusicForm() {
  return (
    <Box as={`form`} sx={AddformStyle.container}>
      <Flex>
        <Box>
          <Label htmlFor="profile">
            <FaImage />
            <Text>Add picture</Text>
          </Label>
          <input
            type="file"
            id="profile"
            name="profile"
            accept="Image/*"
            hidden
          ></input>
        </Box>

        <Box>
          <Card>
            <Label>Artist</Label>
            <Input></Input>
          </Card>
          <Card>
            <Label>Artist</Label>
            <Input></Input>
          </Card>
          <Card>
            <Label>Artist</Label>
            <Input></Input>
          </Card>
          <Card>
            <Label>Artist</Label>
            <Input></Input>
          </Card>
        </Box>
        <FaTimes />
      </Flex>
    </Box>
  );
}

export default AddMusicForm;
