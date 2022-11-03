import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Authors from "./Authors";
import Blogs from "./Blogs";

const HomePage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} padding={3}>
          <Grid item xs={12} md={3} mt={4}>
            <Typography component="h2" variant="h5" fontWeight="bold" mb={3}>
              نویسنده‌ها
            </Typography>
            <Authors />
          </Grid>
          <Grid item xs={12} md={9} mt={4}>
            <Typography component="h2" variant="h5" fontWeight="bold" mb={3}>
              مقالات
            </Typography>
            <Blogs />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;