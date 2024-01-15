import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { listPosts } from "../../graphql/queries";
import useGetPosts from "../../hooks/useGetPosts";
import { usePostsStore } from "../../store/PostsStore";
import { useParams } from "react-router-dom";

export default function NewsArticle() {
  const { id } = useParams();

  // better way to do this (get the one post) would be to just make a new query "get post by id"
  useGetPosts(listPosts);
  const posts = usePostsStore();
  const postsArray = posts?.listPosts?.items
    .map((post) => post)
    .filter((post) => post.id == id);

  return (
    <>
      {postsArray ? (
        postsArray.map((post, index) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={index}
            >
              <Typography variant="h4" component="h1" sx={{ mt: 3 }}>
                {post.title}
              </Typography>
              <Typography variant="h6" sx={{ mt: 1, maxWidth: "1000px" }}>
                {post.lead}
              </Typography>
              {post.image !== "" ? (
                <Box
                  component="img"
                  src={
                    "https://kiekkoprojekti-images.s3.eu-central-1.amazonaws.com/" +
                    post.image
                  }
                  alt={post.title}
                  sx={{ width: "100%", maxWidth: "600px", mt: 3 }}
                />
              ) : (
                <></>
              )}

              <Typography variant="subtitle1" sx={{ mt: 3 }}>
                {post.writer !== "Kirjoittaja" ? post.writer + " | " : ""}
                {new Date(post.updatedAt).toLocaleDateString("en-GB")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 3,
                  width: "100%",
                  maxWidth: "1000px",
                  whiteSpace: "pre-wrap",
                }}
              >
                {post.text}
              </Typography>
            </Box>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
