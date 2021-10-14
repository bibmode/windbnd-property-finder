import { Box } from "@mui/system";
import { Container, Button, Typography, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import LocationsMenu from "./LocationsMenu";
import { useState } from "react";
import GuestsMenu from "./GuestsMenu";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      marginBlock: "93px 70px",
      paddingInline: "10px",
      overflow: "hidden",
    },
    box: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      border: `1px solid ${theme.palette.divider}`,
      bgcolor: "background.paper",
      borderRadius: "16px",
      color: "text.secondary",
      boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
      "& svg": {
        m: 1.5,
      },
      "& hr": {
        mx: 0.5,
      },
    },
    button: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "12px 26px",
      width: "33%",
      borderRadius: "16px",
      "&:hover, &:focus": {
        border: "1px solid #333333",
        margin: "-1px 0",
      },
    },
    label: {
      fontSize: "9px",
      fontWeight: "800",
      display: "block",
    },
    values: {
      fontSize: "14px",
      fontWeight: "normal",
      textTransform: "capitalize",
      textAlign: "left",
      // "@media only screen and (max-width: 527px)": {
      //   fontSize: "12px",
      // },
    },
    searchBtn: {
      textTransform: "capitalize",
      borderRadius: "16px",
      padding: "16px 27px",
      marginLeft: "50%",
      height: "100%",
      transform: "translateX(-50%)",
    },
    buttonContainer: {
      width: "33%",
    },
  };
});

const FilterDrawer = ({
  cities,
  location,
  toggleDrawer,
  changeCity,
  menu,
  adults,
  children,
  changeAdultsNum,
  changeChildrenNum,
  getFilteredData,
}) => {
  const classes = useStyles();

  const [pickedLocation, setPickedLocation] = useState(location);
  const [pickedMenu, setPickedMenu] = useState(menu);

  const [numAdults, setNumAdults] = useState(adults);
  const [numChildren, setNumChildren] = useState(children);

  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <Button
          onClick={() => setPickedMenu("locationsMenu")}
          className={classes.button}
        >
          <Typography className={classes.label} variant="h6">
            location
          </Typography>
          <Typography className={classes.values} variant="h6">
            {pickedLocation ? `${pickedLocation}, Finland` : "Add City"}
          </Typography>
        </Button>

        <Divider orientation="vertical" flexItem />

        <Button
          onClick={() => setPickedMenu("guestsMenu")}
          className={classes.button}
        >
          <Typography className={classes.label} variant="h6">
            guests
          </Typography>
          <Typography className={classes.values} variant="h6">
            {numAdults === 0 && numChildren === 0
              ? "Add"
              : `${numAdults + numChildren}`}{" "}
            guests
          </Typography>
        </Button>

        <Divider orientation="vertical" flexItem />

        <div className={classes.buttonContainer}>
          <Button
            className={classes.searchBtn}
            onClick={() => {
              toggleDrawer(false);
              changeCity(pickedLocation);
              changeAdultsNum(numAdults);
              changeChildrenNum(numChildren);
              getFilteredData(numAdults, numChildren, pickedLocation);
            }}
            variant="contained"
            color="secondary"
            sx={{
              boxShadow: 0,
            }}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </div>
      </Box>
      {pickedMenu === "locationsMenu" ? (
        <LocationsMenu
          cities={cities}
          pickCity={(city) => {
            setPickedLocation(city);
          }}
        />
      ) : (
        <GuestsMenu
          adults={numAdults}
          children={numChildren}
          changeAdults={(num) => setNumAdults(num)}
          changeChildren={(num) => setNumChildren(num)}
        />
      )}
    </Container>
  );
};

export default FilterDrawer;
