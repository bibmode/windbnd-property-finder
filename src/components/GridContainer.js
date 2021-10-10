import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    card: {
      margin: "0",
    },
    image: {
      borderRadius: "24px",
    },
    superhost: {
      borderRadius: "12px",
      color: "#4F4F4F",
      fontWeight: "700",
      border: "1px solid #4F4F4F",
      padding: "7px 9px",
      marginRight: "11px",
      width: "fit-content",
      textTransform: "uppercase",
      fontFamily: "Montserrat",
      fontSize: "12px",
    },
    tags: {
      paddingInline: "0",
      display: "flex",
      alignItems: "center",
    },
  };
});

const GridContainer = () => {
  const classes = useStyles();

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <Grid container spacing={3}>
      {properties.map((property) => (
        <Grid item xs={12} sm={6} md={4} key={property.title} elevation={0}>
          <Card elevation={0} className={classes.card} sx={{ maxWidth: 395 }}>
            <CardMedia
              className={classes.image}
              component="img"
              alt="green iguana"
              height="269"
              src={property.photo}
            />
            <CardContent className={classes.tags}>
              {property.superHost && (
                <div className={classes.superhost}>super host</div>
              )}
              <Typography
                fontSize="14px"
                color="textSecondary"
                fontWeight="regular"
                marginRight="auto"
              >
                {property.type}{" "}
                {property.beds &&
                  `. ${property.beds} ${property.beds > 1 ? "beds" : "bed"}`}
              </Typography>
              <StarRateRoundedIcon color="secondary" />
              <Typography>{property.rating}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridContainer;
