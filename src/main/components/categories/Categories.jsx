import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import { Category } from "./Category";
import { Title } from "../titles/Title";

export const Categories = () => {
  const { categories } = useSelector((state) => state.firebase);

  return (
    
      <>
        <Box
          display="flex"
          padding="20px"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Title title={"Nuestros"} subtitle={"Productos"} />
        </Box>
        <Grid container justifyContent="center" spacing={2} sx={{mb: 3}}>
          {categories.map((category) => (
            <Grid item key={category.id} xs={12} sm={5} md={6} lg={3} xl={2}>
              <Category category={category} />
            </Grid>
          ))}
        </Grid>
      </>

  );
};
