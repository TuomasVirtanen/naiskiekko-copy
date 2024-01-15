import { listPosts } from "../../graphql/queries";
import { Stack } from "@mui/system";
import useGetPosts from "../../hooks/useGetPosts";
import { usePostsStore } from "../../store/PostsStore";
import MainNewsItem from "./MainNewsItem";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function News() {
  useGetPosts(listPosts);
  const posts = usePostsStore();
  const postsArray = posts?.listPosts?.items
    .map((post) => post)
    .sort(
      (postA, postB) => new Date(postB.updatedAt) - new Date(postA.updatedAt)
    );
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Uutiset / Yleiset</h2>
      <div style={{ textAlign: "center" }}>
        <Button
          sx={{ marginBottom: 3 }}
          component={RouterLink}
          to={`/uutiset/kategoria/yleiset`}
          variant="subtitle1"
        >
          Katso kaikki yleiset uutiset
        </Button>
      </div>
      <Stack
        direction="column"
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // targeting all the direct children of the Stack component and telling them to expand to the full width of their parent container
          "& > *": {
            width: "100%",
            maxWidth: "1200px",
          },
        }}
      >
        {postsArray ? (
          postsArray
            .filter(
              (post) =>
                post._deleted !== true &&
                post.tag.toLowerCase() !== "naisten liiga" &&
                post.tag.toLowerCase() !== "naisten mestis" &&
                post.tag.toLowerCase() !== "naisten suomi-sarja" &&
                post.tag.toLowerCase() !== "naisleijonat" &&
                post.tag.toLowerCase() !== "tytöt u-18"
            )
            .map((post, index) => {
              if (index < 3) {
                return <MainNewsItem key={index} post={post} />;
              } else {
                return <></>;
              }
            })
        ) : (
          <h1>Loading...</h1>
        )}
      </Stack>
      <h2 style={{ textAlign: "center" }}>Uutiset / Naisten Liiga</h2>
      <div style={{ textAlign: "center" }}>
        <Button
          sx={{ marginBottom: 3 }}
          component={RouterLink}
          to={`/uutiset/kategoria/naisten-liiga`}
          variant="subtitle1"
        >
          Katso kaikki Naisten Liigan uutiset
        </Button>
      </div>

      <Stack
        direction="column"
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // targeting all the direct children of the Stack component and telling them to expand to the full width of their parent container
          "& > *": {
            width: "100%",
            maxWidth: "1200px",
          },
        }}
      >
        {postsArray ? (
          postsArray
            .filter(
              (post) =>
                post._deleted !== true &&
                post.tag.toLowerCase() == "naisten liiga"
            )
            .map((post, index) => {
              if (index < 3) {
                return <MainNewsItem key={index} post={post} />;
              } else {
                return <></>;
              }
            })
        ) : (
          <h1>Loading...</h1>
        )}
      </Stack>
      <h2 style={{ textAlign: "center" }}>Uutiset / Naisten Mestis</h2>
      <div style={{ textAlign: "center" }}>
        <Button
          sx={{ marginBottom: 3 }}
          component={RouterLink}
          to={`/uutiset/kategoria/naisten-mestis`}
          variant="subtitle1"
        >
          Katso kaikki Naisten Mestiksen uutiset
        </Button>
      </div>
      <Stack
        direction="column"
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // targeting all the direct children of the Stack component and telling them to expand to the full width of their parent container
          "& > *": {
            width: "100%",
            maxWidth: "1200px",
          },
        }}
      >
        {postsArray ? (
          postsArray
            .filter(
              (post) =>
                post._deleted !== true &&
                post.tag.toLowerCase() == "naisten mestis"
            )
            .map((post, index) => {
              if (index < 3) {
                return <MainNewsItem key={index} post={post} />;
              } else {
                return <></>;
              }
            })
        ) : (
          <h1>Loading...</h1>
        )}
      </Stack>
      <h2 style={{ textAlign: "center" }}>Uutiset / Naisten Suomi-sarja</h2>
      <div style={{ textAlign: "center" }}>
        <Button
          sx={{ marginBottom: 3 }}
          component={RouterLink}
          to={`/uutiset/kategoria/naisten-suomi-sarja`}
          variant="subtitle1"
        >
          Katso kaikki Naisten Suomi-sarjan uutiset
        </Button>
      </div>
      <Stack
        direction="column"
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // targeting all the direct children of the Stack component and telling them to expand to the full width of their parent container
          "& > *": {
            width: "100%",
            maxWidth: "1200px",
          },
        }}
      >
        {postsArray ? (
          postsArray
            .filter(
              (post) =>
                post._deleted !== true &&
                post.tag.toLowerCase() == "naisten suomi-sarja"
            )
            .map((post, index) => {
              if (index < 3) {
                return <MainNewsItem key={index} post={post} />;
              } else {
                return <></>;
              }
            })
        ) : (
          <h1>Loading...</h1>
        )}
      </Stack>
      <h2 style={{ textAlign: "center" }}>Uutiset / Maajoukkueet</h2>
      <div style={{ textAlign: "center" }}>
        <Button
          sx={{ marginBottom: 3 }}
          component={RouterLink}
          to={`/uutiset/kategoria/maajoukkueet`}
          variant="subtitle1"
        >
          Katso kaikki maajoukkueen uutiset
        </Button>
      </div>
      <Stack
        direction="column"
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // targeting all the direct children of the Stack component and telling them to expand to the full width of their parent container
          "& > *": {
            width: "100%",
            maxWidth: "1200px",
          },
        }}
      >
        {postsArray ? (
          postsArray
            .filter(
              (post) =>
                post._deleted !== true &&
                (post.tag.toLowerCase() == "naisleijonat" ||
                  post.tag.toLowerCase() == "tytöt u-18")
            )
            .map((post, index) => {
              if (index < 3) {
                return <MainNewsItem key={index} post={post} />;
              } else {
                return <></>;
              }
            })
        ) : (
          <h1>Loading...</h1>
        )}
      </Stack>
    </div>
  );
}
