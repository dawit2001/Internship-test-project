import { UserOption, MusicList, MusicListInfoBar, Header } from "./components";
import AddMusicForm from "./components/overlays/AddMusicForm";
import { AppStyle } from "./assets/Style";
import { Box, Card } from "rebass";
function App() {
  return (
    <Card sx={AppStyle.card}>
      <Box className="App" sx={AppStyle.box}>
        <Header />
        <UserOption />
        {/* <AddMusicForm /> */}
        <MusicListInfoBar />
        <MusicList />
      </Box>
    </Card>
  );
}

export default App;
