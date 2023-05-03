import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { AddForm } from "../Slices/FormSlice";
import { userOptionsStyle } from "../assets/Style";
import { BiPlus, BiSearch } from "react-icons/bi";
import { Box, Card, Button, Text, Flex } from "rebass";
import { Input } from "@rebass/forms";
import {
  searchMusic,
  selectMusicLists,
  InputSearchMusic,
} from "../Slices/MusicListSlice";

function UserOption() {
  const dispatch = useDispatch();
  const [searchedData, setSearchedData] = useState("");

  const onSearchMusic = (event) => {
    event.preventDefault();
    dispatch(searchMusic(searchedData));
    dispatch(InputSearchMusic(false));
  };
  const onInputFilled = (event) => {
    if (event.target.value !== "") {
      setSearchedData(event.target.value);
      dispatch(InputSearchMusic(true));
      dispatch(searchMusic(searchedData));
    } else {
      dispatch(InputSearchMusic(false));
    }
  };
  return (
    <Flex sx={userOptionsStyle.ContainerFlex}>
      <Button
        sx={userOptionsStyle.Button}
        onClick={() => {
          dispatch(AddForm(true));
        }}
      >
        <Flex>
          <BiPlus color="#0d0d0c"></BiPlus>
          <Text color={`white`}>Add Music</Text>
        </Flex>
      </Button>
      <Flex
        sx={userOptionsStyle.InputFlex}
        as={`form`}
        onSubmit={onSearchMusic}
      >
        <Input
          type="text"
          name={`search music`}
          placeholder="search music"
          sx={userOptionsStyle.Input}
          onChange={onInputFilled}
        />
        <BiSearch
          id="searchicon"
          color="#6D7468"
          size={`20px`}
          style={{ marginTop: `3px` }}
        />
      </Flex>
    </Flex>
  );
}

export default UserOption;
