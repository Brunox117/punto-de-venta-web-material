import {
  Card,
  CardContent,
  Typography,
  Chip,
  Grid,
} from "@mui/material";
import "./Product.css";
import { useTheme } from "@emotion/react";

export const Product = ({ product }) => {
  const theme = useTheme();
  const { name, price, imageUrl, categories } = product;

  return (
    <Grid item xs={11} sm={11} md={11} lg={11} sx={{ mt: 4 }}>
      <Card className="product-card">
        <div class="img-container">
          <img class="img-product" src={imageUrl} />
        </div>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div" color={theme.palette.fonts.product}>
            {name}
          </Typography>
          <Typography variant="body1" color={theme.palette.fonts.product}>
            Precio: ${price}
          </Typography>
          <Typography variant="body2" color={theme.palette.fonts.product}>
            Categorías:
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 4,
            }}
          >
            {categories.map((category, index) => (
              <Chip
                key={index}
                label={category}
                variant="outlined"
                style={{
                  backgroundColor: theme.palette.chip.main,
                  // backgroundColor: "rgba(247, 126, 10, 0.15)",
                  margin: 2,
                  color: theme.palette.fonts.product,
                }}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
