import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { GET_POST } from "../../graphql/querys";
import Loader from "../shared/Loader";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitizeHtml from "sanitize-html";

const BlogPage = () => {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_POST, { variables: { slug } });
  const navigate = useNavigate();

  if (loading) return <Loader />;

  if (error) return <h1>Error ...</h1>;

  const {
    post: { author, title, coverImage, content },
  } = data;

  console.log(data);
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          mt={9}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            component="h2"
            variant="h4"
            fontWeight={700}
            color="primary"
          >
            {title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        <Box
          component="div"
          sx={{
            width: "100%",
            height: "700px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "40px",
            marginTop: 5,
            overflow: "hidden",
          }}
        >
          <img src={coverImage.url} style={{ width: "100%" }} />
        </Box>
        <Grid item xs={12} display="flex" alignItems="center" mt={5}>
          <Avatar
            src={author.avatar.url}
            sx={{ width: "80px", height: "80px", marginLeft: "20px" }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight="bold">
              {author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={4}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html)}}
            style={{ textAlign: "justify" }}
          ></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
