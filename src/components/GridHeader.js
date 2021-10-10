import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    bar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    text: {
      display: "inline",
    },
    text2: {
      display: "inline",
      color: "#4F4F4F",
    },
  };
});

const GridHeader = () => {
  const classes = useStyles();

  return (
    <Container className={classes.bar}>
      <Typography
        variant="h5"
        component="h1"
        fontWeight="fontWeightBold"
        align="left"
        className={classes.text}
        color="textPrimary"
      >
        Stays in Finland
      </Typography>

      <Typography className={classes.text2} align="right">
        12+ stays
      </Typography>
    </Container>
  );
};

export default GridHeader;
