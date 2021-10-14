import "./App.css";
import { Container, CircularProgress } from "@mui/material";
import GridHeader from "./components/GridHeader";
import GridContainer from "./components/GridContainer";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import { useState, useEffect } from "react";

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
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
  const [loading, setLoading] = useState(false);

  const changeCity = (city) => {
    setLocation(city);
  };

  const getAllProperties = () => {
    setLocation(null);
    setLoading(true);
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllProperties();
  }, []);

  const getFilteredData = async (children, adults, city) => {
    const response = await fetch("http://localhost:8000/data");
    const newData = await response.json();

    const totalGuests = children + adults;

    if (totalGuests === 0) {
      setItems(newData.filter((property) => property.city === city));
    }

    if (totalGuests !== 0) {
      if (!city)
        setItems(
          newData.filter((property) => property.maxGuests === totalGuests)
        );
      else {
        setItems(
          newData.filter(
            (property) =>
              property.maxGuests === totalGuests && property.city === city
          )
        );
      }
    }

    if (totalGuests === 0 && city === null) getAllProperties();
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
            showAll={() => getAllProperties()}
          />
          <GridHeader number={items.length} />
          {loading ? <CircularProgress /> : <GridContainer items={items} />}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
