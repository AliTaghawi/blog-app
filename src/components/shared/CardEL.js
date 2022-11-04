import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

const CardEL = ({ author, title, slug, coverImage }) => {
  return (
    <Card
      sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)", borderRadius: 4}}
    >
      <CardHeader
        avatar={<Avatar src={author.avatar.url} sx={{marginLeft: 2}} />}
        title={<Typography component="p" variant="p" color="text.secondary" fontWeight={600} >{author.name}</Typography>}
      />
      <CardMedia component="img" height='194' image={coverImage.url} alt={slug} />
      <CardContent>
        <Typography component="h3" variant="h6" fontWeight={600} color="text.primary">{title}</Typography>
      </CardContent>
      <Divider variant="middle" sx={{margin: "10px"}} />
      <CardActions>
        <Button variant="outlined" size="small" sx={{width: "100%", borderRadius: 2}}  >مطالعه مقاله</Button>
      </CardActions>
    </Card>
  );
};

export default CardEL;
