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
  return (
    <Card sx={{ maxWidth: "100%", mt: 5 }}>
      <Typography variant="h3" sx={{ textTransform: "uppercase" }}>
        {post.title}
      </Typography>
      <Typography variant="subtitle1">{post.date}</Typography>
      <CardMedia
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
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
