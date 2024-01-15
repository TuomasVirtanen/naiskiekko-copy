import { Box, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import { listPosts } from "../../graphql/queries";
import useGetPosts from "../../hooks/useGetPosts";
import { usePostsStore } from "../../store/PostsStore";
import PostsListItem from "../posts/PostsListItem";

export default function PostsList({ onDeletePost, onEditPost }) {
  function handleDeletePosts() {
    onDeletePost();
  }

  function handleEditPlayer() {
    onEditPost();
  }

  useGetPosts(listPosts);
  const posts = usePostsStore();
  const postsArray = posts?.listPosts?.items
    .map((post) => post)
    .sort(
      (postA, postB) => new Date(postB.updatedAt) - new Date(postA.updatedAt)
    );

  return (
    <Stack
      direction="column"
      divider={<Divider orientation="vertical" color="black" flexItem />}
      spacing={1}
    >
      {postsArray ? (
        postsArray
          .filter((post) => post._deleted !== true)
          .map((post, index) => {
            return (
              <PostsListItem
                key={index}
                post={post}
                onPostEdited={handleEditPlayer}
                onDeleteButtonPressed={handleDeletePosts}
              ></PostsListItem>
            );
          })
      ) : (
        <h1>Loading...</h1>
      )}
    </Stack>
  );
}
