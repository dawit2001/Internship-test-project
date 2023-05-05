import React from "react";
import { Text } from "rebass";

function Messages({ sx, message }) {
  return <Text sx={sx}>{message}</Text>;
}

export default Messages;
