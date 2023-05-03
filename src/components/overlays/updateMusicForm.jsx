import React, { useState } from "react";
import { AddformStyle } from "../../assets/Style";
import { FaImage, FaMusic } from "react-icons/fa";
import { Label } from "@rebass/forms";
import { Box, Button, Flex, Text } from "rebass";
import { useDispatch, useSelector } from "react-redux";
import { SelectState, UpdateForm } from "../../Slices/FormSlice";
import { selectMusicLists } from "../../Slices/MusicListSlice";
import { updatedMusic } from "../../Slices/MusicListSlice";
import { AddForm } from "../../Slices/FormSlice";

function UpdateMusicForm() {
  const dispatch = useDispatch();
  const currentId = useSelector(SelectState);
  const [currentMusic] = useSelector(selectMusicLists).filter(
    (music) => music.id === currentId.selectedId
  );
  const [MusicList, setMusicList] = useState({
    id: currentId.selectedId,
    Artist: currentMusic.Artist,
    Title: currentMusic.Title,
    Album: currentMusic.Album,
    Genre: currentMusic.Genre,
    date: currentMusic.date,
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
  const onUpdateForm = (event) => {
    event.preventDefault();
    if (MusicList) {
      dispatch(updatedMusic(MusicList));
    }
    setMusicList({});
    dispatch(AddForm(false));
    dispatch(UpdateForm(false));
  };

  return (
    <>
      <Box
        sx={AddformStyle.backdropBox}
        onClick={() => {
          dispatch(UpdateForm(false));
        }}
      ></Box>
      <Box sx={AddformStyle.container}>
        <Flex
          sx={AddformStyle.FormContainer}
          as={`form`}
          method="post"
          onSubmit={onUpdateForm}
        >
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
              onChange={inputChangeHandler}
            />
          </Box>

          <Box sx={AddformStyle.InputBox}>
            <Label>Artist</Label>
            <input
              name="artist"
              value={MusicList.Artist}
              id="artist"
              type="text"
              onChange={inputChangeHandler}
            />
            <Label>Song Title</Label>
            <input
              name="title"
              value={MusicList.Title}
              id="title"
              type="text"
              onChange={inputChangeHandler}
            />
            <Label>Album</Label>
            <input
              name="album"
              value={MusicList.Album}
              id="album"
              type="text"
              onChange={inputChangeHandler}
            />
            <Label>Genre</Label>
            <input
              name="genre"
              id="genre"
              type="text"
              value={MusicList.Genre}
              onChange={inputChangeHandler}
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
                onChange={inputChangeHandler}
              />{" "}
            </Box>

            <Box sx={AddformStyle.ButtonBox}>
              <Button id="btn1" bg={`#37A2BA`}>
                ADD
              </Button>
              <Button
                id="btn2"
                bg={`#E01D1D`}
                onClick={() => {
                  dispatch(UpdateForm(false));
                }}
              >
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
