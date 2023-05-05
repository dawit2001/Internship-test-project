import {
  UserOption,
  MusicList,
  MusicListInfoBar,
  Header,
  AddMusicForm,
  UpdateMusicForm,
} from "./components";
// import axios from "axios";
import { useSelector } from "react-redux";
import { SelectState } from "./Slices/FormSlice";
import { AppStyle } from "./assets/Style";
import { Box, Card } from "rebass";
import axios from "axios";
// import { nanoid } from "@reduxjs/toolkit";

function App() {
  const formStates = useSelector(SelectState);

  return (
    <Card sx={AppStyle.card}>
      <Box className="App" sx={AppStyle.box}>
        <Header />
        <UserOption />
        {formStates.isMusicAdded && <AddMusicForm />}
        <MusicListInfoBar />
        <MusicList />
        {formStates.isMusicUpdated && <UpdateMusicForm />}
      </Box>
    </Card>
  );
}

export default App;
const data1 = {
  Artist: " dawit tsige",
  Album: "come on man",
  Title: "ethiopia",
  Audio: "",
  Date: "2023-05-03T13:52:37.626Z",
  Genre: " reggae",
  id: "VC_mWMFxVX6jIZz",
};

// const getdata = async () => {
//   const response = await axios.get(
//     "https://internship-project-54a7e-default-rtdb.firebaseio.com/music.json?Album"
//   );
//   console.log(response);
// };
// getdata();
