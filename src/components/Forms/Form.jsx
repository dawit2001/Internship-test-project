import React from "react";
import { Box, Flex, Button } from "rebass";
import { Label } from "@rebass/forms";
import { AddForm } from "../../Slices/FormSlice";
import { AddformStyle } from "../../assets/Style";
import { useDispatch } from "react-redux";

function Form({ onAddMusic, onInputHandler, MusicList }) {
  const dispatch = useDispatch();

  const InputHandler = (event) => {
    onInputHandler(event);
  };
  const AddMusic = (event) => {
    onAddMusic(event);
  };
  const canAdd =
    Boolean(MusicList.Artist) &&
    Boolean(MusicList.Album) &&
    Boolean(MusicList.Title) &&
    Boolean(MusicList.Genre);
  return (
    <>
      <Box
        sx={AddformStyle.backdropBox}
        onClick={() => {
          dispatch(AddForm(false));
        }}
      ></Box>
      <Box sx={AddformStyle.container}>
        <Flex
          sx={AddformStyle.FormContainer}
          as={`form`}
          onSubmit={AddMusic}
          method="post"
        >
          <Box sx={AddformStyle.InputBox}>
            <Label>Artist</Label>
            <input
              id="artist"
              type="text"
              onChange={InputHandler}
              name="artist"
            />
            <Label>Song Title</Label>
            <input
              id="title"
              type="text"
              onChange={InputHandler}
              name="title"
            ></input>
            <Label>Album</Label>
            <input
              id="album"
              type="text"
              onChange={InputHandler}
              name="album"
            ></input>
            <Label>Genre</Label>
            <select id="genre" type="text" onChange={InputHandler} name="genre">
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
              <Button
                id="btn1"
                width={`100px`}
                bg={`#37A2BA`}
                onClick={AddMusic}
                disabled={!canAdd}
              >
                ADD
              </Button>
              <Button
                id="btn2"
                width={`110px`}
                bg={`#E01D1D`}
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(AddForm(false));
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

export default Form;
