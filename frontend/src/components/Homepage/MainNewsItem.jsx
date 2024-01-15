import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";

function MainNewsItem({ post }) {
  const date = new Date(post.updatedAt).toLocaleDateString("en-GB");
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${
          "https://kiekkoprojekti-images.s3.eu-central-1.amazonaws.com/" +
          post.image
        })`,
      }}
    >
      {
        <img
          style={{ display: "none" }}
          src={
            "https://kiekkoprojekti-images.s3.eu-central-1.amazonaws.com/" +
            post.image
          }
          alt={post.title}
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 3 },
              pr: { md: 0 },
            }}
          >
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
              component="h1"
              variant="h5"
              color="inherit"
              gutterBottom
              sx={{ paddingTop: "30px" }}
            >
              {post.title}
            </Typography>
            <Typography component="h1" variant="h6" color="inherit" paragraph>
              {post.lead}
            </Typography>
            <Typography variant="subtitle1" color="inherit">
              {date}
            </Typography>
            <Link
              component={RouterLink}
              to={`/uutiset/${post.id}`}
              variant="subtitle1"
            >
              Jatka lukemista...
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainNewsItem;
