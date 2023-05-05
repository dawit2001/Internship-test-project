import React from "react";
import Profile from "../assets/Profile.png";
import { Card, Image, Text } from "rebass";
import { MusicListStyle } from "../assets/Style";
import DateAdded from "./DateAdded";
import DeleteUpdateButton from "./DeleteUpdateButton";

function RenderMusicList({ music, Id }) {
  return (
    <Card sx={MusicListStyle.List}>
      <Image src={Profile} sx={MusicListStyle.Image} />
      <Text id="artist" sx={MusicListStyle.Text}>
        {music.Artist.toUpperCase()}
      </Text>
      <Text width={`25%`} sx={MusicListStyle.Text}>
        {music.Title.toUpperCase().substring(0, 30)}
      </Text>
      <Text sx={MusicListStyle.Text}>{music.Album.toUpperCase()}</Text>
      <Text sx={MusicListStyle.Text}>{music.Genre}</Text>

      <DateAdded timeStamp={music.Date} sx={MusicListStyle.DateText} />
      <DeleteUpdateButton sx={MusicListStyle.ButtonContainer} Id={Id} />
    </Card>
  );
}

export default RenderMusicList;
