import React from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";

import { GET_POSTS } from "../../graphql/querys";
import CardEL from "../shared/CardEL";


const Blogs = () => {
  const { loading, data } = useQuery(GET_POSTS);
  console.log(data)

  if (loading) return  <h2>Loading ...</h2>

  if (data) return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}  >
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
