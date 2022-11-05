import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../../graphql/querys";
import { Avatar, Divider, Grid, Typography } from "@mui/material";

const Authors = () => {
  const { loading, data, error } = useQuery(GET_AUTHORS);

  if (loading) return <h1>Loading ...</h1>;

  if (error) return <h1>Error ...</h1>;

  console.log(data);
  const { authors } = data;
  return (
    <Grid
      container
      sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)", borderRadius: 4 }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <a
              href={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </a>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Authors;
