import Masonry from "@mui/lab/Masonry";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { Post } from "./Post";

export const Posts = () => {
  const { posts } = useSelector((state) => state.firebase);
  return (
    <>
      <Masonry columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3}} sx={{mt: 4, mb: 4}} spacing={2}>
        {posts.map((post) => (
          <Grid item key={post.id}>
            <Post post={post} />
          </Grid>
        ))}
      </Masonry>
    </>
  );
};
