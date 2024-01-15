import { Button, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { API } from "aws-amplify";
import { deletePlayers, updatePlayers } from "../../graphql/mutations";
import { useFormik } from "formik";

export default function PlayersListItem({
  player,
  onDeleteButtonPressed,
  onPlayerEdited,
}) {
  const [editMode, setEditMode] = useState(false);

  const deletePlayer = async (id, version) => {
    const playerData = {
      id: id,
      _version: version,
    };

    console.log(playerData);

    try {
      await API.graphql({
        query: deletePlayers,
        variables: { input: playerData },
      });
      await onDeleteButtonPressed();
      console.log("deleting succeeded");
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      id: player.id,
      firstName: player.firstName,
      lastName: player.lastName,
      birthYear: player.birthYear,
      playerTeam: player.playerTeam,
      playerNumber: player.playerNumber,
      playerPosition: player.playerPosition,
      playerShoots: player.playerShoots,
      playerPhoto: player.playerPhoto,
      linkToEliteProspects: player.linkToEliteProspects,
      linkToTeamSite: player.linkToTeamSite,
      _version: player._version,
    },

    onSubmit: async (values) => {
      const playerData = {
        id: values.id,
        firstName: values.firstName,
        lastName: values.lastName,
        birthYear: values.birthYear,
        playerTeam: values.playerTeam,
        playerNumber: values.playerNumber,
        playerPosition: values.playerPosition,
        playerShoots: values.playerShoots,
        playerPhoto: values.playerPhoto,
        linkToEliteProspects: values.linkToEliteProspects,
        linkToTeamSite: values.linkToTeamSite,
        _version: values._version,
      };

      try {
        console.log(playerData);
        await API.graphql({
          query: updatePlayers,
          variables: { input: playerData },
        });
        await onPlayerEdited();
        setEditMode(false);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
      {editMode ? (
        <div>
          <form onSubmit={formik.handleSubmit}>
            <br></br>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="Etunimi"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Sukunimi"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="birthYear"
              name="birthYear"
              label="Syntymävuosi"
              value={formik.values.birthYear}
              onChange={formik.handleChange}
              error={
                formik.touched.birthYear && Boolean(formik.errors.birthYear)
              }
              helperText={formik.touched.birthYear && formik.errors.birthYear}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="playerTeam"
              name="playerTeam"
              label="Tiimi"
              value={formik.values.playerTeam}
              onChange={formik.handleChange}
              error={
                formik.touched.playerTeam && Boolean(formik.errors.playerTeam)
              }
              helperText={formik.touched.playerTeam && formik.errors.playerTeam}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="playerNumber"
              name="playerNumber"
              label="Pelinumero"
              value={formik.values.playerNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.playerNumber &&
                Boolean(formik.errors.playerNumber)
              }
              helperText={
                formik.touched.playerNumber && formik.errors.playerNumber
              }
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="playerPosition"
              name="playerPosition"
              label="Pelipaikka"
              value={formik.values.playerPosition}
              onChange={formik.handleChange}
              error={
                formik.touched.playerPosition &&
                Boolean(formik.errors.playerPosition)
              }
              helperText={
                formik.touched.playerPosition && formik.errors.playerPosition
              }
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="playerShoots"
              name="playerShoots"
              label="Kätisyys"
              value={formik.values.playerShoots}
              onChange={formik.handleChange}
              error={
                formik.touched.playerShoots &&
                Boolean(formik.errors.playerShoots)
              }
              helperText={
                formik.touched.playerShoots && formik.errors.playerShoots
              }
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="playerPhoto"
              name="playerPhoto"
              label="Kuva"
              value={formik.values.playerPhoto}
              onChange={formik.handleChange}
              error={
                formik.touched.playerPhoto && Boolean(formik.errors.playerPhoto)
              }
              helperText={
                formik.touched.playerPhoto && formik.errors.playerPhoto
              }
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="linkToEliteProspects"
              name="linkToEliteProspects"
              label="Linkki Elite Prospects -sivulle"
              value={formik.values.linkToEliteProspects}
              onChange={formik.handleChange}
              error={
                formik.touched.linkToEliteProspects &&
                Boolean(formik.errors.linkToEliteProspects)
              }
              helperText={
                formik.touched.linkToEliteProspects &&
                formik.errors.linkToEliteProspects
              }
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="linkToTeamSite"
              name="linkToTeamSite"
              label="Linkki joukkueen omalle sivulle"
              value={formik.values.linkToTeamSite}
              onChange={formik.handleChange}
              error={
                formik.touched.linkToTeamSite &&
                Boolean(formik.errors.linkToTeamSite)
              }
              helperText={
                formik.touched.linkToTeamSite && formik.errors.linkToTeamSite
              }
            />
            <br></br>
            <br></br>

            <Button variant="contained" type="submit">
              Valmis
            </Button>
          </form>
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottom: 1,
          }}
        >
          <Typography>
            {player.playerTeam +
              " | " +
              player.lastName +
              " " +
              player.firstName}
          </Typography>
          <Button onClick={() => setEditMode(true)}>
            <EditIcon />
          </Button>
          <Button onClick={() => deletePlayer(player.id, player._version)}>
            <DeleteForeverIcon />
          </Button>
        </Box>
      )}
    </>
  );
}
