import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { Post } from "./Post";

export const Posts = () => {
  const { posts } = useSelector((state) => state.firebase);
  return (
      <>
        {posts.map((post) => (
          <Grid item key={post.id}>
            <Post post={post}/>
          </Grid>
        ))}
        
      </>
  );
};
