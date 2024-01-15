import { useEffect } from "react";
import { postsStore } from "../store/PostsStore";

import { Amplify, API, graphqlOperation } from "aws-amplify";
import { ListPostsQuery } from "../API";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

export default function useGetPosts(query: string) {
  console.log("[Alert] Fetching posts data from database");

  const getPostsData = async (query: string) => {
    try {
      const postsData = (await API.graphql(graphqlOperation(query))) as {
        data: ListPostsQuery;
      };

      postsStore.posts = postsData.data;

      console.log("[Success] AWS fetched posts");
    } catch (error) {
      console.error("[Warning] AWS: " + error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    getPostsData(query);

    // return cleanup function
    return () => {
      controller.abort();
    };
  }, [query]);
}
