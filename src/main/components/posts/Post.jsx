import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import { Grid } from "@mui/material";
import '../../../styles.css';
import { useTheme } from "@emotion/react";


export const Post = ({ post }) => {
  const theme = useTheme();

  return (
    <Card
    className="card-category"
      // sx={{
      //   maxWidth: "100%",
      //   borderRadius: "8px",
      //   boxShadow: 4,
      //   backgroundColor: "#faf5ee",
      //   margin: "4px",
      // }}
    >
      <Typography
        variant="h3"
        sx={{ textTransform: "uppercase", margin: "6px", color: theme.palette.fonts.product}}
      >
        {post.title}
      </Typography>
      <Typography variant="subtitle1" sx={{ margin: "6px", color: theme.palette.fonts.product }}>
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
        <Typography variant="caption" sx={{color: theme.palette.fonts.product}}>{post.description}</Typography>
        <Typography variant="subtitle1" sx={{ mt: 5, color: theme.palette.fonts.product }}>
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" sx={{color: theme.palette.fonts.product}}>
              Autor: {post.autor}
            </Typography>
          </Grid>
          
        </Grid>
      </CardActions>
    </Card>
  );
};
