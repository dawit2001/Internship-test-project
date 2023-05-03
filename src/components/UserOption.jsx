import { useDispatch } from "react-redux";
import { AddForm } from "../Slices/FormSlice";
import { userOptionsStyle } from "../assets/Style";
import { BiPlus, BiSearch } from "react-icons/bi";
import { Box, Card, Button, Text, Flex } from "rebass";
import { Input } from "@rebass/forms";

function UserOption() {
  const dispatch = useDispatch();

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
      <Flex sx={userOptionsStyle.InputFlex}>
        <Input
          type="text"
          placeholder="search music"
          sx={userOptionsStyle.Input}
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
