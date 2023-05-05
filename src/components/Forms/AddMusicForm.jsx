import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddForm } from "../../Slices/FormSlice";
import { addMusicStart } from "../../Slices/MusicListSlice";
import Form from "./Form";
import { AddformStyle } from "../../assets/Style";
import { FaImage, FaMusic } from "react-icons/fa";
import { Label } from "@rebass/forms";
import { Box, Button, Flex, Text } from "rebass";

function AddMusicForm() {
  const dispatch = useDispatch();
  const [MusicList, setMusicList] = useState({
    Avatar: "",
    Artist: "",
    Title: "",
    Album: "",
    Genre: "",
    Audio: "",
  });

  //handlind change of input values
  const inputChangeHandler = (event) => {
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
  };

  // handling form submission
  const onAddMusic = (event) => {
    event.preventDefault();
    if (MusicList) {
      dispatch(addMusicStart(MusicList));
    }
    dispatch(AddForm(false));
    setMusicList({});
  };

  return (
    <>
      <Form
        onInputHandler={inputChangeHandler}
        onAddMusic={onAddMusic}
        MusicList={MusicList}
      ></Form>
    </>
  );
}

export default AddMusicForm;
