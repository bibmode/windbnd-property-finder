import "./App.css";
import { Container } from "@mui/material";
import GridHeader from "./components/GridHeader";
import GridContainer from "./components/GridContainer";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // smol phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
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
      secondary: "#828282",
    },
    secondary: {
      main: "#EB5757",
    },
    primary: {
      main: "#333333",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container sx={{ mb: "5rem" }}>
          <Header />
          <GridHeader />
          <GridContainer />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
