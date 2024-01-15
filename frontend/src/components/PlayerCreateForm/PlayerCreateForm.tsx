import { createPlayers } from "../../graphql/mutations";
import { useFormik } from "formik";
import { API } from "aws-amplify";

import { TextField, Button } from "@mui/material";

type PlayerAddFormProps = {
  onAddPlayer: () => void;
};

export default function PlayerCreateForm({ onAddPlayer }: PlayerAddFormProps) {
  const formik = useFormik({
    initialValues: {
      firstName: "Etunimi",
      lastName: "Sukunimi",
      birthYear: "-",
      playerTeam: "Tiimi",
      playerNumber: 0,
      playerPosition: "Hyökkääjä",
      playerShoots: "-",
      playerPhoto: "ei-kuvaa.png",
      linkToEliteProspects: "-",
      linkToTeamSite: "-",
    },

    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      const playerData = {
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
      };

      try {
        await API.graphql({
          query: createPlayers,
          variables: { input: playerData },
        });
        await onAddPlayer();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <br></br>
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="Etunimi"
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <br></br>
        <br></br>
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Sukunimi"
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
          onChange={formik.handleChange}
          error={formik.touched.birthYear && Boolean(formik.errors.birthYear)}
          helperText={formik.touched.birthYear && formik.errors.birthYear}
        />
        <br></br>
        <br></br>
        <TextField
          fullWidth
          id="playerTeam"
          name="playerTeam"
          label="Tiimi"
          onChange={formik.handleChange}
          error={formik.touched.playerTeam && Boolean(formik.errors.playerTeam)}
          helperText={formik.touched.playerTeam && formik.errors.playerTeam}
        />
        <br></br>
        <br></br>
        <TextField
          fullWidth
          id="playerNumber"
          name="playerNumber"
          label="Pelinumero"
          onChange={formik.handleChange}
          error={
            formik.touched.playerNumber && Boolean(formik.errors.playerNumber)
          }
          helperText={formik.touched.playerNumber && formik.errors.playerNumber}
        />
        <br></br>
        <br></br>
        <TextField
          fullWidth
          id="playerPosition"
          name="playerPosition"
          label="Pelipaikka"
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
          onChange={formik.handleChange}
          error={
            formik.touched.playerShoots && Boolean(formik.errors.playerShoots)
          }
          helperText={formik.touched.playerShoots && formik.errors.playerShoots}
        />
        <br></br>
        <br></br>
        <TextField
          fullWidth
          id="playerPhoto"
          name="playerPhoto"
          label="Kuvalinkki (esimerkki.jpg)"
          onChange={formik.handleChange}
          error={
            formik.touched.playerPhoto && Boolean(formik.errors.playerPhoto)
          }
          helperText={formik.touched.playerPhoto && formik.errors.playerPhoto}
        />
        <br></br>
        <br></br>
        <TextField
          fullWidth
          id="linkToEliteProspects"
          name="linkToEliteProspects"
          label="Linkki Elite Prospects -sivulle"
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
          Lisää pelaaja
        </Button>
      </form>
    </div>
  );
}
