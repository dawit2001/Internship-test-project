import React, { useState } from "react";
import { AddformStyle } from "../../assets/Style";
import { FaImage, FaMusic } from "react-icons/fa";
import { Label } from "@rebass/forms";
import { Box, Button, Flex, Text } from "rebass";
import { useDispatch, useSelector } from "react-redux";
import { SelectState, UpdateForm } from "../../Slices/FormSlice";
import {
  selectMusicLists,
  updateMusicStart,
} from "../../Slices/MusicListSlice";
import { AddForm } from "../../Slices/FormSlice";
import Form from "./Form";

function UpdateMusicForm() {
  const dispatch = useDispatch();
  const { selectedId } = useSelector(SelectState);
  const { MusicList, Loading, error, FetchedDatakeys } =
    useSelector(selectMusicLists);

  // selected music
  const [currentMusic] = MusicList.filter(
    (music, i) => FetchedDatakeys[i] === selectedId
  );

  //
  const [updatedMusicList, setupdatedMusicList] = useState({
    id: currentMusic.id,
    Artist: currentMusic.Artist,
    Avatar: currentMusic.Avatar,
    Title: currentMusic.Title,
    Album: currentMusic.Album,
    Genre: currentMusic.Genre,
    Audio: currentMusic.Audio,
    Date: currentMusic.Date,
  });

  //handlind change of input values
  const inputChangeHandler = (event) => {
    switch (event.target.name) {
      case "artist":
        setupdatedMusicList((prevState) => ({
          ...prevState,
          Artist: event.target.value,
        }));
        break;
      case "title":
        setupdatedMusicList((prevState) => ({
          ...prevState,
          Title: event.target.value,
        }));
        break;
      case "album":
        setupdatedMusicList((prevState) => ({
          ...prevState,
          Album: event.target.value,
        }));
        break;
      case "genre":
        setupdatedMusicList((prevState) => ({
          ...prevState,
          Genre: event.target.value,
        }));
        break;
    }
  };

  // handling form submission
  const onUpdateForm = (event) => {
    event.preventDefault();
    if (updatedMusicList) {
      dispatch(updateMusicStart({ key: selectedId, data: updatedMusicList }));
    }
    setupdatedMusicList({});
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
          <Box sx={AddformStyle.InputBox}>
            <Label>Artist</Label>
            <input
              name="artist"
              value={updatedMusicList.Artist}
              id="artist"
              type="text"
              onChange={inputChangeHandler}
            />
            <Label>Song Title</Label>
            <input
              name="title"
              value={updatedMusicList.Title}
              id="title"
              type="text"
              onChange={inputChangeHandler}
            />
            <Label>Album</Label>
            <input
              name="album"
              value={updatedMusicList.Album}
              id="album"
              type="text"
              onChange={inputChangeHandler}
            />
            <Label>Genre</Label>
            <select
              id="genre"
              type="text"
              onChange={inputChangeHandler}
              name="genre"
              value={updatedMusicList.Genre}
            >
              <option></option>
              <option value={"Pop"}>Pop</option>
              <option value={"Hip-hop/Rap"}>Hip-hop/Rap</option>
              <option value={"Electronic/Dance"}>Electronic/Dance</option>
              <option value="R&B/Soul">R&B/Soul</option>
              <option value="Jazz">Jazz</option>
              <option value={"Reggae"}>Reggae</option>
              <option value={"Classical"}>Classical</option>
              <option value={"Latin"}>Latin</option>
              <option value={"Instrumental"}>Instrumental</option>
              <option value={"Opera"}>Opera</option>
              <option value={"Children's music"}>Children's music</option>
              <option value={"Ethiopian"}>Ethiopian</option>
            </select>

            <Box sx={AddformStyle.ButtonBox}>
              <Button id="btn1" bg={`#37A2BA`}>
                Update
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
