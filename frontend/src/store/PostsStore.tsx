// valtio imports
import { proxy, useSnapshot } from "valtio";
import { ListPostsQuery } from "../API";

// type for store
type TStore = {
  posts: ListPostsQuery | undefined;
};

// create store to upkeep states
export const postsStore = proxy<TStore>({
  posts: undefined,
});

// export store
export function usePostsStore() {
  const snapshot = useSnapshot(postsStore);
  return snapshot.posts;
}
