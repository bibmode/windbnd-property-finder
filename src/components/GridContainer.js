import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";

const GridContainer = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

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
