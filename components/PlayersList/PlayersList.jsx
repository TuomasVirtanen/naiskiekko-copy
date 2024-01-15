import { Box, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import { listPlayers } from "../../graphql/queries";
import useGetPlayers from "../../hooks/useGetPlayers";
import { usePlayersStore } from "../../store/PlayersStore";
import PlayersListItem from "../PlayersListItem/PlayersListItem";

export default function PlayersList({ onDeletePlayer, onEditPlayer }) {
  function handleDeletePlayers() {
    onDeletePlayer();
  }

  function handleEditPlayer() {
    onEditPlayer();
  }

  useGetPlayers(listPlayers);

  const players = usePlayersStore();

  const playersArray = players?.listPlayers?.items
    .map((player) => player)
    .sort((playerA, playerB) => {
      // First, sort by team name
      if (playerA.playerTeam < playerB.playerTeam) return -1;
      if (playerA.playerTeam > playerB.playerTeam) return 1;

      // Then sort by last name
      if (playerA.lastName.toUpperCase() < playerB.lastName.toUpperCase())
        return -1;
      if (playerA.lastName.toUpperCase() > playerB.lastName.toUpperCase())
        return 1;

      return 0;
    });

  return (
    <Stack
      direction="column"
      divider={<Divider orientation="vertical" color="black" flexItem />}
      spacing={1}
    >
      {playersArray ? (
        playersArray
          .filter((player) => player._deleted !== true)
          .map((player, index) => {
            return (
              <PlayersListItem
                key={index}
                player={player}
                onPlayerEdited={handleEditPlayer}
                onDeleteButtonPressed={handleDeletePlayers}
              ></PlayersListItem>
            );
          })
      ) : (
        <h1>Loading...</h1>
      )}
    </Stack>
  );
}
