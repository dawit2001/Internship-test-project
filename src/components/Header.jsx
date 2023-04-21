import React from "react";
import logo from "../assets/logo.svg";
import { Headercss } from "../assets/Style";
import { Card, Box, Image, Heading, Flex } from "rebass";

function Header() {
  console.log("header");
  return (
    <Card sx={Headercss.Header}>
      <Image src={logo} sx={Headercss.Logo} />
      <Heading sx={Headercss.Title}>Addis Music List</Heading>
    </Card>
  );
}

export default Header;
