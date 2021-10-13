import { Grid } from "@mui/material";
import { useState } from "react";
import PropertyCard from "./PropertyCard";

const GridContainer = ({ items }) => {
  const [properties, setProperties] = useState(items);

  return (
    <Grid container spacing={4}>
      {properties.map((property) => (
        <PropertyCard
          title={property.title}
          photo={property.photo}
          superHost={property.superHost}
          type={property.type}
          beds={property.beds}
          rating={property.rating}
          key={property.title}
        />
      ))}
    </Grid>
  );
};

export default GridContainer;
