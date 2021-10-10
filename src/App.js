import "./App.css";
import { Container } from "@mui/material";
import GridHeader from "./components/GridHeader";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  palette: {
    text: {
      primary: "#333333",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
          <GridHeader />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
