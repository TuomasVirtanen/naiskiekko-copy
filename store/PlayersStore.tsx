// valtio imports
import { proxy, useSnapshot } from "valtio";
import { ListPlayersQuery } from "../API";

// type for store
type TStore = {
  // players: TPlayer[];
  players: ListPlayersQuery | undefined;
};

// create store to upkeep states
export const playersStore = proxy<TStore>({
  players: undefined,
});

// export store
export function usePlayersStore() {
  const snapshot = useSnapshot(playersStore);
  return snapshot.players;
}
