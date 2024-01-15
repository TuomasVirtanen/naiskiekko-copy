import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { listPlayers } from "../../graphql/queries";
import useGetPlayers from "../../hooks/useGetPlayers";
import { usePlayersStore } from "../../store/PlayersStore";
import PlayerCard from "../PlayerCard/PlayerCard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";

export default function PlayersDeck() {
  useGetPlayers(listPlayers);

  const players = usePlayersStore();

  const playersArray = players?.listPlayers?.items
    .map((player) => player)
    .sort((playerA, playerB) => playerA.playerNumber - playerB.playerNumber);

  const [expandedSections, setExpandedSections] = useState([]);

  const handleSectionClick = (sectionIndex) => {
    if (expandedSections.includes(sectionIndex)) {
      // Clicked section is already expanded, close it
      setExpandedSections([]);
    } else {
      // Clicked section is not expanded, close the previously expanded sections and open the clicked section
      setExpandedSections([sectionIndex]);
    }
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <h3
          onClick={() => handleSectionClick(0)}
          style={{
            margin: "0 10px",
            cursor: "pointer",
            textDecoration: expandedSections === 0 ? "underline" : "none",
            fontWeight: expandedSections.includes(0) ? "bold" : "normal",
          }}
        >
          Maalivahdit ⬇
        </h3>
        <h3
          onClick={() => handleSectionClick(1)}
          style={{
            margin: "0 10px",
            cursor: "pointer",
            textDecoration: expandedSections === 1 ? "underline" : "none",
            fontWeight: expandedSections.includes(1) ? "bold" : "normal",
          }}
        >
          Puolustajat ⬇
        </h3>
        <h3
          onClick={() => handleSectionClick(2)}
          style={{
            margin: "0 10px",
            cursor: "pointer",
            textDecoration: expandedSections === 2 ? "underline" : "none",
            fontWeight: expandedSections.includes(2) ? "bold" : "normal",
          }}
        >
          Hyökkääjät ⬇
        </h3>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {expandedSections.includes(0) && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: isSmallScreen ? "center" : "flex-start",
            }}
          >
            {players ? (
              playersArray
                .filter(
                  (player) =>
                    player._deleted !== true &&
                    player.playerPosition.toLowerCase() === "maalivahti"
                )
                .map((player, index) => {
                  return <PlayerCard key={index} player={player} />;
                })
            ) : (
              <h1>Loading...</h1>
            )}
          </Box>
        )}
        {expandedSections.includes(1) && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: isSmallScreen ? "center" : "flex-start",
            }}
          >
            {players ? (
              playersArray
                .filter(
                  (player) =>
                    player._deleted !== true &&
                    player.playerPosition.toLowerCase() === "puolustaja"
                )
                .map((player, index) => {
                  return <PlayerCard key={index} player={player} />;
                })
            ) : (
              <h1>Loading...</h1>
            )}
          </Box>
        )}
        {expandedSections.includes(2) && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: isSmallScreen ? "center" : "flex-start",
            }}
          >
            {players ? (
              playersArray
                .filter(
                  (player) =>
                    player._deleted !== true &&
                    player.playerPosition.toLowerCase() === "hyökkääjä"
                )
                .map((player, index) => {
                  return <PlayerCard key={index} player={player} />;
                })
            ) : (
              <h1>Loading...</h1>
            )}
          </Box>
        )}
      </Box>
    </>
  );
}
