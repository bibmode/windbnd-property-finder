import { MenuList, MenuItem } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    menu: {
      marginTop: "34px",
    },
    item: {
      fontSize: "14px",
      padding: "14px 21px",
    },
    icon: {
      marginRight: "5px",
    },
  };
});

const LocationsMenu = ({ cities, pickCity }) => {
  const classes = useStyles();

  return (
    <MenuList className={classes.menu}>
      {cities &&
        [...cities].map((city, index) => {
          return (
            <MenuItem
              className={classes.item}
              key={index}
              onClick={() => pickCity(city)}
            >
              <RoomIcon className={classes.icon} /> {city}, Finland
            </MenuItem>
          );
        })}
    </MenuList>
  );
};

export default LocationsMenu;
