import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete, MdEdit } from "react-icons/md";
import { css } from "@emotion/react";
import { Card, Button, Text } from "rebass";
import { SelectState, SelectedId, UpdateForm } from "../Slices/FormSlice";
import { deleteMusicStart } from "../Slices/MusicListSlice";

function DeleteUpdateButton({ sx, Id }) {
  const dispatch = useDispatch();
  // const { selectedId } = useSelector(SelectState);
  // console.log(selectedId);
  return (
    <Card sx={sx}>
      <Button
        bg={`transparent`}
        sx={css`
          cursor: pointer;
          &:hover {
            background-color: #485a4f;
            border-radius: 10px;
          }
        `}
        onClick={() => {
          dispatch(SelectedId(Id));
          dispatch(deleteMusicStart(Id));
        }}
      >
        <MdDelete size={`20px`} color={`gray`}></MdDelete>
        <Text fontSize={`10px`}>delete</Text>
      </Button>
      <Button
        bg={`transparent`}
        sx={css`
          cursor: pointer;
          &:hover {
            background-color: #485a4f;
            border-radius: 10px;
          }
        `}
        onClick={() => {
          dispatch(UpdateForm(true));
          dispatch(SelectedId(Id));
        }}
      >
        <MdEdit size={`20px`} color={`gray`}></MdEdit>
        <Text fontSize={`10px`}>Edit</Text>
      </Button>
    </Card>
  );
}

export default DeleteUpdateButton;
