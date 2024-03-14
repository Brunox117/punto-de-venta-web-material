import { Card, CardContent, Typography, Chip, Grid } from "@mui/material";
import "./Discount.css";
import { useTheme } from "@emotion/react";

export const Discount = ({ discountedProduct }) => {
  const theme = useTheme();
  const { name, price, imageUrl, discount } = discountedProduct;
  const discountedPrice = price - (price * discount / 100);
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 4, position: "relative" }}>
      <Card sx={{backgroundColor: theme.palette.background.main,
              boxShadow: "none",
              width: "100%",
              height: "100%",
              mt: 2,
              mb: 2,
            }}>
        <div
          style={{
            position: "absolute",
            top: 8,
            right: 7,
          }}
        >
          <img
            width="60"
            height="60"
            src="https://img.icons8.com/fluency/48/hot-price.png"
            alt="hot-price"
          />
        </div>
        <div className="img-container">
          <img className="img-discount" src={imageUrl} />
        </div>
        <CardContent sx={{ textAlign: "center", marginTop: '4vh' }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color={theme.palette.fonts.product}
          >
            {name}
          </Typography>
          <Typography className="original-price" color={theme.palette.fonts.product}>
            Precio: ${price}
          </Typography>
          <Typography className="discount-price">
            Nuevo precio: ${discountedPrice.toFixed(2)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};