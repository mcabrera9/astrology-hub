import "./App.css";
import Stack from "@mui/material/Stack";
// import AstroGallery from "./components/AstroGallery";

function Home() {
  return (
    <div className="App">
      <header className="App-header">Welcome home!</header>
      <Stack
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={2}
      >
        <div>Here you will find apps relating to astrology & productivity</div>
        <img src="https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </Stack>
    </div>
  );
}

export default Home;
