import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import '../../../styles.css'
import { useTheme } from "@emotion/react";

export const Category = ({ category }) => {
  const { name, imageUrl } = category;
  const theme = useTheme();
  return (
    <Link
      to={`/productos?categoria=${category.name}`}
      style={{ textDecoration: "none" }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ margin: 1 }}>
        <Card
        class="card-category"
        >
          <div
            style={{
              marginTop: '1vh',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img class="img-category" src={imageUrl}/>
          </div>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="div" color={theme.palette.fonts.category}>
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Link>
  );
};
