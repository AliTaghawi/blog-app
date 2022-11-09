import React from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";

import { GET_POSTS } from "../../graphql/querys";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";


const Blogs = () => {
  const { loading, data, error } = useQuery(GET_POSTS);
  
  if (loading) return <Loader />;
  
  if (error) return <h1>Error ...</h1>;
  
  console.log(data)
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
