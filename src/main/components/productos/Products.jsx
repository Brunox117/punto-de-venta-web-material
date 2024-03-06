import { Grid } from "@mui/material";
import { Product } from "./Product";

export const Products = ({ products }) => {
  return (
    <Grid container justifyContent="center" alignContent="center" spacing={1}
    sx={{ml: 3}}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
