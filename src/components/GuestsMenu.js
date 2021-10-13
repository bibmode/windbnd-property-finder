import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    category: {
      width: "33.33%",
      marginTop: "48px",
    },
    textDark: {
      fontSize: "14px",
      fontWeight: "700",
    },
    textLight: {
      fontSize: "14px",
      fontWeight: "400",
    },
    box: {
      display: "flex",
      alignItems: "center",
      marginTop: 12,
    },
    button: {
      width: "fit-content",
      minWidth: "0",
      padding: 0,
    },
    icon: {
      color: "#828282",
      fontSize: "20px",
      padding: 1,
      "&:hover": {
        color: "#333333",
      },
    },
  };
});

const GuestsMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* adults category */}
      <div className={classes.category}>
        <Typography className={classes.textDark}>Adults</Typography>
        <Typography className={classes.textLight} color="textSecondary">
          Ages 13 or above
        </Typography>
        <Box className={classes.box}>
          <Button className={classes.button} variant="outlined">
            <RemoveIcon className={classes.icon} />
          </Button>
          <Typography
            className={classes.textDark}
            sx={{
              paddingInline: 2,
            }}
          >
            0
          </Typography>
          <Button className={classes.button} variant="outlined">
            <AddIcon className={classes.icon} />
          </Button>
        </Box>
      </div>

      {/* kids category */}
      <div className={classes.category}>
        <Typography className={classes.textDark}>Children</Typography>
        <Typography className={classes.textLight} color="textSecondary">
          Ages 2-12
        </Typography>
        <Box className={classes.box}>
          <Button className={classes.button} variant="outlined">
            <RemoveIcon className={classes.icon} />
          </Button>
          <Typography
            className={classes.textDark}
            sx={{
              paddingInline: 2,
            }}
          >
            0
          </Typography>
          <Button className={classes.button} variant="outlined">
            <AddIcon className={classes.icon} />
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default GuestsMenu;
