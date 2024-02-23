import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import { Grid } from "@mui/material";

export const Post = ({ post }) => {
  const handleShareClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("¡La dirección se copió correctamente!");
      })
      .catch((error) => {
        console.error("Error al copiar la dirección:", error);
      });
  };

  return (
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: "8px",
        boxShadow: 4,
        backgroundColor: "#faf5ee",
        margin: "4px",
      }}
    >
      <Typography
        variant="h3"
        sx={{ textTransform: "uppercase", margin: "6px" }}
      >
        {post.title}
      </Typography>
      <Typography variant="subtitle1" sx={{ margin: "6px" }}>
        {post.date}
      </Typography>
      <CardMedia
        sx={{
          borderRadius: "8px",
          marginLeft: "10px",
          maxWidth: "calc(100% - 20px)",
          height: "calc(100% - 20px)",

          objectFit: "fill",
        }}
        component="img"
        height="500"
        image={post.imageUrl}
        alt={post.title}
      />

      <CardContent>
        <Typography variant="caption">{post.description}</Typography>
        <Typography variant="subtitle1" sx={{ mt: 5 }}>
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Autor: {post.autor}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton aria-label="share" onClick={handleShareClick}>
              <ShareIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
