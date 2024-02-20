import { Card, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";

export const Category = ({ category }) => {
  const { name, imageUrl } = category;

  return (
    <Grid item xs={6} sm={6} md={6} lg={10} sx={{mt: 4}}>
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
      </CardContent>
    </Card>
            </Grid>
  );
};
