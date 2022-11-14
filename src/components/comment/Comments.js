import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_COMMENTS } from "../../graphql/querys";

const Comments = ({ slug }) => {
  const { loading, data, error } = useQuery(GET_COMMENTS, {
    variables: { slug },
  });

  if (loading) return null;

  if (error) return <div>Error ...</div>;

  console.log(data);
  return (
    <div>
      <Grid
        container
        sx={{
          boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
          borderRadius: 4,
          py: 1,
          mt: 5,
        }}
      >
        <Grid item m={2}>
          <Typography
            component="p"
            variant="h6"
            fontWeight={700}
            color="primary"
          >
            کامنت‌ها
          </Typography>
        </Grid>
        {data.comments.length ? (
          data.comments.map((comment) => (
            <Grid
              item
              xs={12}
              key={comment.id}
              sx={{ border: "1px solid silver", borderRadius: 2, p: 2, m: 2 }}
            >
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Avatar>{comment.name[0]}</Avatar>
                <Typography
                  component="span"
                  variant="p"
                  fontWeight={700}
                  mr={1}
                >
                  {comment.name}
                </Typography>
              </Box>
              <Typography component="p" variant="p" mt={2}>
                {comment.text}
              </Typography>
            </Grid>
          ))
        ) : (
          <Grid item xs={12} m={2}>
            <Typography component="p" variant="p">
              هیچ کامنتی برای این پست مندرج نشده است.
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Comments;
