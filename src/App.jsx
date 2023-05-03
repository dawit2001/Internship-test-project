import {
  UserOption,
  MusicList,
  MusicListInfoBar,
  Header,
  AddMusicForm,
  // UpdateMusicForm,
} from "./components";
import { useSelector } from "react-redux";
import { SelectState } from "./Slices/FormSlice";
import { AppStyle } from "./assets/Style";
import { Box, Card } from "rebass";
import logo from "./assets/logo.svg";
function App() {
  const formStates = useSelector(SelectState);
  // console.log(formStates);

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

// const fetchdata = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// fetchdata();

// const imgurl = URL.createObjectURL(logo);
// console.log(imgurl);
