import { listPosts } from "../../graphql/queries";
import { Stack } from "@mui/system";
import useGetPosts from "../../hooks/useGetPosts";
import { usePostsStore } from "../../store/PostsStore";
import NewsItem from "./NewsItem";
import MainNewsItem from "./MainNewsItem";
import { useParams } from "react-router-dom";

export default function NewsByTag() {
  const { tag } = useParams();

  useGetPosts(listPosts);
  const posts = usePostsStore();
  const postsArray = posts?.listPosts?.items
    .map((post) => post)
    .sort(
      (postA, postB) => new Date(postB.updatedAt) - new Date(postA.updatedAt)
    );
  return (
    <div>
      {tag == "yleiset" ? (
        <div>
          <h2 div style={{ textAlign: "center" }}>
            Uutiset / Yleiset
          </h2>
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
                  if (index == 0) {
                    return <MainNewsItem key={index} post={post} />;
                  } else {
                    return <NewsItem key={index} post={post} />;
                  }
                })
            ) : (
              <h1>Loading...</h1>
            )}
          </Stack>
        </div>
      ) : (
        <div />
      )}
      {tag == "naisten-liiga" ? (
        <div>
          <h2 div style={{ textAlign: "center" }}>
            Uutiset / Naisten Liiga
          </h2>
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
                  if (index == 0) {
                    return <MainNewsItem key={index} post={post} />;
                  } else {
                    return <NewsItem key={index} post={post} />;
                  }
                })
            ) : (
              <h1>Loading...</h1>
            )}
          </Stack>
        </div>
      ) : (
        <div />
      )}
      {tag == "naisten-mestis" ? (
        <div>
          <h2 div style={{ textAlign: "center" }}>
            Uutiset / Naisten Mestis
          </h2>
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
                  if (index == 0) {
                    return <MainNewsItem key={index} post={post} />;
                  } else {
                    return <NewsItem key={index} post={post} />;
                  }
                })
            ) : (
              <h1>Loading...</h1>
            )}
          </Stack>
        </div>
      ) : (
        <div />
      )}
      {tag == "naisten-suomi-sarja" ? (
        <div>
          <h2 div style={{ textAlign: "center" }}>
            Uutiset / Naisten Suomi-sarja
          </h2>
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
                  if (index == 0) {
                    return <MainNewsItem key={index} post={post} />;
                  } else {
                    return <NewsItem key={index} post={post} />;
                  }
                })
            ) : (
              <h1>Loading...</h1>
            )}
          </Stack>
        </div>
      ) : (
        <div />
      )}
      {tag == "maajoukkueet" ? (
        <div>
          <h2 div style={{ textAlign: "center" }}>
            Uutiset / Maajoukkueet
          </h2>
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
                  if (index == 0) {
                    return <MainNewsItem key={index} post={post} />;
                  } else {
                    return <NewsItem key={index} post={post} />;
                  }
                })
            ) : (
              <h1>Loading...</h1>
            )}
          </Stack>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
