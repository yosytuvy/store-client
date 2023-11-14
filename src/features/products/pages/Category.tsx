import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Filters from "../MUI/Filters";
import PriceFilter from "../MUI/PriceFilter";
import Products from "../components/Products";

interface CategoryProp {
  title: string;
  filters: string[];
}

const Category = ({ title, filters }: CategoryProp) => {
  const ex = ["a", "b", "c"];
  return (
    <>
      <Box textAlign="center" marginTop={2}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <PriceFilter />
      </Box>
      {filters.map((item, index) => (
        <Filters key={index} headline={item} values={ex} />
      ))}
      <Products />
    </>
  );
};

export default Category;