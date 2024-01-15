import { useEffect } from "react";
import { playersStore } from "../store/PlayersStore";

import { Amplify, API, graphqlOperation } from "aws-amplify";
import { listPlayers } from "../graphql/queries";
import { ListPlayersQuery } from "../API";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

export default function useGetPlayers(query: string) {
  console.log("[Alert] Fetching player data from database");

  const getPlayersData = async (query: string) => {
    try {
      const playerData = (await API.graphql(graphqlOperation(query))) as {
        data: ListPlayersQuery;
      };

      playersStore.players = playerData.data;

      console.log("[Success] AWS fetched players");
    } catch (error) {
      console.error("[Warning] AWS: " + error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    getPlayersData(query);

    // return cleanup function
    return () => {
      controller.abort();
    };
  }, [query]);
}
