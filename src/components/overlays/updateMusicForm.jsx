import React, { useState } from "react";
import { AddformStyle } from "../../assets/Style";
import { FaImage, FaMusic } from "react-icons/fa";
import { Input, Label } from "@rebass/forms";
import { Box, Card, Button, Flex, Text } from "rebass";

const clickhandler = () => {
  console.log("clicked");
};
function UpdateMusicForm() {
  function changeHandler(event) {
    event.preventDefault();
    setName(event.target.value);
    console.log(name);
  }
  const [name, setName] = useState("music");
  return (
    <>
      <Box sx={AddformStyle.backdropBox} onClick={clickhandler}></Box>
      <Box sx={AddformStyle.container}>
        <Flex sx={AddformStyle.FormContainer}>
          <Box sx={AddformStyle.ImageBox}>
            <Label htmlFor="profile">
              <FaImage id="image" />
              <Text>Add picture</Text>
            </Label>
            <input
              type="file"
              id="profile"
              name="profile"
              accept="Image/*"
              hidden
              onChange={changeHandler}
            />
          </Box>

          <Box sx={AddformStyle.InputBox}>
            <Label>Artist</Label>
            <input
              name="artist"
              value={name}
              id="artist"
              type="text"
              onChange={changeHandler}
            />
            <Label>Song Title</Label>
            <input
              name="title"
              value={name}
              id="title"
              type="text"
              onChange={changeHandler}
            />
            <Label>Album</Label>
            <input
              name="album"
              value={name}
              id="album"
              type="text"
              onChange={changeHandler}
            />
            <Label>Genere</Label>
            <input
              name="genre"
              id="genre"
              type="text"
              value={name}
              onChange={changeHandler}
            />
            <Box sx={AddformStyle.audioBox}>
              <Label htmlFor="audio">
                <Text>Audio file</Text>
                <FaMusic size={`30px`} height={`30px`} id="AudioImg" />
              </Label>
              <input
                name=""
                id="audio"
                type="file"
                accept="audio/*"
                hidden
                onChange={changeHandler}
              />{" "}
            </Box>

            <Box sx={AddformStyle.ButtonBox}>
              <Button id="btn1" bg={`#37A2BA`}>
                ADD
              </Button>
              <Button id="btn2" bg={`#E01D1D`}>
                CANCEL
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default UpdateMusicForm;
