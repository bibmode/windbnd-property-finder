import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
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

const PropertyCard = ({ title, photo, superHost, type, beds, rating }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} elevation={0} marginBottom="10px">
      <Card elevation={0} className={classes.card} sx={{ maxWidth: 395 }}>
        <CardMedia
          className={classes.image}
          component="img"
          alt="green iguana"
          height="269"
          src={photo}
        />
        <CardContent className={classes.tags}>
          {superHost && <div className={classes.superhost}>super host</div>}
          <Typography
            fontSize="14px"
            color="textSecondary"
            fontWeight="regular"
            marginRight="auto"
          >
            {type} {beds && `. ${beds} ${beds > 1 ? "beds" : "bed"}`}
          </Typography>
          <StarRateRoundedIcon
            color="secondary"
            sx={{
              mb: "3px",
            }}
          />
          <Typography>{rating}</Typography>
        </CardContent>
        <Typography noWrap align="left" width="80%" fontWeight="medium">
          {title}
        </Typography>
      </Card>
    </Grid>
  );
};

export default PropertyCard;
