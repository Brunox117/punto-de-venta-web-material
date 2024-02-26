import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import { Category } from "./Category";
import { Title } from "../titles/Title";

export const Categories = () => {
  const { categories } = useSelector((state) => state.firebase);

  return (
    
      <div style={{ backgroundColor: "#f5e8db" }}>
        <Box
          display="flex"
          padding="20px"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Title title={"Nuestros"} subtitle={"Productos"} />
        </Box>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: {
              xs: 0,
              sm: 2,
              md: 12,
              lg: 4,
              xl: 5,
            },
            ml: {
              xs: 12,
              sm: 3,
              md: 4,
              lg: 5,
              xl: 4,
            },
            mb: 2,
          }}
        >
          {categories.map((category) => (
            <Grid item key={category.id} xs={12} sm={6} md={4} lg={3} xl={2}>
              <Category category={category} />
            </Grid>
          ))}
        </Grid>
      </div>

  );
};
