import React from "react";
import { useParams } from "react-router-dom";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import sanitizeHtml from "sanitize-html";
import { GET_AUTHOR } from "../../graphql/querys";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

const AuthorPage = () => {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h1>Error ...</h1>;
  const {
    author: { avatar, name, description, field, posts },
  } = data;
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid container mt={12}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h4" fontWeight={700} mt={2}>
            {name}
          </Typography>
          <Typography component="h4" variant="h5" color="text.secondary" mt={2}>
            {field}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={4}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(description.html) }}
            style={{ textAlign: "justify" }}
          ></div>
        </Grid>
        <Grid container spacing={2} mt={4}>
          {posts.map((post) => (
            <Grid item xs={4} key={post.id}>
              <CardEL {...post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
