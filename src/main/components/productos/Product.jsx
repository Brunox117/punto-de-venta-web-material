import { Card, CardContent, CardMedia, Typography, Chip, Grid } from "@mui/material";

export const Product = ({ product}) => {
  const { name, price, imageUrl, categories } = product;

  return (
    <Grid item xs={6} sm={10} md={10} lg={10} sx={{mt: 4}}>
    <Card sx={{ borderRadius: '8px', boxShadow: 4, backgroundColor: '#faf5ee'}}>
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CardMedia
              sx={{ borderRadius: '8px', height: 180, width: 180, marginTop: 4 }}
              image={imageUrl}
              title={name}
              />
          </div>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Precio: ${price}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Categorías:
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: 1 }}>
          {categories.map((category, index) => (
            <Chip
            key={index}
            label={category}
            variant="outlined"
            style={{ backgroundColor: 'rgba(247, 126, 10, 0.15)', color: '#000', margin: 2 }}
            />
            ))}
        </div>
      </CardContent>
    </Card>
            </Grid>
  );
};
