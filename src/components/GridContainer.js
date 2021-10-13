import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import PropertyCard from "./PropertyCard";

const GridContainer = ({ items: properties }) => {
  console.log(properties);
  return (
    <Grid container spacing={4}>
      {properties.length !== 0 ? (
        properties.map((property) => (
          <PropertyCard
            title={property.title}
            photo={property.photo}
            superHost={property.superHost}
            type={property.type}
            beds={property.beds}
            rating={property.rating}
            key={property.title}
          />
        ))
      ) : (
        <Grid
          item
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              marginTop: 5,
              color: grey[600],
            }}
          >
            ⛔ No properties found. Try again!
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default GridContainer;
