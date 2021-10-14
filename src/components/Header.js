import { Container, IconButton, Grid, Button, Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import logo from "../images/logo.svg";
import FilterDrawer from "./FilterDrawer";
import { useState, useEffect } from "react";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0",
      marginBlock: "40px 83px",
      [theme.breakpoints.down("sm")]: {
        marginBlock: "22px 37px",
      },
    },
    text: {
      textTransform: "capitalize",
      fontWeight: 500,
      padding: "19px 16px",
      paddingRight: "18px",
      marginRight: "-5px",
    },
    input: {
      width: "fit-content",
      maxWidth: "calc(84px + 24px)",
      fontSize: "14px",
      paddingInline: "14px",
    },
    logo: {
      backgroundColor: "transparent",
      cursor: "pointer",
      border: "none",
    },
    logoImage: {
      display: "flex",
      flexGrow: 1,
      justifyContent: "flex-start",
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(4),
      },
    },
  };
});

const Header = ({ place, getFilteredData, showAll }) => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const [cities, setCities] = useState([]);
  const [location, setLocation] = useState(place);
  const [menu, setMenu] = useState(null);

  const [numAdults, setNumAdults] = useState(0);
  const [numChildren, setNumChildren] = useState(0);

  const toggleDrawer = (open) => (event) => {
    setDrawer(open);
  };

  const openAndSetMenu = (menuVal) => {
    setMenu(menuVal);
    setDrawer(true);
  };

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((data) => {
        setCities(new Set(data.map((item) => item.city)));
      });
  }, []);

  return (
    <>
      <Container className={classes.container}>
        <Grid container>
          <Grid className={classes.logoImage} item>
            <button
              className={classes.logo}
              onClick={() => {
                setLocation(null);
                setNumAdults(0);
                setNumChildren(0);
                showAll();
              }}
            >
              <img src={logo} alt="logo" width="110px" />
            </button>
          </Grid>

          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "@media (max-width: 472px)": {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                border: (theme) => `1px solid ${theme.palette.divider}`,
                bgcolor: "background.paper",
                borderRadius: 4,
                color: "text.secondary",
                boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
                "& svg": {
                  m: 1.5,
                },
                "& hr": {
                  mx: 0.5,
                },
              }}
            >
              <Button
                onClick={() => openAndSetMenu("locationsMenu")}
                className={classes.text}
                sx={{
                  color: location ? "primary" : grey[400],
                  borderRadius: "16px 0 0 16px",
                }}
              >
                {location ? `${location}, Finland` : "Add city"}
              </Button>
              <Divider orientation="vertical" flexItem />

              <Button
                onClick={() => openAndSetMenu("guestsMenu")}
                className={classes.text}
                sx={{
                  color:
                    numChildren !== 0 || numAdults !== 0
                      ? "primary"
                      : grey[400],
                  marginLeft: "-5px",
                }}
              >
                {numChildren === 0 && numAdults === 0
                  ? "Add guests"
                  : `${numChildren + numAdults} Guests`}
              </Button>

              <Divider orientation="vertical" flexItem />
              <IconButton
                onClick={toggleDrawer(true)}
                sx={{
                  ml: -0.5,
                  borderRadius: "0 16px 16px 0",
                }}
                aria-label="search"
                size="small"
                color="secondary"
              >
                <SearchIcon
                  sx={{
                    fontSize: "28px",
                  }}
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Drawer
        anchor={"top"}
        open={drawer}
        onClose={toggleDrawer(false)}
        sx={{
          marginBlock: 5,
          boxShadow: 0,
        }}
      >
        <FilterDrawer
          cities={cities}
          toggleDrawer={(val) => {
            setDrawer(val);
          }}
          changeCity={(val) => {
            setLocation(val);
          }}
          location={location}
          menu={menu}
          adults={numAdults}
          children={numChildren}
          changeAdultsNum={(num) => setNumAdults(num)}
          changeChildrenNum={(num) => setNumChildren(num)}
          getFilteredData={(numAdults, numChildren, pickedLocation) =>
            getFilteredData(numAdults, numChildren, pickedLocation)
          }
        />
      </Drawer>
    </>
  );
};

export default Header;
