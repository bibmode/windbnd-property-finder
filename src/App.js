import "./App.css";
import { Container } from "@mui/material";
import GridHeader from "./components/GridHeader";
import GridContainer from "./components/GridContainer";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import { useState, useEffect } from "react";

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
  const [location, setLocation] = useState(null);
  const [items, setItems] = useState([]);

  const changeCity = (city) => {
    setLocation(city);
  };

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const getFilteredData = async (children, adults, city) => {
    const response = await fetch("http://localhost:8000/data");
    const newData = await response.json();

    const totalGuests = children + adults;

    if (totalGuests === 0) {
      await setItems(newData.filter((property) => property.city === city));
    }

    if (totalGuests !== 0) {
      await setItems(
        newData.filter(
          (property) =>
            property.maxGuests === totalGuests && property.city === city
        )
      );
    }
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container sx={{ mb: "5rem" }}>
          <Header
            place={location}
            changeCity={(val) => changeCity(val)}
            getFilteredData={(children, adults, city) =>
              getFilteredData(children, adults, city)
            }
          />
          <GridHeader number={items.length} />
          <GridContainer items={items} />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
