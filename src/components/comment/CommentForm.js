import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
import { Button, Grid, TextField, Typography } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const CommentForm = ({ slug }) => {
  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
    variables: {
      name: commentData.name,
      email: commentData.email,
      text: commentData.text,
      slug,
    },
  });

  useEffect(() => {
    if (data) {
      toast.success("نظر شما ارسال شد و منتظر تأیید می‌باشد", {
        position: "top-center",
      });
    }
  }, [data]);

  const changeHandeler = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
    console.log(data);
  };

  const sendHandeler = () => {
    if (commentData.name && commentData.email && commentData.text) {
      sendComment();
      setCommentData({
        name: "",
        email: "",
        text: "",
      });
    } else {
      toast.warn("لطفاَ کادر نظارت را تکمیل کنید", {
        position: "top-center",
      });
    }
  };

  return (
    <CacheProvider value={cacheRtl}>
      <Grid
        container
        sx={{
          boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
          borderRadius: 4,
          mt: 5,
          py: 1,
        }}
      >
        <Grid item xs={12} m={2}>
          <Typography
            component="p"
            variant="h6"
            fontWeight="bold"
            color="primary"
          >
            فرم ارسال نظرات
          </Typography>
        </Grid>
        <Grid item xs={12} m={2}>
          <TextField
            label="نام"
            variant="outlined"
            name="name"
            value={commentData.name}
            sx={{ width: "100%" }}
            onChange={changeHandeler}
          />
        </Grid>
        <Grid item xs={12} m={2}>
          <TextField
            label="ایمیل"
            variant="outlined"
            name="email"
            value={commentData.email}
            sx={{ width: "100%" }}
            onChange={changeHandeler}
          />
        </Grid>
        <Grid item xs={12} m={2}>
          <TextField
            label="متن کامنت"
            variant="outlined"
            name="text"
            value={commentData.text}
            sx={{ width: "100%" }}
            multiline
            minRows={4}
            onChange={changeHandeler}
          />
        </Grid>
        <Grid item xs={12} m={2}>
          {loading ? (
            <Button variant="contained" disabled>
              در حال ارسال ...
            </Button>
          ) : (
            <Button variant="contained" onClick={sendHandeler}>
              ارسال
            </Button>
          )}
        </Grid>
        <ToastContainer />
      </Grid>
    </CacheProvider>
  );
};

export default CommentForm;
