import React from "react";
import { useDispatch } from "react-redux";
import { MdDelete, MdEdit } from "react-icons/md";
import { css } from "@emotion/react";
import { Card, Button, Text } from "rebass";
import { SelectedId, UpdateForm } from "../Slices/FormSlice";

function DeleteUpdateButton({ sx, Id }) {
  const dispatch = useDispatch();
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
