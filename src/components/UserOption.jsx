import React from "react";
import { userOptionsStyle } from "../assets/Style";
import { BiPlus, BiSearch } from "react-icons/bi";
import { Box, Card, Button, Text, Flex } from "rebass";
import { Input } from "@rebass/forms";

function UserOption() {
  return (
    <Flex sx={userOptionsStyle.ContainerFlex}>
      <Button sx={userOptionsStyle.Button}>
        <Flex>
          <BiPlus color="#0d0d0c"></BiPlus>
          <Text color={`white`}>Add Music</Text>
        </Flex>
      </Button>
      <Flex sx={userOptionsStyle.InputFlex}>
        <Input
          type="text"
          placeholder="search music"
          sx={userOptionsStyle.Input}
        />
        <BiSearch color="#6D7468" size={`20px`} />
      </Flex>
    </Flex>
  );
}

export default UserOption;
