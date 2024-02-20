import { Grid } from "@mui/material";
import { Product } from "./Product";

export const Products = ({products}) => {
  return (
      <Grid container justifyContent="center" sx={{
        padding: {
          xs: 0, // Para tamaños de pantalla extra pequeños
          sm: 2, // Para tamaños de pantalla pequeños
          md: 12, // Para tamaños de pantalla medianos
          lg: 4, // Para tamaños de pantalla grandes
          xl: 5 // Para tamaños de pantalla extra grandes
        },
        ml: {
          xs: 12, // Margen izquierdo para tamaños de pantalla extra pequeños
          sm: 3, // Margen izquierdo para tamaños de pantalla pequeños
          md: 4, // Margen izquierdo para tamaños de pantalla medianos
          lg: 5, // Margen izquierdo para tamaños de pantalla grandes
          xl: 4 // Margen izquierdo para tamaños de pantalla extra grandes
        }
      }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Product product={product}/>
          </Grid>
        ))}
        
      </Grid>
  );
};
