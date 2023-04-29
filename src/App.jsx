import {
  UserOption,
  MusicList,
  MusicListInfoBar,
  Header,
  AddMusicForm,
  UpdateMusicForm,
} from "./components";
import { AppStyle } from "./assets/Style";
import { Box, Card } from "rebass";
console.log(new Date().toLocaleString(`default`, { month: "short" }));
function App() {
  return (
    <Card sx={AppStyle.card}>
      <Box className="App" sx={AppStyle.box}>
        <Header />
        <UserOption />
        <AddMusicForm />
        <MusicListInfoBar />
        <MusicList />
        {/* <UpdateMusicForm /> */}
      </Box>
    </Card>
  );
}

export default App;
