import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { musicAdded } from "../../Slices/MusicListSlice";

import { AddformStyle } from "../../assets/Style";
import { FaImage, FaTimes, FaMusic } from "react-icons/fa";
import { Input, Label } from "@rebass/forms";
import { Box, Card, Button, Flex, Text } from "rebass";

function AddMusicForm() {
  const dispatch = useDispatch();
  const [MusicList, setMusicList] = useState({
    Artist: "",
    Title: "",
    Album: "",
    Genre: "",
    date: "",
  });

  //handlind change of input values
  const inputChangeHandler = (event) => {
    console.log("inputchangehandler");
    switch (event.target.name) {
      case "artist":
        setMusicList((prevState) => ({
          ...prevState,
          Artist: event.target.value,
        }));
        break;
      case "title":
        setMusicList((prevState) => ({
          ...prevState,
          Title: event.target.value,
        }));
        break;
      case "album":
        setMusicList((prevState) => ({
          ...prevState,
          Album: event.target.value,
        }));
        break;
      case "genre":
        setMusicList((prevState) => ({
          ...prevState,
          Genre: event.target.value,
        }));
        break;
    }
    setMusicList((prevState) => ({
      ...prevState,
      date: `${new Date().toLocaleString("default", {
        month: "short",
      })}/${new Date().getDate()}/${new Date().getFullYear()}`,
    }));
  };

  // handling form submission
  const onAddMusic = (event) => {
    event.preventDefault();
    if (MusicList) {
      dispatch(musicAdded(MusicList));
    }
    setMusicList({});
  };
  const canAdd =
    Boolean(MusicList.Artist) &&
    Boolean(MusicList.Album) &&
    Boolean(MusicList.Title) &&
    Boolean(MusicList.Genre);

  return (
    <>
      <Box sx={AddformStyle.backdropBox}></Box>
      <Box sx={AddformStyle.container}>
        <Flex sx={AddformStyle.FormContainer} as={`form`} onSubmit={onAddMusic}>
          <Box sx={AddformStyle.ImageBox}>
            <Label htmlFor="profile">
              <FaImage size={`100px`} />
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

          <Box sx={AddformStyle.InputBox}>
            <Label>Artist</Label>
            <input
              id="artist"
              type="text"
              onChange={inputChangeHandler}
              name="artist"
            />
            <Label>Song Title</Label>
            <input
              id="title"
              type="text"
              onChange={inputChangeHandler}
              name="title"
            ></input>
            <Label>Album</Label>
            <input
              id="album"
              type="text"
              onChange={inputChangeHandler}
              name="album"
            ></input>
            <Label>Genere</Label>
            <input
              id="genre"
              type="text"
              onChange={inputChangeHandler}
              name="genre"
            ></input>
            <Box sx={AddformStyle.audioBox}>
              <Label htmlFor="audio">
                <Text>Audio file</Text>
                <FaMusic size={`30px`} height={`30px`} id="AudioImg" />
              </Label>
              <input id="audio" type="file" accept="audio/*" hidden></input>
            </Box>

            <Box sx={AddformStyle.ButtonBox}>
              <Button
                id="btn1"
                width={`100px`}
                bg={`#37A2BA`}
                onClick={onAddMusic}
                disabled={!canAdd}
              >
                ADD
              </Button>
              <Button id="btn2" width={`110px`} bg={`#E01D1D`}>
                CANCEL
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default AddMusicForm;
