import {
  Typography,
  Grid,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NewsItem({ post }) {
  const date = new Date(post.updatedAt).toLocaleDateString("en-GB");

  return (
    <>
      <Grid item xs={12} md={6}>
        <CardActionArea component={RouterLink} to={`/uutiset/${post.id}`}>
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography
                component="h1"
                variant="body2"
                color="inherit"
                gutterBottom
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundColor: "lightblue",
                  color: "black",
                  padding: { xs: 1, md: 1 },
                }}
              >
                {post.tag}
              </Typography>
              <Typography
                component="h2"
                variant="h5"
                sx={{ paddingTop: "30px" }}
              >
                {post.title}
              </Typography>
              <Typography
                component="h1"
                variant="body1"
                color="inherit"
                paragraph
              >
                {post.lead}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {date}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 160, display: { xs: "none", sm: "block" } }}
              image={
                "https://kiekkoprojekti-images.s3.eu-central-1.amazonaws.com/" +
                post.image
              }
              alt={post.title}
            />
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
}
